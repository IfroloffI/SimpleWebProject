import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar">
          <Link to="/">Home Page</Link>
          <Link to="/createpost">Create A Post</Link>
        </div>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/createpost" Component={CreatePost} />
          <Route exact path="/post/:id" Component={Post} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
