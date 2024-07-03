import "./App.css";
import BasicAnimation from "./components/BasicAnimation";
import CanvasAnimation from "./components/CanvasAnimation";
import EaseAnimation from "./components/EaseAnimation";
import StaggerAnimation from "./components/StaggerAnimation";
import TimelineAnimation from "./components/TimelineAnimation";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <BasicAnimation />
      <CanvasAnimation />
      <EaseAnimation />
      <StaggerAnimation />
      <TimelineAnimation />
    </div>
  );
}

export default App;
