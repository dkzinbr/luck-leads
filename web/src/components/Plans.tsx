import { plans, site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Plans() {
  return (
    <section id="clube" className="scroll-mt-24 bg-black py-20 text-ivory">
      <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.32em] text-gold uppercase">Clube Luck&apos;s</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[0.95] font-semibold">
              O visual na régua,
              <br />
              todo mês.
            </h2>
            <p className="max-w-[36ch] text-[15px] leading-relaxed text-ivory/75">
              Assinatura recorrente via Mercado Pago. Cortes e combos com dia definido — ou liberdade
              total. Prioridade na agenda e desconto em produto.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 60}>
              <article
                className={`flex h-full flex-col border p-5 ${
                  plan.featured ? "border-gold bg-black" : "border-white/10 bg-white/5"
                }`}
              >
                <h3 className="text-[15px] font-medium">{plan.name}</h3>
                <p className="mt-1 text-[11px] tracking-[0.08em] text-ivory/60 uppercase">{plan.days}</p>
                <p className="font-serif mt-4 text-[28px] leading-none text-gold">
                  {plan.price} <small className="font-sans text-xs font-normal text-ivory/55">/mês</small>
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-ivory/70">{plan.body}</p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={300}>
            <article className="flex h-full flex-col justify-center border border-white/10 bg-white/5 p-5">
              <h3 className="text-[15px] font-medium">O que o clube entrega</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-ivory/70">
                Serviços inclusos no plano · prioridade na agenda · desconto em produtos da barbearia.
                Assine no app, use o crédito no mês e mantenha o padrão.
              </p>
              <a
                href={site.booking}
                className="mt-5 inline-flex w-fit bg-gold px-5 py-3 text-[13px] font-medium text-black transition-transform duration-300 hover:scale-105"
              >
                Assinar no app
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
