import WeatherApp from "./WeatherApp";
import "./App.css";

function App() {
  return (
    <>
      <spline-viewer
        url="https://prod.spline.design/mdRtDIj4YI9hyuMC/scene.splinecode"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      ></spline-viewer>

      <WeatherApp />
    </>
  );
}

export default App;
