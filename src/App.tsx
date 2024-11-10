import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import UpcomingEvents from "./components/UpcomingEvents";
import WhoAreWe from "./components/WhoAreWe";

function App() {
  return (
    <div className="font-diatype scroll-smooth">
      <Navbar />
      <Hero />
      <WhoAreWe />
      <UpcomingEvents />
    </div>
  );
}

export default App;
