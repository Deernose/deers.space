import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Save, Trash2, Package } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Product = {
  id: string;
  title: string;
  description: string | null;
  price_cents: number;
  currency: string;
  image_url: string | null;
  category: string | null;
  in_stock: boolean;
  sort_order: number;
};

const emptyDraft = (order: number): Omit<Product, "id"> => ({
  title: "",
  description: "",
  price_cents: 0,
  currency: "BRL",
  image_url: "",
  category: "",
  in_stock: true,
  sort_order: order,
});

const Admin = () => {
  const [tab] = useState<"produtos">("produtos");
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [draft, setDraft] = useState<Product | (Omit<Product, "id"> & { id?: string }) | null>(null);
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("products")
      .select("*")
      .order("sort_order", { ascending: true });
    setProducts((data as Product[]) || []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const selected = useMemo(
    () => products.find((p) => p.id === selectedId) || null,
    [products, selectedId]
  );

  useEffect(() => {
    if (selected) setDraft({ ...selected });
  }, [selected]);

  const startNew = () => {
    const nextOrder = (products[products.length - 1]?.sort_order || 0) + 1;
    setSelectedId(null);
    setDraft(emptyDraft(nextOrder));
  };

  const save = async () => {
    if (!draft) return;
    setStatus("salvando…");
    const payload = {
      title: draft.title,
      description: draft.description,
      price_cents: Number(draft.price_cents) || 0,
      currency: draft.currency || "BRL",
      image_url: draft.image_url,
      category: draft.category,
      in_stock: draft.in_stock,
      sort_order: Number(draft.sort_order) || 0,
    };
    if ("id" in draft && draft.id) {
      const { error } = await supabase.from("products").update(payload).eq("id", draft.id);
      setStatus(error ? `erro: ${error.message}` : "salvo.");
    } else {
      const { data, error } = await supabase.from("products").insert(payload).select().single();
      if (error) setStatus(`erro: ${error.message}`);
      else {
        setStatus("criado.");
        setSelectedId((data as Product).id);
      }
    }
    await load();
    setTimeout(() => setStatus(""), 2500);
  };

  const remove = async () => {
    if (!draft || !("id" in draft) || !draft.id) return;
    if (!confirm(`Excluir "${draft.title}"?`)) return;
    const { error } = await supabase.from("products").delete().eq("id", draft.id);
    if (error) setStatus(`erro: ${error.message}`);
    else {
      setDraft(null);
      setSelectedId(null);
      await load();
    }
  };

  const setField = <K extends keyof Product>(key: K, value: Product[K]) => {
    setDraft((d) => (d ? ({ ...d, [key]: value } as typeof d) : d));
  };

  return (
    <div className="admin">
      <header className="admin-topbar">
        <Link to="/" className="admin-back">
          <ArrowLeft size={16} /> deers.space
        </Link>
        <h1>painel /admin</h1>
        <span className="admin-hint">edição direta · sem autenticação</span>
      </header>

      <div className="admin-body">
        <nav className="admin-tabs" aria-label="Seções">
          <button className={`admin-tab is-active`} type="button">
            <Package size={14} /> produtos
          </button>
        </nav>

        {tab === "produtos" && (
          <div className="admin-grid">
            <aside className="admin-list">
              <button className="admin-new" type="button" onClick={startNew}>
                <Plus size={14} /> novo produto
              </button>
              {loading ? (
                <p className="admin-loading">carregando…</p>
              ) : (
                <ul>
                  {products.map((p) => (
                    <li key={p.id}>
                      <button
                        type="button"
                        className={`admin-list-item ${p.id === selectedId ? "is-active" : ""}`}
                        onClick={() => setSelectedId(p.id)}
                      >
                        <span className="thumb">
                          {p.image_url ? <img src={p.image_url} alt="" /> : <span className="thumb-empty" />}
                        </span>
                        <span className="meta">
                          <strong>{p.title}</strong>
                          <span>R$ {(p.price_cents / 100).toFixed(2).replace(".", ",")}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </aside>

            <section className="admin-editor">
              {!draft ? (
                <div className="admin-empty">
                  <p>selecione um produto ou crie um novo.</p>
                </div>
              ) : (
                <form
                  className="admin-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    save();
                  }}
                >
                  <div className="admin-form-header">
                    <h2>{"id" in draft && draft.id ? "editar produto" : "novo produto"}</h2>
                    <div className="admin-actions">
                      {"id" in draft && draft.id && (
                        <button type="button" className="admin-btn danger" onClick={remove}>
                          <Trash2 size={14} /> excluir
                        </button>
                      )}
                      <button type="submit" className="admin-btn primary">
                        <Save size={14} /> salvar
                      </button>
                    </div>
                  </div>

                  <div className="admin-fields">
                    <label>
                      título
                      <input value={draft.title} onChange={(e) => setField("title", e.target.value)} required />
                    </label>
                    <label>
                      categoria
                      <input value={draft.category || ""} onChange={(e) => setField("category", e.target.value)} />
                    </label>
                    <label>
                      preço (R$)
                      <input
                        type="number"
                        step="0.01"
                        value={(draft.price_cents / 100).toFixed(2)}
                        onChange={(e) => setField("price_cents", Math.round(parseFloat(e.target.value || "0") * 100))}
                      />
                    </label>
                    <label>
                      moeda
                      <input value={draft.currency} onChange={(e) => setField("currency", e.target.value)} />
                    </label>
                    <label>
                      ordem
                      <input
                        type="number"
                        value={draft.sort_order}
                        onChange={(e) => setField("sort_order", parseInt(e.target.value || "0", 10))}
                      />
                    </label>
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        checked={draft.in_stock}
                        onChange={(e) => setField("in_stock", e.target.checked)}
                      />
                      em estoque
                    </label>
                    <label className="full">
                      url da imagem
                      <input
                        value={draft.image_url || ""}
                        placeholder="/products/xyz.jpg ou https://..."
                        onChange={(e) => setField("image_url", e.target.value)}
                      />
                    </label>
                    <label className="full">
                      descrição
                      <textarea
                        rows={4}
                        value={draft.description || ""}
                        onChange={(e) => setField("description", e.target.value)}
                      />
                    </label>

                    {draft.image_url && (
                      <div className="admin-preview">
                        <img src={draft.image_url} alt="preview" />
                      </div>
                    )}
                  </div>

                  {status && <p className="admin-status">{status}</p>}
                </form>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
