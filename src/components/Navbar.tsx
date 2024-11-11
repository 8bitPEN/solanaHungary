import Hamburger from "hamburger-react";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));

  return (
    <div className="fixed top-4 right-4 z-40">
      <div ref={ref} className="flex flex-col items-center">
        {/* Hamburger Icon */}
        <Hamburger toggled={isOpen} toggle={setOpen} size={32} color="white" />

        {/* Dropdown Menu */}
        {isOpen && (
          <ul className="bg-black/70 backdrop-blur-md rounded-lg shadow-lg p-4 mt-2 text-white space-y-2 transition-all duration-300">
            <li>
              <a href="./#aboutUs" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="./#events" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="./#socials" className="hover:underline">
                Socials
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
