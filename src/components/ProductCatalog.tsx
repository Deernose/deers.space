import { useEffect, useState } from "react";
import { Heart, ArrowUpRight, Plus } from "lucide-react";
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
};

const formatPrice = (cents: number, currency: string) => {
  const value = (cents / 100).toFixed(2).replace(".", ",");
  const symbol = currency === "BRL" ? "R$" : currency;
  return `${symbol} ${value}`;
};

const tags = [
  "cronicamente online",
  "periféricos de alto padrão",
  "games & cultura digital",
  "amizade & parceria",
  "sem pressão. só conexão real.",
];

const ProductCatalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState<Set<string>>(new Set());

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("sort_order", { ascending: true });
      if (!error && data) setProducts(data as Product[]);
      setLoading(false);
    };
    load();
  }, []);

  const toggleLike = (id: string) => {
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section className="catalog" id="catalogo" aria-label="Catálogo de produtos">
      <div className="catalog-tags" aria-hidden="true">
        {tags.map((t) => (
          <span key={t} className="catalog-tag">
            <Plus size={12} strokeWidth={2.4} />
            {t}
          </span>
        ))}
      </div>

      <div className="catalog-header">
        <h2>
          <span className="accent">produtos</span> da comunidade
        </h2>
        <a href="#catalogo" className="catalog-see-all">
          ver todos <ArrowUpRight size={14} strokeWidth={2.2} />
        </a>
      </div>

      {loading ? (
        <div className="catalog-loading">carregando…</div>
      ) : products.length === 0 ? (
        <div className="catalog-loading">nenhum produto cadastrado ainda.</div>
      ) : (
        <ul className="product-grid">
          {products.map((p) => (
            <li key={p.id} className="product-card">
              <div className="product-media">
                {p.image_url ? (
                  <img src={p.image_url} alt={p.title} loading="lazy" />
                ) : (
                  <div
                    className="product-placeholder"
                    aria-label={p.title}
                    data-letter={p.title.charAt(0).toUpperCase()}
                  >
                    <span>{p.title}</span>
                  </div>
                )}
                <button
                  type="button"
                  className={`product-like ${liked.has(p.id) ? "is-liked" : ""}`}
                  onClick={() => toggleLike(p.id)}
                  aria-label={liked.has(p.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                >
                  <Heart size={14} strokeWidth={2} fill={liked.has(p.id) ? "#ff2230" : "none"} />
                </button>
              </div>
              <div className="product-info">
                <h3>{p.title}</h3>
                <p className="product-price">{formatPrice(p.price_cents, p.currency)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ProductCatalog;
