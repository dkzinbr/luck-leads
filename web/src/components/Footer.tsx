import { site, waDefault } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10 text-[13px] text-muted">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-col gap-2 sm:flex-row sm:justify-between">
        <p>
          {site.addressLine} · {site.neighborhood} · {site.city}
        </p>
        <p>
          <a href={waDefault} className="hover:text-ink">
            {site.phoneDisplay}
          </a>
          {" · "}
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            {site.email}
          </a>
          {" · "}
          <a href={site.instagramUrl} className="hover:text-ink">
            @{site.instagram}
          </a>
        </p>
      </div>
    </footer>
  );
}
