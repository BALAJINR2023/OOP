//Movie in static process

class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");//static means not inculed in object (individual instance "fucntion(method in class)")
      }
}

const movie1 = new Movie("Inception", "Warner Bros.", "PG-13");
const movie2 = new Movie("Casino royal", "Eon Producations.", "PG13");//Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
const movie3 = new Movie("Toy Story", "Pixar");
console.log(movie1);
console.log(movie2);
console.log(movie3);

const moviesArray = [movie1, movie2, movie3];
const pgMovies = Movie.getPG(moviesArray);

console.log("PG Movies:", pgMovies);

//CIRCLE.CLASS in get and set method

class Circle {
    constructor(radius, color = 'red') {
      this._radius = radius;
      this._color = color;
    }
    get radius() {
      return this._radius;
    }
    set radius(newRadius) {
      this._radius = newRadius;
    }
    get color() {
      return this._color;
    }
    set color(newColor) {
      this._color = newColor;
    }
    getArea() {
      return Math.PI * Math.pow(this._radius, 2);
    }
    getCircumference() {
      return 2 * Math.PI * this._radius;
    }
    doubleRadius() {
      this._radius *= 2;
    }
    toString() {
      return `Circle - Radius: ${this._radius}, Color: ${this._color}`;
    }
  }
  const circle = new Circle(5);
  
  console.log(circle.toString());
  console.log("Area:", circle.getArea().toFixed(1));
  console.log("Circumference:", circle.getCircumference().toFixed(1));
  console.log("Original Radius:", circle.radius);
  console.log("Original Color:", circle.color);
  
  circle.radius = 8; 
  circle.color = 'blue'; 
  console.log("Updated Radius:", circle.radius);
  console.log("Updated Color:", circle.color);
  
  console.log("After Doubling Radius:", circle.toString());
  console.log("Area:", circle.getArea().toFixed(1));
  console.log("Circumference:", circle.getCircumference().toFixed(1));

//Write a “person” class to hold all the details.

class Person {
    constructor(name, age, address) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
    updateAddress(newAddress) {
      this.address = newAddress;
    }
  }
  const person1 = new Person("Ram", 30, "123 Main Street, chennai");
  console.log(person1.getDetails());
  
  const person2 = new Person("Smith", 25, "4B tower Avenue, villupuram ");
  console.log(person2.getDetails());
  
  person2.updateAddress("789 Pine Lane, vellore");
  console.log("Updated Address for person2:", person2.address);

//write a class to calculate the uber price.

class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKilometer = costPerKilometer;
      this.costPerMinute = costPerMinute;
    }
    calculateFare(distance, duration) {
      const distanceCost = this.costPerKilometer * distance;
      const timeCost = this.costPerMinute * duration;
      const totalFare = this.baseFare + distanceCost + timeCost;
      return totalFare;
    }
  }
  const uberprice = new UberPriceCalculator(10, 4, 2);
  const fare = uberprice.calculateFare(25, 20);
  console.log(`Uber Fare Price: Rs.${fare.toFixed(2)}`)