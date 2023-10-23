import {createCalc} from "./blocks/createhtml";

document.addEventListener('DOMContentLoaded', () => {
    createCalc()

    document.body.addEventListener('click', e => {
        if (e.target.dataset.number == 'number') {
            console.log(e.target)
        }
    })
})
