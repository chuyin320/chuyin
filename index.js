export default {
  async fetch(request, env, ctx) {
    return new Response("Hello Workers!", {
      headers: { "content‑type": "text/plain" },
    });
  },
};
