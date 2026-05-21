exports.handler = async function(event) {
  const path = event.queryStringParameters?.path;
  if (!path) return { statusCode: 400, body: JSON.stringify({ error: "Missing path" }) };
  try {
    const r = await fetch(`https://fantasy.premierleague.com/api/${path}`, {
      headers: { "User-Agent": "Mozilla/5.0", "Accept": "application/json" }
    });
    if (!r.ok) return { statusCode: r.status, body: JSON.stringify({ error: `FPL ${r.status}` }) };
    const data = await r.json();
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Cache-Control": "public, s-maxage=60" },
      body: JSON.stringify(data)
    };
  } catch(err) { return { statusCode: 500, body: JSON.stringify({ error: err.message }) }; }
};
