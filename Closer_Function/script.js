
let num = 10;

const mainFunc = () => {
    let num = 20;
    const subFunc = () => {
       let num = 30;
        const subChild = () => {
            let num = 40;
            console.log(`function of subchild ${num}`);
        }
        subChild();
        console.log(`function of sub ${num}`);
    }
    subFunc();
    console.log(`function of main ${num}`);
}
mainFunc();
console.log(`function of outer ${num}`);



