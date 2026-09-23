import { principles, site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="casa" className="scroll-mt-24">
      <div className="grid lg:grid-cols-2">
        <div className="bg-black px-6 py-16 text-ivory sm:px-12 lg:px-16 lg:py-24">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.32em] text-gold uppercase">A casa</p>
            <h2 className="font-serif mt-4 max-w-[16ch] text-[clamp(32px,4vw,48px)] leading-[0.95] font-semibold">
              O ponto de encontro do homem que não abre mão da excelência.
            </h2>
            <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-ivory/75">
              Desde {site.since}, a Barbearia Luck&apos;s Style ocupa a {site.addressLine} como
              endereço de rotina — não de ocasião. A técnica clássica da barbearia old school encontra
              aqui as tendências do grooming masculino: degradê alinhado, barba desenhada, produto
              certo na finalização.
            </p>
            <p className="font-serif mt-8 max-w-[40ch] border-l-2 border-gold pl-4 text-lg leading-snug italic">
              Cada detalhe existe para entregar mais do que um serviço: uma experiência de cuidado,
              confiança e bem-estar.
            </p>
            <div className="mt-12 border-t border-gold/20 pt-5">
              <p className="font-medium">Lucas Paulo · fundador</p>
              <p className="mt-1 text-sm leading-relaxed text-ivory/70">
                Abriu a casa em 2017 e segue na cadeira. A marca carrega o nome e o padrão dele — old
                school na técnica, contemporâneo no visual.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="bg-paper px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
          <Reveal delay={80}>
            <p className="text-[11px] font-medium tracking-[0.32em] text-gold uppercase">
              O que a casa promete
            </p>
            <h2 className="font-serif mt-3 text-[30px] leading-none font-semibold">
              Quatro princípios. Um padrão.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {principles.map((item) => (
                <article key={item.n} className="border border-line bg-[#fffdf8] p-5">
                  <small className="font-serif text-lg text-gold">{item.n}</small>
                  <h3 className="mt-3 text-base font-medium">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
