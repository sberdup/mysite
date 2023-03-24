interface Resources {
    health: number;
    missiles: number;
    bombs: number;
}

function refillResources(player: Resources){
    player.health = 99;
    player.missiles = 250;
    player.bombs = 3;
}

const player1: Resources = {
    health:1,
    missiles:0,
    bombs:0,
};

function headsUp(player: Resources){
    console.log("Health:", player.health, "Missiles:", player.missiles, "Bombs:", player.bombs);
}

headsUp(player1);
refillResources(player1);
headsUp(player1);

//tsc --noEmitOnError demo.tsx
//this syntax will not output js file if there's a ts error

const string1 = 'hello world'
const number1 = 134
const bool1 = true
//3 common primitive types

let wildcard : any = 'starting value'
//when you assign type:any, TypeScript will free up typechecking on the variable
wildcard = 2

//the compiler flag noImplicitAny will stop TS from assigning 'any' to unspecified, uninferable vars

