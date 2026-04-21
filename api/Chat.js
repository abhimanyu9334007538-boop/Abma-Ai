// api/chat.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: "Only POST allowed" });
    }

    const DEEPSEEK_KEY = "sk-9f7efcbfbe6f4f8fb19d6d55b90cd8d9";

    try {
        const response = await fetch('https://api.deepseek.com/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DEEPSEEK_KEY}`
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [
                    {role: "system", content: "You are Abma AI, a fast and helpful assistant created by Abhimanyu Singh."},
                    {role: "user", content: req.body.message}
                ]
            })
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error?.message || "DeepSeek API Error");
        }

        res.status(200).json({ reply: data.choices[0].message.content });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
