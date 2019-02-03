var Player = function(scene, layer) {

    this.sprite = new scene.Sprite('sprites/chars/miner.png', layer);
    this.sprite.move(60, 40);
    this.sprite.size(24, 30);

    // player is standing still for a long period of time
    this.relax = new sjs.Cycle([
        [0, 0, 35],
        [26, 0, 2],
        [0, 0, 45],
        [26, 0, 2],
        [0, 0, 45],
        [52, 0, 20],
        [78, 0, 5],
        [104, 0, 15],
        [78, 0, 20],
        [130, 0, 2],
        [156, 0, 3],
        [182, 0, 1],
        [208, 0, 3],
        [234, 0, 2],
        [260, 0, 2],
        [286, 0, 18],
        [312, 0, 18],
        [0, 0, 35],
        [26, 0, 2],
        [0, 0, 45],
        [338, 0, 2],
        [364, 0, 30],
        [390, 0, 2],
        [364, 0, 30],
        [416, 0, 5],
        [364, 0, 5],
        [416, 0, 5],
        [364, 0, 5],
        [416, 0, 5],
        [364, 0, 30],
        [338, 0, 1]
        ]);


    // player squatts
    this.squat = scene.Cycle([
        [0, 0, 1],
        [0, 40, 1],
        [26, 40, 30],
        [52, 40, 30],
        [0, 40, 1],
        [0, 0, 1]]);

    this.moveR = scene.Cycle([[52,80,3],[78,80,3],[104,80,3],[130,80,3],[156,80,3],[130,80,3],[104,80,3],[78,80,3]]);
    this.moveL = scene.Cycle([[52,120,3],[78,120,3],[104,120,3],[130,120,3],[156,120,3],[130,120,3],[104,120,3],[78,120,3]]);
    this.jumpR = scene.Cycle([[0,160,30]]);
    this.jumpL = scene.Cycle([[0,200,30]]);
    this.stand = scene.Cycle([[0,80,3],[0,120,3]]);

    this.pushR = scene.Cycle([[0,240,10],[26,240,10]]);
    this.pushL = scene.Cycle([[0,280,10],[26,280,10]]);

    this.pushR.addSprite(this.sprite);
    this.pushL.addSprite(this.sprite);
    this.relax.addSprite(this.sprite);
    this.squat.addSprite(this.sprite);
    this.moveR.addSprite(this.sprite);
    this.moveL.addSprite(this.sprite);
    this.jumpR.addSprite(this.sprite);
    this.jumpL.addSprite(this.sprite);
    this.stand.addSprite(this.sprite);


    // x velocity, and y velocity
    this.sprite.xv = 0;
    this.sprite.yv = 0;

}