import React from "react";
import gsap from "gsap-trial";
import SplitText from "gsap-trial/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);
type Props = {};

function ProfileExample({}: Props) {
  useGSAP(() => {
    const tl = gsap.timeline(),
      split = new SplitText(".quote"),
      chars = split.chars;

    tl.fromTo(
      chars,
      {
        opacity: 0,
        x: 10,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
      }
    );
  });

  return (
    <div className="w-full h-screen overflow-hidden bg-blue-100 flex">
      <div className="self-center mx-auto w-1/2 h-1/2 bg-white rounded-2xl p-12 shadow-lg flex">
        <p
          className="basis-1/2 text-5xl leading-normal self-center font-bold quote text-black text-center"
          style={{ textShadow: "1px 1px gray" }}
        >
          TANATORN INTAPHONG
        </p>
        <div className="basis-1/2">
          <div className="rounded-full aspect-square w-full h-full bg-black"></div>
        </div>
      </div>
    </div>
  );
}

export default ProfileExample;
