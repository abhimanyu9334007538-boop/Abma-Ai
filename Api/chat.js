export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Not Allowed' });

    const API_KEY = "Gsk_52pEYmlbjTZzxEElbUtlWGdyb3FYptw2jojjyxz4YhpI5V1Bhpyg";

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [{ role: "user", content: req.body.message }]
            })
        });

        const data = await response.json();
        
        if (data.choices && data.choices[0]) {
            res.status(200).json({ reply: data.choices[0].message.content });
        } else {
            res.status(200).json({ error: data.error ? data.error.message : "Key Issue" });
        }
    } catch (err) {
        res.status(500).json({ error: "Server Error" });
    }
}
