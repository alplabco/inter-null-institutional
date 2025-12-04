import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  try {
    return await getAssetFromKV(event, {
      mapRequestToAsset: (req) => {
        const url = new URL(req.url);
        // Handle trailing slashes
        if (url.pathname.endsWith('/') && url.pathname !== '/') {
          url.pathname = url.pathname.slice(0, -1);
        }
        // Add .html for routes without extensions
        if (!url.pathname.includes('.')) {
          url.pathname = url.pathname + '.html';
        }
        return new Request(url.toString(), req);
      },
    });
  } catch (e) {
    // Fallback to index.html for SPA routing
    try {
      return await getAssetFromKV(event, {
        mapRequestToAsset: (req) => new Request(`${new URL(req.url).origin}/index.html`, req),
      });
    } catch (err) {
      return new Response('Not found', { status: 404 });
    }
  }
}
