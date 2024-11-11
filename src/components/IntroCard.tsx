import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface IntroCardProps {
  img: string;
  imgAlt: string;
  title: string;
  description: string;
}
export default function IntroCard({
  img,
  imgAlt,
  title,
  description,
}: IntroCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <motion.div
        className="flex justify-center items-center flex-col max-w-[30rem] gap-1"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 2,
        }}
      >
        <img className="max-h-[30rem] rounded-3xl" src={img} alt={imgAlt} />
        <div>
          <h2 className="font-bold text-left text-2xl">{title}</h2>
          <p className="text-justify">{description}</p>
        </div>
      </motion.div>
    </>
  );
}
