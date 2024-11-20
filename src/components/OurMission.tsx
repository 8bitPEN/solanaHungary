import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function OurMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  return (
    <>
      <div
        ref={ref}
        className="
          mt-52 px-10 mx-10 rounded-3xl py-20"
        style={{
          backgroundImage: `url('./solana/solana_hungary/blobs.svg')`,
        }}
      >
        <div className="bg- w-full h-full py-10 rounded-t-3xl bg-opacity-40">
          <h1 className="text-7xl font-bold">
            <motion.span
              className="inline-block bg-gradient-to-r from-[#7D55C7] via-[#64A8F2] to-[#14F195] text-transparent bg-clip-text font-bold"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            >
              Our Mission
            </motion.span>
          </h1>
        </div>
        {/*Text*/}
        <div className="flex flex-wrap my-10">
          {/* Creativity, research etc. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="flex-1 text-7xl flex justify-center flex-col items-center"
          >
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
          </motion.div>
          {/*Paragraphs*/}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.5 }}
            className="flex-1 font-light text-justify flex flex-col gap-2 justify-between text-lg bg-[#111f13] rounded-xl p-5"
          >
            <p>
              Empowering innovators to turn ideas into impactful projects. We
              provide the tools, resources, and support to bring your vision to
              life.
            </p>
            <p>
              Explore the latest advancements in blockchain and contribute to
              groundbreaking discoveries. Our focus is on pushing the boundaries
              of what’s possible.
            </p>
            <p>
              Learn and grow with us through workshops, events, and
              knowledge-sharing sessions. Explore decentralized technologies
              with hands-on guidance.
            </p>
            <p>
              Join a vibrant network of enthusiasts and builders united by their
              passion for Web3 and the Solana ecosystem. Connect, collaborate,
              and grow together.
            </p>
          </motion.div>
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
              src="./solana/solana_hungary/us/compressed/6.jpg"
              className="
                h-full
                w-full
                "
            />
          </div>
          <div
            className="col-span-3 rounded-3xl
              overflow-hidden"
          >
            <img
              src="./solana/solana_hungary/us/compressed/4.png"
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
              src="./solana/solana_hungary/us/compressed/5.jpg"
              className="
                h-full
                w-full"
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
              src="./solana/solana_hungary/us/compressed/7.png"
              className="
                h-full
                w-full
                object-cover"
              style={{ overflowClipMargin: "unset" }}
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
              src="./solana/solana_hungary/us/compressed/3.png"
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
              src="./solana/solana_hungary/us/compressed/9.jpg"
              className="
                h-full
                w-full
                object-cover"
              style={{ overflowClipMargin: "unset" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
