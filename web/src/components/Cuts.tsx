import Image from "next/image";
import { cuts } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Cuts() {
  return (
    <section id="cortes" className="scroll-mt-24 py-20">
      <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.32em] text-gold uppercase">A tesoura fala</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/barber-pole.svg"
                alt=""
                width={32}
                height={104}
                className="h-[72px] w-auto"
              />
              <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[0.95] font-semibold">
                O padrão
                <br />
                da casa.
              </h2>
            </div>
            <p className="max-w-[34ch] text-[15px] leading-relaxed text-muted">
              Trabalhos reais da Luck&apos;s Style. Degradê, cacho, social e high top — old school na
              máquina, contemporâneo no desenho.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {cuts.map((cut, i) => (
            <Reveal key={cut.src} delay={i * 70}>
              <figure className="group overflow-hidden bg-black">
                <div className="relative h-[340px] overflow-hidden sm:h-[400px]">
                  <Image
                    src={cut.src}
                    alt={cut.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover object-[center_40%] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="bg-black px-3.5 py-3 text-[11px] tracking-[0.16em] text-gold uppercase">
                  {cut.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
