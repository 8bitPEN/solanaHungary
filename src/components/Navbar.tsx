function Navbar() {
  return (
    <>
      <div className="h-[10lvh] flex p-4 justify-between text-white sticky top-0 mb-[-10lvh] z-20">
        <div>
          <a href="/">
            <img
              src="/solana/solana_hungary/solana_hungary_logo.png"
              alt="The official logo of Solana Hungary."
              className="max-h-12"
            />
          </a>
        </div>
        <div className="flex gap-4 justify-center items-center relative z-60">
          <div>
            <a href="/#events" className="relative">
              Events
            </a>
          </div>
          <div>
            <a href="/#socials">Socials</a>
          </div>
          <div>
            <a href="/#aboutUs">About us</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
