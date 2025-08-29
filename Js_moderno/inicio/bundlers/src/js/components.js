export function title(text) {
    const element = document.createElement("h1")
    element.textContent = text

    document.body.appendChild(element)
}