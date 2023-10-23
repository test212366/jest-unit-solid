export function create(tag, classItem = '', text = '') {
    const item = document.createElement(tag)
    item.classList.add(classItem)
    item.textContent = text
    return item
}
export const customAppendChild = (array, item) => {
    array.forEach(el => {
        item.appendChild(el)
    })
}
export const buttons = () => {
    return `
                <button class="btn" data-number = "number">1</button>
                <button class="btn" data-number = "number">2</button>
                <button class="btn" data-number = "number">3</button>
                <button class="btn" data-operation = "operation">+</button>
                <button class="btn" data-number = "number">4</button>
                <button class="btn" data-number = "number">5</button>
                <button class="btn" data-number = "number">6</button>
                <button class="btn" data-operation = "operation">-</button>
                <button class="btn" data-number = "number">7</button>
                <button class="btn" data-number = "number">8</button>
                <button class="btn" data-number = "number">9</button>
                <button class="btn" data-operation = "operation">*</button>
                <button class="btn" data-operation = "operation">/</button>
                <button class="btn" data-number = "number">0</button>
                <button class="btn" data-equal = "equal">=</button>
    `
}