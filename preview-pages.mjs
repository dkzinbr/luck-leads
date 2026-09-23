import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const root = fileURLToPath(new URL(".", import.meta.url));
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url, "http://127.0.0.1");
  const file = url.pathname === "/" ? "/proposta.html" : url.pathname;
  try {
    const buf = await readFile(join(root, decodeURIComponent(file)));
    res.writeHead(200, { "Content-Type": mime[extname(file)] || "application/octet-stream" });
    res.end(buf);
  } catch {
    res.writeHead(404);
    res.end("nf");
  }
});

await new Promise((r) => server.listen(0, "127.0.0.1", r));
const { port } = server.address();
const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--font-render-hinting=none"],
});
const page = await browser.newPage();
await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1.5 });
await page.goto(`http://127.0.0.1:${port}/proposta.html`, { waitUntil: "networkidle0", timeout: 120000 });
await page.evaluate(async () => {
  await document.fonts.ready;
});
await mkdir(join(root, "preview"), { recursive: true });
const els = await page.$$(".page");
for (let i = 0; i < els.length; i++) {
  await els[i].screenshot({ path: join(root, "preview", `p${i + 1}.png`) });
}
const overflow = await page.evaluate(() =>
  [...document.querySelectorAll(".page")].map((p, i) => ({
    n: i + 1,
    scroll: p.scrollHeight,
    client: p.clientHeight,
    overflow: p.scrollHeight - p.clientHeight,
  })),
);
console.log(JSON.stringify(overflow, null, 2));
await browser.close();
server.close();
