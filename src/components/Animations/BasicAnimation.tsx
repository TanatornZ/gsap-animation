import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function BasicAnimation() {
  const basicContainer = useRef(null);
  useGSAP(
    () => {
      gsap.to(".box", {
        x: "200",
        repeat: 3,
        yoyo: true,
        duration: 2,
        rotate: 360,
      });

      gsap.to(".box-color", {
        x: "200",
        repeat: 3,
        yoyo: true,
        duration: 2,
        backgroundColor: "#f12342",
      });

      gsap.to(".box-delay", {
        x: "200",
        repeat: 3,
        yoyo: true,
        duration: 2,
        delay: 1,
      });

      gsap.to(".box-transform", {
        x: "200",
        opacity: 0,
        repeat: 3,
        yoyo: true,
        duration: 2,
      });
    },
    { scope: basicContainer }
  );
  return (
    <div className="p-10" ref={basicContainer}>
      <h1 className="text-2xl font-semibold">Move box</h1>
      <div className="grid-cols-1 md:grid-cols-2 grid gap-8 mt-8">
        <div>
          <h2>basic animation</h2>
          <div className="box size-20 bg-blue-300 rounded-lg mt-5"></div>
        </div>
        <div>
          <h2>color animation</h2>
          <div className="box-color size-20 bg-blue-300 rounded-lg mt-5"></div>
        </div>
        <div>
          <h2>delay animation</h2>
          <div className="box-delay size-20 bg-blue-300 rounded-lg mt-5"></div>
        </div>
        <div>
          <h2>transform animation</h2>
          <div className="box-transform size-20 bg-blue-300 rounded-lg mt-5"></div>
        </div>
      </div>
    </div>
  );
}

export default BasicAnimation;
