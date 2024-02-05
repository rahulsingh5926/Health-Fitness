import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import Home from "./components/Home";
import BMI from "./components/BMI";
import Nutrition from "./components/Nutrition";

import Training from "./components/ExerciseModule/Training";
import ExerciseDetail from "./components/ExerciseModule/ExerciseDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Nutrition" element={<Nutrition />}></Route>
          <Route path="/ExerciseModule/Training" element={<Training />}></Route>
          <Route
            path="/ExerciseDetail/:id"
            element={<ExerciseDetail />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
