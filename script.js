class Student {
  constructor(name, age) {
    this.name = name;
    let _age = age;

    this.getAge = () => _age;
    this.setAge = (newAge) => {
      if (newAge > 0) {
        _age = newAge;
      } else {
        console.log('Возраст должен быть положительным числом!');
      }
    };
  }

  printInfo() {
    console.log(`Имя: ${this.name}, Возраст: ${this.getAge()}`);
  }

  haveBirthday() {
    this.setAge(this.getAge() + 1);
  }
}

const student1 = new Student('Ильнур', 20);
student1.printInfo(); 
student1.haveBirthday();
student1.printInfo(); 