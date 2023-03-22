function refillResources(player) {
    player.health = 99;
    player.missiles = 250;
    player.bombs = 3;
}
var player1 = {
    health: 1,
    missiles: 0,
    bombs: 0,
};
function headsUp(player) {
    console.log("Health:", player.health, "Missiles:", player.missiles, "Bombs:", player.bombs);
}
headsUp(player1);
refillResources(player1);
headsUp(player1);
