import "./App.scss";
import Home from "./containers/Home/Home";
import Nav from "./components/Nav/Nav";
import ViewArt from "./containers/ViewArt/ViewArt";
import CreateArt from "./containers/CreateArt/CreateArt";
import EditArt from "./containers/EditArt/EditArt";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artimages" element={<ViewArt />} />
        <Route path="/artimage/create" element={<CreateArt />} />
        <Route path="/artimage/edit/:id" element={<EditArt />} />
      </Routes>
    </Router>
  );
}

export default App;