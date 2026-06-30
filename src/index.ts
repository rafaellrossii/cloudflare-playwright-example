import { launch } from "@cloudflare/playwright";

export default {
  async fetch(request, env): Promise<Response> {
    const browser = await launch(env.MYBROWSER);
    const page = await browser.newPage();

    await page.goto("https://vmbro-lt-75.pages.dev/", {
      waitUntil: "networkidle",
    });

    console.log("Página aberta.");

    // Mantém a execução bloqueada até o runtime encerrá-la.
    await new Promise(() => {});

    // Nunca será executado.
    await browser.close();

    return new Response("OK");
  },
} satisfies ExportedHandler<Env>;
