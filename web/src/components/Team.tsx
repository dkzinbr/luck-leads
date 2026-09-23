import Image from "next/image";
import { team } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Team() {
  return (
    <section id="equipe" className="scroll-mt-24 py-20">
      <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.32em] text-gold uppercase">
            Quem segura a tesoura
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[0.95] font-semibold">
              Quatro barbeiros.
              <br />
              Uma casa.
            </h2>
            <p className="max-w-[32ch] text-[15px] leading-relaxed text-muted">
              No app, o cliente escolhe o profissional ou deixa a casa indicar. Quatro cadeiras, o
              mesmo padrão.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 80}>
              <article className="group overflow-hidden border border-line bg-[#fffdf8]">
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <small className="block text-[10px] tracking-[0.2em] text-gold uppercase">
                    {member.role}
                  </small>
                  <h3 className="mt-1.5 text-lg font-medium">{member.name}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted">{member.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
