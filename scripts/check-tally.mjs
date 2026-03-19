import { chromium } from "playwright";

async function run() {
  const baseUrl = "http://127.0.0.1:3010";
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const results = [];
  const record = (name, ok, detail) => results.push({ name, ok, detail });

  try {
    // /contact: iframe should end up with a real src.
    await page.goto(`${baseUrl}/contact`, { waitUntil: "domcontentloaded" });

    const contactFrame = page.locator('iframe[data-tally-src][title="Contact me"]');
    await contactFrame.waitFor({ state: "attached", timeout: 15_000 });

    await page.waitForFunction(
      () => {
        const el = document.querySelector('iframe[data-tally-src][title="Contact me"]');
        return !!el && !!el.getAttribute("src") && el.getAttribute("src")?.includes("tally.so/embed/");
      },
      null,
      { timeout: 20_000 }
    );
    record("/contact embed", true, "iframe src set to tally.so/embed");

    // /endorsements: clicking Contact should open a Tally popup iframe.
    await page.goto(`${baseUrl}/endorsements`, { waitUntil: "domcontentloaded" });

    const contactBtn = page.getByRole("button", { name: "Contact" }).first();
    await contactBtn.waitFor({ state: "visible", timeout: 20_000 });
    await contactBtn.click();

    // Tally popup injects an iframe that points at tally.so
    const popupFrame = page.locator('iframe[src*="tally.so"]').first();
    await popupFrame.waitFor({ state: "visible", timeout: 20_000 });
    record("/endorsements popup", true, "popup iframe visible");
  } catch (e) {
    record("runtime", false, e instanceof Error ? e.message : String(e));
  } finally {
    await browser.close();
  }

  for (const r of results) {
    console.log(`${r.ok ? "PASS" : "FAIL"}: ${r.name}${r.detail ? ` — ${r.detail}` : ""}`);
  }

  const failed = results.some((r) => !r.ok);
  process.exitCode = failed ? 1 : 0;
}

run();

