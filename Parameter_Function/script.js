let value1 = document.querySelector('input[name="value1"]')
let value2 = document.querySelector('input[name="value2"]')
let choice = document.querySelector('input[name="choice"]')
let result = document.querySelector('.result')

let calc = () => {
    let val1 = parseFloat(value1.value);
    let val2 = parseFloat(value2.value);
    let ch = choice.value;

    switch (ch) {
        case '1':
            sum(val1, val2);
            break;

        case '2':
            sub(val1, val2);
            break;

        case '3':
            multi(val1, val2);
            break;

        case '4':
            div(val1, val2);
            break;
    }

    choice.value = '';
}

const sum = (val1, val2) => {
    result.innerText = val1 + val2;

    value1.value = '';
    value2.value = '';
}

const sub = (val1, val2) =>{
    result.innerText = val1 - val2;

    value1.value = '';
    value2.value = '';
}


const multi = (val1, val2) =>{
    result.innerText = val1 * val2;

    value1.value = '';
    value2.value = '';
}

const div = (val1, val2) =>{
    result.innerText = val1 / val2;

    value1.value = '';
    value2.value = '';
}