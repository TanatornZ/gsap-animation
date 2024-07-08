import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function StaggerAnimation() {
  const staggerContainer = useRef(null);
  useGSAP(
    () => {
      gsap.from(".box-stagger", {
        duration: 0.5,
        opacity: 0,
        y: -100,
        repeat: 1,
        stagger: 0.2,
        ease: "bounce.out",
      });
    },
    { scope: staggerContainer }
  );
  return (
    <div className="p-10" ref={staggerContainer}>
      <h1 className="text-2xl font-semibold">Stagger Animation</h1>

      <div className="grid grid-cols-5 gap-4 mt-4">
        {[...Array(15)].map((x, i) => (
          <div
            key={`box ${i}`}
            className="box-stagger w-full h-10 md:h-20 rounded-lg bg-blue-500"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default StaggerAnimation;
