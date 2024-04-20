const iconTextures = [
    "HTML-icon",
    "CSS-icon",
    "JavaScript-icon",
    "TypeScript-icon",
    "SASS-icon",
    "webpack-icon",
    "Vue-icon",
    "React-icon",
    "Angular-icon",
    "Pug-icon",
    "Vite-icon",
    "GitHub-icon",
    "VSCode-icon",
    "Figma-icon",
  ];

let imagesLoaded = 0;
let totalImages = iconTextures.length;

function preloadIcons() {
  iconTextures.forEach((texture) => {
    const img = new Image();
    img.onload = () => {
      imagesLoaded++;
      if (imagesLoaded === totalImages) {
      }
    };
    img.src = `Media/svg/physical-icons/${texture}.svg`;
  });
}

preloadIcons();

function startShowIcons() {
  let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

  let engine = Engine.create();

  let physicalIconBlock = document.querySelector(".physical_icons_block");

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

  let ground = Bodies.rectangle(590 / 2, 364, 590, 5, {
    isStatic: true,
    render: { visible: false },
  });
  let leftWall = Bodies.rectangle(0, 364 / 2, 5, 364, {
    isStatic: true,
    render: { visible: false },
  });
  let rightWall = Bodies.rectangle(590, 364 / 2, 5, 364, {
    isStatic: true,
    render: { visible: false },
  });
  let ceiling = Bodies.rectangle(590 / 2, 0, 590, 5, {
    isStatic: true,
    render: { visible: false },
  });

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
}
