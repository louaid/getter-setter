// Import stylesheets
import './style.css';

// Write TypeScript code!

interface Person {
  firstName: string;
  lastName: string;
  fullName: string
}
const person: Person = {
  firstName: 'Louai',
  lastName: 'Drissi',
  get fullName() {
    return `${person.firstName} his last name is ${person.lastName}`;
  },

  set fullName(value) {
    const parts = value.split(' ');
    console.log(value);
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
person.fullName = 'Ryyan Drissi';
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${person.fullName}</h1>`;
