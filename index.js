class Person {

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    giveInfo() {
      console.log(`Name of the person: ${this.name}, age: ${this.age}`);
    }

    setName(name) {
      this.name = name;
      return this
    }

    setAge(age) {
      this.age = age;
      return this
    }
}
  
class Car {
  
    constructor(brand, model, yearOfDischarge, licensePlate) {
      this.brand = brand;
      this.model = model;
      this.yearOfDischarge = yearOfDischarge;
      this.licensePlate = licensePlate;
    }

    setBrand(brand) {
      this.brand = brand;
      return this
    }

    setModel(model) {
      this.model = model;
      return this
    }

    setYearOfDischarge(yearOfDischarge) {
      this.yearOfDischarge = yearOfDischarge;
      return this
    }

    setLicensePlate(licensePlate) {
      this.licensePlate = licensePlate;
      return this
    }
  
    setOwner(owner) {
      if (!owner instanceof Person) {
        throw new Error("Incorrect class")
      } 
        this.owner = owner;
        return this;
      }
 
      giveInfo() {
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.yearOfDischarge}`);
        console.log(`License plate: ${this.licensePlate}`);
    

        if(this.owner) {
          // console.log("Owner:");
          this.owner.giveInfo();
        } else {
          console.log("No owner's been assigned yet.");
        }
      }  
    }

let people = {

  male: new Person()
    .setAge(23)
    .setName("Alex"),
  female: new Person()
    .setAge(32)
    .setName("Alice")
} 

let cars = {
  car: new Car("Lexus", "RX300", "2003", "BH2334").setOwner(people.male),
  car1: new Car("Hodna", "Accord", "2006", "BH1345").setOwner(people.female)
}

for(let i in cars) {
  cars[i].giveInfo();
}


  