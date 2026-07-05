const COUNTER_API = "https://classic7.kier.ovh";

async function loadCount() {
    const el = document.querySelector(".download-count");
    try {
        const res = await fetch(`${COUNTER_API}/counter`);
        const data = await res.json();
        el.textContent = `${data.count.toLocaleString()} downloads`;
    } catch {
        el.textContent = "Download count unavailable at the moment.";
    }
}

function trackDownloads() {
    document.querySelectorAll(".mirror-links a").forEach(link => {
        link.addEventListener("click", () => {
            fetch(`${COUNTER_API}/download`, { keepalive: true }).catch(() => {});
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadCount();
    trackDownloads();
});