let salaries = [2000, 3000, 4000, 5000];
let taxedSalaries = salaries.map(salary => salary * 0.87);
console.log(taxedSalaries);

let texts = ["Hello", "World", "JavaScript"];
texts.forEach(text => {
  let p = document.createElement('p');
  p.textContent = text;
  document.body.appendChild(p);
});