let userNumber = +prompt('Введите число');
for (i = 0; i <= userNumber; i++) {
    console.log(i);   
}

for (i = 0; i <= userNumber; i++) {
    if (i%3===0&&i>0) {
        console.log(i);
    }  
}