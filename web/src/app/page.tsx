import { About } from "@/components/About";
import { Cuts } from "@/components/Cuts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Plans } from "@/components/Plans";
import { Products } from "@/components/Products";
import { Team } from "@/components/Team";
import { Visit } from "@/components/Visit";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
          <div className="border-b border-line px-5 py-5 sm:border-r lg:border-b-0">
            <small className="block text-[10px] tracking-[0.22em] text-gold uppercase">Onde</small>
            <b className="mt-2 block text-[13px] font-medium">Vila Talarico, São Paulo</b>
          </div>
          <div className="border-b border-line px-5 py-5 lg:border-r lg:border-b-0">
            <small className="block text-[10px] tracking-[0.22em] text-gold uppercase">Horário</small>
            <b className="mt-2 block text-[13px] font-medium">{site.hours}</b>
          </div>
          <div className="border-b border-line px-5 py-5 sm:border-r lg:border-b-0">
            <small className="block text-[10px] tracking-[0.22em] text-gold uppercase">WhatsApp</small>
            <b className="mt-2 block text-[13px] font-medium">
              <a href={`https://wa.me/${site.phoneRaw}`} className="hover:text-gold">
                {site.phoneDisplay}
              </a>
            </b>
          </div>
          <div className="px-5 py-5">
            <small className="block text-[10px] tracking-[0.22em] text-gold uppercase">Instagram</small>
            <b className="mt-2 block text-[13px] font-medium">
              <a href={site.instagramUrl} className="hover:text-gold">
                @{site.instagram}
              </a>
            </b>
          </div>
        </div>
        <About />
        <Team />
        <Cuts />
        <Plans />
        <Products />
        <Visit />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
