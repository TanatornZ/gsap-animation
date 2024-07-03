import { useEffect } from "react";
import gsap from "gsap";

function CanvasAnimation() {
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas && canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#28a92b";
    }

    let position = { x: 0, y: 0 };

    function draw() {
      if (!ctx) return;
      // erase the canvas
      ctx.clearRect(0, 0, 300, 300);
      // redraw the square at it's new position
      ctx.fillRect(position.x, position.y, 100, 100);
    }

    //animate x and y of point
    gsap.to(position, {
      x: 200,
      y: 200,
      duration: 2,
      repeat: 2,
      yoyo: true,
      // unlike DOM elements, canvas needs to be redrawn and cleared on every tick
      onUpdate: draw,
    });
  }, []);
  return (
    <div className="p-10">
      <h2>canvas animation</h2>
      <canvas
        id="canvas"
        width="300"
        height="300"
        className="border mt-4 rounded-md"
      ></canvas>
    </div>
  );
}

export default CanvasAnimation;
