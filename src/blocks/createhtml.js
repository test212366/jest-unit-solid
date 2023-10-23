import {buttons, create, customAppendChild} from "./utils";

export const createCalc = () => {
    const $container = document.querySelector('.container')
    let title,body
    const calc = create('div', 'calculator')
    customAppendChild([title = create('div', 'title'),body = create('div', 'body')], calc)
    customAppendChild([create('input', 'input')], title)
    body.insertAdjacentHTML('afterbegin', buttons())
    $container.appendChild(calc)
}
