<script>
class Person {
    constructor(name) {
        this.name = name;
    }
      method() {
    console.log(`${this.name} says Hello!`);
  }
}
const person1 = new Person('Pesho');
person1.method();

</script>