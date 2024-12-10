document.getElementById("data-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = document.getElementById("text-input").value;

    try {
        const response = await fetch("https://sharetext-backend.onrender.com/data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        });
        const result = await response.json();
        // alert(`${result.id}`);
        document.write(`https://sharetext-backend.onrender.com/${result.id}`)
    } catch (error) {
        console.error("Error submitting data:", error);
    }
});
