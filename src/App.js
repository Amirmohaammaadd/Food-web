import Category from "./components/Category";
import Food from "./components/Food";
import HeadLine from "./components/HeadlineCards";
import Hero from "./components/Hero";
import NavBar from "./components/Nav-bar";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadLine />
      <Food />
      <Category />
    </div>
  );
}

export default App;
