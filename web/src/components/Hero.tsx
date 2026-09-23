import Image from "next/image";
import { site, waDefault } from "@/lib/site";

export function Hero() {
  return (
    <section id="topo" className="grid min-h-[calc(100svh-76px)] lg:grid-cols-[1.15fr_0.85fr]">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-col justify-center py-16 lg:mx-0 lg:w-full lg:pl-[max(1.25rem,calc((100%-1120px)/2+1.25rem))] lg:pr-12">
        <p className="animate-fade-up text-[11px] font-medium tracking-[0.32em] text-gold uppercase">
          Desde {site.since} · Vila Matilde / Vila Talarico
        </p>
        <h1 className="animate-fade-up font-serif mt-5 text-[clamp(42px,7vw,76px)] leading-[0.92] font-semibold delay-100">
          Sente.
          <br />
          Relaxe.
          <br />
          Saia no padrão.
        </h1>
        <p className="animate-fade-up mt-5 max-w-[40ch] text-[17px] leading-relaxed text-muted delay-200">
          Barbearia old school com grooming contemporâneo. Quase uma década lapidando o visual do
          homem que não abre mão da excelência.
        </p>
        <div className="animate-fade-up mt-8 flex flex-wrap gap-2.5 delay-300">
          <a
            href={site.booking}
            className="bg-gold px-5 py-3 text-[13px] font-medium text-black transition-transform duration-300 hover:scale-105"
          >
            Agendar horário
          </a>
          <a
            href={waDefault}
            className="bg-black px-5 py-3 text-[13px] font-medium text-gold transition-transform duration-300 hover:scale-105"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="relative flex min-h-[420px] flex-col justify-between bg-black px-10 py-12 text-ivory">
        <div className="pointer-events-none absolute inset-6 border border-gold/30" />
        <Image
          src="/brand/logo.jpg"
          alt=""
          width={236}
          height={236}
          className="relative mx-auto size-[min(236px,58vw)] rounded-full object-cover"
          priority
        />
        <div className="relative text-sm leading-relaxed">
          <strong className="mb-1.5 block text-gold-soft">Invista no seu visual</strong>
          <a href={site.maps} className="transition-colors hover:text-gold">
            {site.addressLine}
          </a>
          <br />
          {site.hours} ·{" "}
          <a href={waDefault} className="transition-colors hover:text-gold">
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
