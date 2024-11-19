import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// import IntroCard from "./IntroCard";

function WhoAreWe() {
  const arrowVariants = {
    hover: { x: 10 }, // Moves the arrow 10px to the right
  };

  // Animation variants for shared animation
  const elementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });
  return (
    <>
      <section
        id="aboutUs"
        className="
        bg-[#253528]
        min-h-[90lvh] 
        relative 
        flex flex-col
        justify-center items-center
        text-white 
        text-center
        p-2"
        // bg-gradient-to-b to-[#89212A] from-[#253528] 
      >
        {/* Ref on h1 to trigger the animation */}
        <motion.h1
          ref={ref}
          className="text-5xl lg:text-7xl mb-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={elementVariants}
          transition={{ duration: 1 }}
        >
          Who are We?
        </motion.h1>

        <motion.p
          className="text-md lg:text-xl mb-2 max-w-[50ch]"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={elementVariants}
          transition={{ duration: 1 }}
        >
          Solana Hungary is a community-driven initiative focused on empowering
          builders, developers, and creatives within the Solana ecosystem. Our
          mission is to bring together passionate individuals to create
          innovative projects, host educational events, and support the growth
          of the decentralized future in Hungary.
        </motion.p>

        <motion.a
          href="https://discord.gg/solanahungary"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md uppercase rounded-full px-5 py-1 bg-gradient-to-r from-[#89212A] to-[#253528] flex items-center"
          whileHover="hover"
          whileTap="hover"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={elementVariants}
          transition={{ duration: 1 }}
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
        {/* <div className="grid md:grid-cols-2 justify-center items-center align-middle gap-20 mt-20">
          <IntroCard
            img="./solana/solana_hungary/us/1.png"
            imgAlt=""
            title="Community"
            description="Join a vibrant network of enthusiasts and builders united by their passion for Web3 and the Solana ecosystem. Connect, collaborate, and grow together."
          />
          <IntroCard
            img="./solana/solana_hungary/us/2.png"
            imgAlt=""
            title="Creativity"
            description="Empowering innovators to turn ideas into impactful projects. We provide the tools, resources, and support to bring your vision to life."
          />
          <IntroCard
            img="./solana/solana_hungary/us/3.png"
            imgAlt=""
            title="Education"
            description="Learn and grow with us through workshops, events, and knowledge-sharing sessions. Dive into the world of decentralized technologies with hands-on guidance."
          />
          <IntroCard
            img="./solana/solana_hungary/us/4.png"
            imgAlt=""
            title="Research"
            description="Explore the latest advancements in blockchain and contribute to groundbreaking discoveries. Our focus is on pushing the boundaries of what’s possible."
          />
        </div> */}
        <div className="mt-52 px-10 mx-10 bg-black rounded-3xl bg-opacity-40 py-20 backdrop-blur-3xl ">
          <div className="flex flex-wrap">
            <div className="flex-1 text-7xl flex justify-center flex-col items-center">
              {/*
                Why do we wrap these spans with divs? 
                1. For padding
                2. So that the text gradient doesn't span the whole line - these spans MUST be inline-block, not block!
              */}
              <div>
                <span className="inline-block bg-gradient-to-r from-[#14F195] via-[#80ECFF] to-[#64A8F2] text-transparent bg-clip-text font-bold">
                  Creativity
                </span>
              </div>
              <div>
                <span className="ms-[1ch] inline-block bg-gradient-to-r from-[#80ECFF] via-[#64A8F2] to-[#9945FF] text-transparent bg-clip-text font-bold">
                  Research
                </span>
              </div>
              <div>
                <span className="ms-[2ch] inline-block bg-gradient-to-r from-[#64A8F2] via-[#9945FF] to-[#EB54BC] text-transparent bg-clip-text font-bold">
                  Education
                </span>
              </div>
              <div>
                <span className="ms-[4ch] inline-block bg-gradient-to-r from-[#9945FF] via-[#EB54BC] to-[#FF754A] text-transparent bg-clip-text font-bold">
                  Community
                </span>
              </div>
            </div>
            <div className="flex-1 text-justify flex flex-col gap-2 justify-between">
              <p>
                Empowering innovators to turn ideas into impactful projects. We
                provide the tools, resources, and support to bring your vision
                to life.
              </p>
              <p>
                Explore the latest advancements in blockchain and contribute to
                groundbreaking discoveries. Our focus is on pushing the
                boundaries of what’s possible.
              </p>
              <p>
                Learn and grow with us through workshops, events, and
                knowledge-sharing sessions. Explore decentralized technologies
                with hands-on guidance.
              </p>
              <p>
                Join a vibrant network of enthusiasts and builders united by
                their passion for Web3 and the Solana ecosystem. Connect,
                collaborate, and grow together.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-10 mb-10 grid-rows-[20rem] mt-20">
            <div
              className="
              col-span-2
              rounded-3xl
              overflow-hidden
              "
            >
              <img
                src="./solana/solana_hungary/us/4.png"
                className="
                h-full
                w-full
                object-cover"
              />
            </div>
            <div
              className="col-span-3 rounded-3xl
              overflow-hidden"
            >
              <img
                src="./solana/solana_hungary/us/4.png"
                className="
                h-full
                w-full
                object-cover"
              />
            </div>
            <div
              className="span-1 rounded-3xl
              overflow-hidden"
            >
              <img
                src="./solana/solana_hungary/us/4.png"
                className="
                h-full
                w-full
                object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-10 grid-rows-[10rem]">
            <div
              className="
              col-span-3
              rounded-3xl
              overflow-hidden
              "
            >
              <img
                src="./solana/solana_hungary/us/4.png"
                className="
                h-full
                w-full
                object-cover"
              />
            </div>
            <div
              className="
              col-span-1
              rounded-3xl
              overflow-hidden
              "
            >
              <img
                src="./solana/solana_hungary/us/4.png"
                className="
                h-full
                w-full
                object-cover"
              />
            </div>
            <div
              className="
              col-span-2
              rounded-3xl
              overflow-hidden
              "
            >
              <img
                src="./solana/solana_hungary/us/4.png"
                className="
                h-full
                w-full
                object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhoAreWe;
