const h1 = document.querySelector('h1');
let a, b;
const createDivForDivision = (a,b, submit) => {
    const ans = a/b;
    const div = document.createElement('div');
    div.innerText = a/b;
    document.querySelector('form').insertBefore(div,submit);
}
document.querySelector('#submitBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    a = document.querySelector('.first').value;
    b = document.querySelector('.second').value;
    createDivForDivision(a,b,e.target);
});
