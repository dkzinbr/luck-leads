import { faq, paths, site, waDefault } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Visit() {
  return (
    <section id="visita" className="scroll-mt-24 py-20">
      <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.32em] text-gold uppercase">Presença local</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[0.95] font-semibold">
              Uma casa que
              <br />
              se encontra.
            </h2>
            <p className="max-w-[32ch] text-[15px] leading-relaxed text-muted">
              Do Instagram à cadeira, sem labirinto. App, WhatsApp ou mapa — três portas, o mesmo
              padrão.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {paths.map((path, i) => (
            <Reveal key={path.n} delay={i * 80}>
              <article className="border border-line bg-[#fffdf8] p-5">
                <small className="font-serif text-lg text-gold">{path.n}</small>
                <h3 className="mt-3 text-base font-medium">{path.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{path.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid border border-line md:grid-cols-2">
          <div className="p-6">
            <p className="text-[11px] font-medium tracking-[0.32em] text-gold uppercase">Matriz</p>
            <h3 className="font-serif mt-3 text-[26px] leading-tight font-semibold">
              <a href={site.maps} className="transition-colors hover:text-gold">
                {site.addressLine}
              </a>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {site.neighborhood} · {site.city} · CEP {site.cep}
            </p>
            <a
              href={site.maps}
              className="mt-5 inline-flex bg-black px-5 py-3 text-[13px] font-medium text-gold transition-transform duration-300 hover:scale-105"
            >
              Abrir no Google Maps
            </a>
          </div>
          <div className="border-t border-line p-6 md:border-t-0 md:border-l">
            <p className="text-[11px] font-medium tracking-[0.32em] text-gold uppercase">Contato</p>
            <p className="mt-4 text-[15px] leading-relaxed">
              <strong>{site.hours}</strong>
              <br />
              <a href={waDefault} className="transition-colors hover:text-gold">
                {site.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold">
                {site.email}
              </a>
              <br />
              <a href={site.instagramUrl} className="transition-colors hover:text-gold">
                instagram.com/{site.instagram}
              </a>
            </p>
          </div>
        </div>

        <Reveal>
          <div className="mt-6 overflow-hidden border border-line bg-[#fffdf8]">
            <iframe
              title="Mapa da Barbearia Luck's Style"
              src={site.mapsEmbed}
              className="h-[280px] w-full border-0 md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            {faq.map((item) => (
              <div key={item.q} className="border-b border-line py-4">
                <h3 className="text-[15px] font-medium">{item.q}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="bg-black p-6 text-ivory sm:p-8">
            <p className="text-[11px] font-medium tracking-[0.32em] text-gold uppercase">Fale com a casa</p>
            <h3 className="font-serif mt-3 text-[30px] leading-none font-semibold">
              Marca o horário. O resto a gente resolve na cadeira.
            </h3>
            <p className="mt-4 text-[13px] leading-relaxed text-ivory/75">
              Agendamento online, WhatsApp ou Instagram. Três portas, o mesmo padrão.
            </p>
            <p className="mt-5 text-[13px] leading-relaxed">
              <a href={waDefault} className="text-gold-soft">
                {site.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="text-gold-soft">
                {site.email}
              </a>
            </p>
            <a
              href={site.booking}
              className="mt-6 inline-flex bg-gold px-5 py-3 text-[13px] font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              Agendar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
