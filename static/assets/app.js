document.querySelectorAll("time[datetime]").forEach(el => {
    let date = new Date(el.getAttribute('datetime'))
    el.textContent = el.hasAttribute('data-date-only') ? date.toLocaleDateString() : date.toLocaleString()
})