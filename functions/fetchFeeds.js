export async function onRequest(context) {
    const { rss_url } = context.request.query;
    const api_key = context.env.RSS_API_KEY; // Access the environment variable
    console.error(api_key)
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rss_url)}&api_key=${encodeURIComponent(api_key)}`);

    //const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(feed.url) + "&api_key=" + encodeURIComponent(api_key));

    const data = await response.json();

    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    });
}
