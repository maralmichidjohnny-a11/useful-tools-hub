function searchTools() {
    const search = document
        .getElementById("toolSearch")
        .value
        .toLowerCase();

    const tools = document.querySelectorAll(".tool");

    tools.forEach(function(tool) {
        const text = tool.textContent.toLowerCase();

        if (text.includes(search)) {
            tool.style.display = "";
        } else {
            tool.style.display = "none";
        }
    });
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
function filterTools(category) {
    const tools = document.querySelectorAll(".tool");

    tools.forEach(function(tool) {
        const toolCategory = tool.getAttribute("data-category");

        if (category === "all" || toolCategory === category) {
            tool.style.display = "";
        } else {
            tool.style.display = "none";
        }
    });
}
function filterTools(category) {
    const tools = document.querySelectorAll(".tool");

    tools.forEach(tool => {
        const toolCategory = tool.getAttribute("data-category");

        if (category === "all" || toolCategory === category) {
            tool.style.display = "";
        } else {
            tool.style.display = "none";
        }
    });
}