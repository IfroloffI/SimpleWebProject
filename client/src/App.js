import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home page</Link>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/createpost" Component={CreatePost} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
