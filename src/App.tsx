import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Research from "./components/Research";
import UpcomingEvents from "./components/UpcomingEvents";
import WhoAreWe from "./components/AboutUs";

function App() {
  return (
    <div className="font-diatype scroll-smooth relative">
      <Navbar />
      <Hero />
      <WhoAreWe />
      <UpcomingEvents />
      <Research />
    </div>
  );
}

export default App;
