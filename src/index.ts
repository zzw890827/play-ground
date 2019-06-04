import './style.css';

function greeter(person: string) {
    return "Hello, " + person;
}

let user = "TypeScript";

document.body.innerHTML = greeter(user);
