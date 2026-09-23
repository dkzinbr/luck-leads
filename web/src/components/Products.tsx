import { products, site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Products() {
  return (
    <section id="produtos" className="scroll-mt-24 py-20">
      <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.32em] text-gold uppercase">
            Leve o padrão para casa
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[0.95] font-semibold">
              O corte acaba
              <br />
              na cadeira.
              <br />
              O estilo, não.
            </h2>
            <p className="max-w-[32ch] text-[15px] leading-relaxed text-muted">
              Linha Garden, pomadas da casa e essenciais de barba. Preços do catálogo atual da matriz.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={(i % 3) * 70}>
              <article className="h-full border border-line bg-[#fffdf8] p-4 transition-transform duration-300 hover:-translate-y-0.5">
                <small className="block text-[10px] tracking-[0.16em] text-gold uppercase">
                  {product.cat}
                </small>
                <h3 className="mt-1.5 text-[15px] font-medium">{product.name}</h3>
                <p className="mt-1 text-sm font-medium">{product.price}</p>
                <p className="mt-2 text-[12px] leading-relaxed text-muted">{product.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a
            href={site.booking}
            className="mt-8 inline-flex bg-gold px-5 py-3 text-[13px] font-medium text-black transition-transform duration-300 hover:scale-105"
          >
            Ver catálogo e agendar
          </a>
        </Reveal>
      </div>
    </section>
  );
}
