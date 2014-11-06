(function() {

    // Create Robot
    var robot = new Robot({
        container: "robot",
        leftArm: "images/leftArm.png",
        leftLeg: "images/leftLeg.png",
        rightArm: "images/rightArm.png",
        rightLeg: "images/rightLeg.png",
        belly: "images/body.png",
        head: "images/head.png"
    });

    // Add listeners
    robot.onReady(function() {
        robot.wave(8);

        robot.addListener("belly", function() {
            robot.tickle(2);
        });

        robot.addListener("head", function() {
            robot.scare();
        });

        setTimeout(function() {
            robot.tickle(4);
        }, 3000);
    });

}());