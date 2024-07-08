import { Route, Routes } from "react-router";
import "./App.css";
import BasicAnimation from "./components/Animations/BasicAnimation";
import CanvasAnimation from "./components/Animations/CanvasAnimation";
import EaseAnimation from "./components/Animations/EaseAnimation";
import StaggerAnimation from "./components/Animations/StaggerAnimation";
import TimelineAnimation from "./components/Animations/TimelineAnimation";
import BasicScroll from "./components/ScrollTrigger/BasicScroll";
import ProfileExample from "./components/Examples/Profile";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BasicAnimation />
              <CanvasAnimation />
              <EaseAnimation />
              <StaggerAnimation />
              <TimelineAnimation />
            </>
          }
        />
        <Route
          path="/scroll"
          element={
            <>
              <BasicScroll />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <ProfileExample />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
