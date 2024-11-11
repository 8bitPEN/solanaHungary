import { motion } from "framer-motion";

function WhoAreWe() {
  const arrowVariants = {
    hover: { x: 10 }, // Moves the arrow 10px to the right
  };
  return (
    <>
      <section
        id="aboutUs"
        className="
        min-h-[90lvh] 
        bg-gradient-to-b to-[#89212A] from-[#253528] 
        relative 
        flex flex-col
        justify-center items-center
        text-white 
        text-center
        p-2
        "
      >
        <h1 className="text-5xl lg:text-7xl mb-2">Who are We?</h1>
        <p className="text-md lg:text-xl mb-2 max-w-[50ch]">
          Solana Hungary is a community-driven initiative focused on empowering
          builders, developers, and creatives within the Solana ecosystem. Our
          mission is to bring together passionate individuals to create
          innovative projects, host educational events, and support the growth
          of the decentralized future in Hungary.
        </p>
        <motion.a
          href="https://discord.gg/solanahungary"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md uppercase rounded-full px-5 py-1 bg-gradient-to-r from-[#89212A] to-[#253528] flex items-center"
          whileHover="hover"
        >
          Join us
          <motion.span
            className="pl-2"
            variants={arrowVariants}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            &rarr;
          </motion.span>
        </motion.a>
      </section>
    </>
  );
}
export default WhoAreWe;
