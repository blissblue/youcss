import "./App.css";
import MenuFilter from "./components/MenuFilter";
import NavLeft from "./components/NavLeft";
import SearchHeader from "./components/SearchHeader";
import VideoShorts from "./pages/VideoShorts";
import Videos from "./pages/Videos";

function App() {
  return (
    <>
      <div className="container">
        <NavLeft />
        <div className="main-con">
          <SearchHeader />
          <MenuFilter />
          <Videos />
          <VideoShorts />
        </div>
      </div>
    </>
  );
}

export default App;
