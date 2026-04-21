export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Not Allowed');

    const apiKey = "sk-ijklmnop5678efghijklmnop5678efghijklmnop"; // Apni key yahan check karle bas

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: req.body.message }]
            })
        });

        const data = await response.json();

        if (data.error) {
            // Ye line tujhe batayegi ki problem kya hai
            return res.status(200).json({ reply: "⚠️ API ERROR: " + data.error.message });
        }

        return res.status(200).json({ reply: data.choices[0].message.content });

    } catch (err) {
        return res.status(200).json({ reply: "⚠️ VERCEL ERROR: Backend connect nahi ho raha." });
    }
}
