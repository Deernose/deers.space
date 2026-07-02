-- Allow public write access for simple admin panel (no auth)
CREATE POLICY "Public can insert products" ON public.products FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Public can update products" ON public.products FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Public can delete products" ON public.products FOR DELETE TO anon, authenticated USING (true);
GRANT INSERT, UPDATE, DELETE ON public.products TO anon, authenticated;

-- Trigger to keep updated_at fresh
DROP TRIGGER IF EXISTS trg_products_updated_at ON public.products;
CREATE TRIGGER trg_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();