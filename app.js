document.getElementById("data-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = document.getElementById("text-input").value;

    try {
        const response = await fetch("http://localhost:4000/data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        });
        const result = await response.json();
        // alert(`${result.id}`);
        document.write(`http://localhost:4000/${result.id}`)
    } catch (error) {
        console.error("Error submitting data:", error);
    }
});
