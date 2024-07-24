import gsap from "gsap-trial";
import SplitText from "gsap-trial/SplitText";
import { useGSAP } from "@gsap/react";
import Profile from "../../assets/Profile.png";
import { useRef } from "react";

gsap.registerPlugin(SplitText);
type Props = {};

function ProfileExample({}: Props) {
  const imageRef = useRef(null);
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

    tl.fromTo(
      ".circle",
      {
        opacity: 0,
        y: 150,
      },
      { opacity: 1, y: 0, duration: 2, stagger: 0.1 }
    );
  });

  return (
    <div className="w-full h-screen overflow-hidden bg-blue-100 flex p-4">
      <div className="self-center mx-auto w-full max-w-4xl h-full max-h-[500px] bg-white rounded-2xl p-4 shadow-lg flex items-center justify-center gap-8 md:gap-12 flex-col md:flex-row overflow-hidden">
        <p
          className="text-3xl md:text-5xl tracking-wider leading-loose  self-center font-bold quote text-black text-center"
          style={{ textShadow: "1px 1px gray" }}
        >
          TANATORN INTAPHONG
        </p>

        <div
          ref={imageRef}
          className="circle rounded-full h-1/2 md:h-2/3 border  min-h-40 max-w-sm aspect-square overflow-hidden shadow-lg bg-black relative"
        >
          <img
            src={Profile}
            alt="profile"
            className="h-full w-full object-cover absolute"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileExample;
