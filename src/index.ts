import { launch } from "@cloudflare/playwright";

export default {
  async fetch(request, env): Promise<Response> {
    const browser = await launch(env.MYBROWSER);

    try {
      const page = await browser.newPage();

      await page.goto("https://vmbro-lt-75.pages.dev/");

      await new Promise((r) => setTimeout(r, 500000));


      const image = await page.screenshot({
        type: "png",
        fullPage: true,
      });

      return new Response(image, {
        headers: {
          "Content-Type": "image/png",
        },
      });
    } finally {
      await browser.close();
    }
  },
} satisfies ExportedHandler<Env>;
