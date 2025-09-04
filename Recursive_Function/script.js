let factValue = document.querySelector('input[name="factValue"]')
let ans = document.querySelector('input[name="answer"]')

let fact = (n) => {
    if(n <= 1){
        return 1;
    }else{
        return n*fact(n-1);
    }
}

let calculateFactorial = () =>{
    let num = parseInt(factValue.value);
    if (isNaN(num)) {
        ans.value = "Enter a number";
    } else {
        ans.value = fact(num);
    }
    factValue.value = '';
}