export default async function handler(req, res) {
    // Sirf POST request allow karni hai
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { message } = req.body;
        const apiKey = "sk-ijklmnop5678efghijklmnop5678efghijklmnop"; // Apni real OpenAI key yahan check karo

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: message }]
            })
        });

        const data = await response.json();
        
        if (data.error) {
            return res.status(500).json({ error: data.error.message });
        }

        return res.status(200).json({ reply: data.choices[0].message.content });

    } catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
