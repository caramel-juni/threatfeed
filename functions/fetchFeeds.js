export async function onRequest(context) {
    const { rss_url } = context.request.query;
    console.log("RSS URL", rss_url)
    const api_key = "8veydicfkls4zhdyxhqifnnrjzgcuipyszfsyd99";

    //const api_key = context.env.RSS_API_KEY; // Access the environment variable
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rss_url)}&api_key=${encodeURIComponent(api_key)}`); 
    // Debugging statements
    console.log("Response Status:", response.status);
    console.log("Response Headers:", [...response.headers]); // Log headers as an array of key-value pairs
    console.log("Response URL:", response.url); // Log the URL of the response
    //const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(feed.url) + "&api_key=" + encodeURIComponent(api_key));

    const data = await response.json();

    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    });
}
