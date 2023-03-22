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