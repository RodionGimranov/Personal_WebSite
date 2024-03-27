let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

let engine = Engine.create();

let physicalIconBlock = document.querySelector(".physical__icons__block");

let render = Render.create({
    element: physicalIconBlock,
    engine: engine,
    options: {
        width: 590,
        height: 364,
        background: "#1C1C1E",
        wireframes: false,
    },
});

let ground = Bodies.rectangle(575 / 2, 364, 575, 5, { isStatic: true, render: { visible: false } });
let leftWall = Bodies.rectangle(0, 364 / 2, 5, 364, { isStatic: true, render: { visible: false } });
let rightWall = Bodies.rectangle(575, 364 / 2, 5, 364, {
    isStatic: true,
    render: { visible: false },
});
let ceiling = Bodies.rectangle(575 / 2, 0, 575, 5, { isStatic: true, render: { visible: false } });

const rows = [100, 200];
const startingX = 50;
const gapX = 75;
const iconWidth = 80;
const numberOfIconsInRow = 8;

function createIcon(x, y, texture) {
    return Bodies.rectangle(x, y, iconWidth, iconWidth, {
        restitution: 0.2,
        render: {
            sprite: {
                texture: `Media/svg/physical-icons/${texture}.svg`,
                xScale: 1,
                yScale: 1,
            },
        },
    });
}

let icons = [];
const iconTextures = [
    "CSS-icon",
    "Figma-icon",
    "GitHub-icon",
    "HTML-icon",
    "JavaScript-icon",
    "TypeScript-icon",
    "VSCode-icon",
    "Vue-icon",
    "SASS-icon",
    "angular-icon",
    "react-icon",
    "webpack-icon",
    "pug-icon",
];
iconTextures.forEach((texture, index) => {
    const row = Math.floor(index / numberOfIconsInRow);
    const col = index % numberOfIconsInRow;
    const x = startingX + col * gapX;
    const y = rows[row];
    icons.push(createIcon(x, y, texture));
});

World.add(engine.world, icons.concat([ground, leftWall, rightWall, ceiling]));

let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: { visible: false },
    },
});

World.add(engine.world, mouseConstraint);

render.mouse = mouse;

Matter.Runner.run(engine);
Render.run(render);
