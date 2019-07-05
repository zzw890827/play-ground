import './style.css';

class Language {
    constructor(public str: string) {
    }
}

interface Say {
    greed(): void;
}

class Greed extends Language implements Say {
    public target: string;

    constructor(target: string, greedStr: string) {
        super(greedStr);
        this.target = target;
    }

    greed() {
        let body = document.body;
        let h1 = document.createElement('h1');
        let txt = document.createTextNode(`${this.str} ${this.target}`);
        h1.appendChild(txt);
        body.append(h1);
    }
}

let hello: Greed = new Greed('TypeScript + Pug', 'Hello');
hello.greed();
