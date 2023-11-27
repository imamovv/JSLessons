const arr = [3, 5, 9, 10, 1];

const filteredArr = arr.filter(num => num <= 5);
const user = { name: "Alex", age: 30, email: "alex@example.com", address: { city: "NewYork", zip: "10001" } };

filteredArr.forEach(num => {
  const p = document.createElement('p');
  p.textContent = num;
  document.body.appendChild(p);
});


const userInfo = {
  name: user.name,
  city: user.address.city
};
console.log(userInfo);