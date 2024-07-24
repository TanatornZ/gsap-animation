import gsap from "gsap-trial";
import "./FlipAnimation.css";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

function FlipAnimation() {
  useGSAP(() => {
    // chang layout integrate with css change
    let layouts = ["final", "plain", "columnsFlip", "gridFlip"],
      container = document.querySelector(".containerFlip") as Element,
      curLayout = 0; // index of the current layout
    if (container) {
      function nextState() {
        // get element relevant animation
        const state = Flip.getState(".letter, .for, .gsap", {
          // animation base on color and background color
          props: "color,backgroundColor",
          simple: true,
        }); // capture current state

        container.classList.remove(layouts[curLayout]); // remove old class
        curLayout = (curLayout + 1) % layouts.length; // increment (loop back to the start if at the end)
        container.classList.add(layouts[curLayout]); // add the new class

        Flip.from(state, {
          // animate from the previous state
          absolute: true,
          stagger: 0.07,
          duration: 0.7,
          ease: "power2.inOut",
          spin: curLayout === 0, // only spin when going to the "final" layout
          simple: true,
          onEnter: (elements) => {
            gsap.fromTo(
              elements,
              { opacity: 0 },
              { opacity: 1, duration: 0.6 }
            );
          },
          onLeave: (elements) => gsap.to(elements, { opacity: 0 }),
        });

        // call another round to infinite loop
        gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState);
      }

      // call first time
      gsap.delayedCall(1, nextState);
    }
  });

  return (
    <div className="containerFlip final">
      <div className="letter F">F</div>
      <div className="letter l">L</div>
      <div className="letter i">I</div>
      <div className="letter p">P</div>
      <div className="for">for</div>
      <div className="gsap">GSAP</div>
    </div>
  );
}

export default FlipAnimation;
