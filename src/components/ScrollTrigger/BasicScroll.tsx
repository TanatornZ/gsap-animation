import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BasicScroll() {
  useGSAP((context, contextSafe) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.box-c`,
        start: "top top",
        end: "+=500",
        pin: true,
        markers: true,
        scrub: true,
      },
    });
    tl.to(".animation-box", { x: 200, opacity: 1 });
  }, {});

  return (
    <div className="min-h-[200vh] bg-slate-100 p-10">
      <div className="box-c relative">
        <div className="absolute animation-box top-5 size-10 opacity-0 bg-blue-500 mx-auto "></div>
      </div>
    </div>
  );
}

export default BasicScroll;
