import { motion } from "framer-motion";
export default function Research() {
  const arrowVariants = {
    hover: { x: 10 }, // Moves the arrow 10px to the right
  };
  return (
    <section
      className="min-h-[100lvh] bg-cover bg-no-repeat bg-center bg-onlyone text-white
         flex flex-row relative
         justify-center items-center"
    >
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl lg:text-7xl  uppercase">Research</h1>
        <motion.a
          href="https://medium.com/@solanahungary/hungarian-crypto-economy-e224c2d2d65c"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg xl:text-xl text-center rounded-full px-5 py-2 flex items-center"
          whileHover="hover"
          whileTap="hover"
        >
          Read about the state of the Hungarian <br /> crypto economy
          <motion.span
            className="pl-2 inline"
            variants={arrowVariants}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            &rarr;
          </motion.span>
        </motion.a>
      </div>
      <div
        id="socials"
        className="text-white flex flex-col justify-center items-center gap-1 absolute bottom-3 left-1/2 transform -translate-x-1/2"
      >
        <img
          src="./solana/solana_hungary/solana_hungary_logo.png"
          className="w-10"
          alt="The official Solana Hungary logo."
        />
        <span className="text-2xl">Solana Hungary</span>
        <span className="text-sm font-thin whitespace-nowrap">
          © 2024 Solana Hungary - All rights reserved.
        </span>
        <div className="flex flex-row gap-5 mt-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/solanahungary"
            className="flex"
          >
            <img
              width={25}
              src="./logos/discord.svg"
              alt="The official Discord logo."
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@solanahungary"
            className="flex"
          >
            <img
              width={70}
              src="./logos/Medium-Wordmark-Black.svg"
              alt="The official Medium logo."
            />
          </a>
          <a
            href="https://x.com/solanahungary"
            target="_blank"
            rel="noopener noreferrer"
            className="flex"
          >
            <img
              width={20}
              src="./logos/logo-white.png"
              alt="The official Discord logo."
            />
          </a>
        </div>
      </div>
    </section>
  );
}
