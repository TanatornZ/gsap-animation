import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import Button from "./Button";

enum CurveEnum {
  in = "in",
  out = "out",
  inOut = "inOut",
}

enum TransitionEnum {
  none = "none",
  bounce = "bounce",
  power1 = "power1",
  power2 = "power2",
  power3 = "power3",
  power4 = "power4",
  back = "back",
  circ = "circ",
  elastic = "elastic",
  expo = "expo",
  sine = "sine",
  steps = "steps(12)",
}

function EaseAnimation() {
  const easeContainer = useRef(null);
  const [transitionState, setTransitionState] = useState<TransitionEnum>(
    TransitionEnum.bounce
  );
  const [curveState, setCurveState] = useState<CurveEnum>(CurveEnum.in);

  useGSAP(
    () => {
      gsap.to(".box-ease", {
        rotation: 360,
        duration: 3,
        ease:
          transitionState === TransitionEnum.none ||
          transitionState === TransitionEnum.steps
            ? transitionState
            : `${transitionState}.${curveState}`,
      });
    },
    { dependencies: [curveState, transitionState], revertOnUpdate: true }
  );

  return (
    <div className="p-10" ref={easeContainer}>
      <h1 className="text-2xl font-semibold text-center">Ease Animation</h1>
      <div className="flex flex-col gap-4 justify-start">
        <h2 className="mt-4 text-xl font-medium">ease animation</h2>
        <h4 className="text-lg">curve option</h4>
        <div className="flex gap-4 flex-wrap">
          {Object.keys(TransitionEnum).map((item) => (
            <Button
              text={item}
              key={`${item} button`}
              className="w-fit"
              active={{
                state: transitionState === item,
                className:
                  "!bg-blue-400 border-blue-300 hover:border-transparent hover:bg-blue-300",
              }}
              onClick={() => setTransitionState(item as TransitionEnum)}
            />
          ))}
        </div>
        <h4 className="text-lg">curve option</h4>
        <div className="flex gap-4">
          {Object.keys(CurveEnum).map((item) => (
            <Button
              text={item}
              key={`${item} button`}
              className="w-fit"
              active={{
                state: curveState === item,
                className:
                  "!bg-blue-400 border-blue-300 hover:border-transparent hover:bg-blue-300",
              }}
              onClick={() => setCurveState(item as CurveEnum)}
            />
          ))}
        </div>
        <div className="box-ease size-20 bg-blue-300 rounded-lg mt-5 mx-auto"></div>
      </div>
    </div>
  );
}

export default EaseAnimation;
