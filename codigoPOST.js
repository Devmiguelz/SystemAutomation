
const { mouse, left, right, up, down, keyboard, Key, straightTo, centerOf, Region, Button } = require("@nut-tree/nut-js");

(async () => {

    await mouse.move(
        straightTo(
            centerOf(
                new Region(190, -50, 200, 300)
            )
        )
    );

    mouse.config.autoDelayMs = 5000;

    for (let index = 1; index < 5000; index++) {

        await mouse.click(Button.LEFT);

    }

})();
