import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

function TimelineAnimation() {
  const timelineContainer = useRef(null);
  const timelineUI = useRef<HTMLDivElement>(null);
  const playButton = useRef<HTMLButtonElement>(null);
  const sequenceTimeRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<HTMLDivElement>(null);
  const sequenceDraggerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (context, contextSafe) => {
      if (!timelineUI.current) return;
      if (!contextSafe) return;
      if (!markersRef.current) return;
      const width = timelineUI.current?.offsetWidth;
      markersRef.current.innerHTML = "";
      let sequenceTrackLength = width;
      let timelineItems = document.querySelectorAll(".timelineUI-tween");
      const tl = gsap.timeline({
        onUpdate: sequenceUpdateDragger,
        paused: true,
      });
      tl.to("#green", {
        duration: 2,
        x: width,
        xPercent: -100,
      });
      tl.to("#purple", {
        duration: 1,
        x: width,
        xPercent: -100,
      });
      tl.to("#orange", {
        duration: 2,
        x: width,
        xPercent: -100,
      });

      let children = tl.getChildren();
      let time = tl.duration();
      for (let i = 0; i < time + 1; i++) {
        if (!markersRef.current) return;
        markersRef.current.innerHTML += `<div class="secondMarker"></div>`;
      }

      function sequenceUpdateDragger() {
        if (!sequenceTimeRef.current) return;
        gsap.set(sequenceDraggerRef.current, {
          x: sequenceTrackLength * tl.progress(),
        });
        sequenceTimeRef.current.innerHTML = tl.time().toFixed(2);
      }

      Draggable.create(sequenceDraggerRef.current, {
        type: "x",
        bounds: { minX: 0, maxX: sequenceTrackLength },
        trigger: document.getElementById("dragger"),
        onDrag: function () {
          tl.progress(this.x / sequenceTrackLength).pause();
        },
      });

      children.forEach((child, index) => {
        let timelineBar = timelineItems[index];
        let duration = child.duration();
        let startTime = child.startTime();
        let width = (duration / time) * 100;
        let startPosition = (startTime / time) * 100;

        gsap.set(timelineBar, {
          width: `${width}%`,
          marginLeft: `${startPosition}%`,
        });
      });

      const playAnimation = contextSafe(() => {
        if (tl.progress() < 1) {
          tl.play();
        } else {
          tl.restart();
        }
      });

      playButton.current?.addEventListener("click", playAnimation);

      return () => {
        playButton.current?.removeEventListener("click", playAnimation);
      };
    },
    {
      scope: timelineContainer,
      dependencies: [timelineUI.current],
      revertOnUpdate: true,
    }
  );
  return (
    <div className="p-10 timelineDemo" ref={timelineContainer}>
      <h1 className="text-2xl font-semibold text-center">Timeline Animation</h1>
      <div
        className="box-timeline green size-20 rounded-lg mt-5"
        id="green"
      ></div>
      <div
        className="box-timeline purple size-20 rounded-lg mt-5"
        id="purple"
      ></div>
      <div
        className="box-timeline orange size-20 rounded-lg mt-5"
        id="orange"
      ></div>
      <div className="timelineUI" ref={timelineUI}>
        <div className="timelineUI-time" ref={sequenceTimeRef}>
          0
        </div>
        <div className="timelineUI-dragger-track">
          <div
            className="timelineUI-dragger"
            id="dragger"
            ref={sequenceDraggerRef}
          >
            <div></div>
          </div>
        </div>
        <div className="markers" ref={markersRef}></div>

        <div className="timleineUI-row">
          <div className="timelineUI-tween green"></div>
        </div>
        <div className="timleineUI-row">
          <div className="timelineUI-tween purple"></div>
        </div>
        <div className="timleineUI-row">
          <div className="timelineUI-tween orange"></div>
        </div>
      </div>
      <div className="controls">
        <button className="timelineUI-button play" ref={playButton}>
          play
        </button>
      </div>
    </div>
  );
}

export default TimelineAnimation;
