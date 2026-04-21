export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message } = req.body;
    const OPENAI_KEY = "sk-ijklmnop5678efghijklmnop5678efghijklmnop"; // Teri OpenAI Key

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: message }],
                temperature: 0.7
            })
        });

        const data = await response.json();

        if (data.choices && data.choices[0].message) {
            return res.status(200).json({ reply: data.choices[0].message.content });
        } else {
            return res.status(500).json({ error: data.error ? data.error.message : "OpenAI Error" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Server error occurred" });
    }
}
