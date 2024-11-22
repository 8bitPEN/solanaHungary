import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function DesktopGallery({
  className,
}: {
  className: string | null;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  return (
    <div className={className == null ? "" : className} ref={ref}>
      {/* Upper gallery */}
      <div className={"grid grid-cols-6 gap-10 mb-10 grid-rows-[20rem] mt-20 "}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
                object-cover
                "
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            delay: 0.25,
          }}
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            delay: 0.5,
          }}
          className="span-1 rounded-3xl
              overflow-hidden"
        >
          <img
            src="./solana/solana_hungary/us/compressed/5.jpg"
            className="
                h-full
                w-full"
          />
        </motion.div>
      </div>
      {/* Lower gallery */}
      <div className="grid grid-cols-6 gap-10 grid-rows-[10rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            delay: 0.5,
          }}
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            delay: 0.5,
          }}
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
        </motion.div>
      </div>
    </div>
  );
}
