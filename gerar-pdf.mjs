import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const root = fileURLToPath(new URL(".", import.meta.url));
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url, "http://127.0.0.1");
  let file = url.pathname === "/" ? "/proposta.html" : url.pathname;
  try {
    const buf = await readFile(join(root, decodeURIComponent(file)));
    res.writeHead(200, { "Content-Type": mime[extname(file)] || "application/octet-stream" });
    res.end(buf);
  } catch {
    res.writeHead(404);
    res.end("not found");
  }
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();
const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--font-render-hinting=none"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });
await page.goto(`http://127.0.0.1:${port}/proposta.html`, { waitUntil: "networkidle0", timeout: 120000 });
await page.evaluate(async () => {
  await document.fonts.ready;
  await Promise.all(
    [...document.images].map((img) =>
      img.complete
        ? null
        : new Promise((r) => {
            img.onload = img.onerror = r;
          }),
    ),
  );
});
await page.pdf({
  path: join(root, "Lucks-Style-Apresentacao.pdf"),
  printBackground: true,
  preferCSSPageSize: true,
  pageRanges: "1-9",
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});
const pages = await page.$$(".page");
console.log("folhas no layout:", pages.length);
await browser.close();
server.close();
console.log("PDF gerado: Lucks-Style-Apresentacao.pdf");
