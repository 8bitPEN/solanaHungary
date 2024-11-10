import { motion } from "framer-motion";

interface EventCardProps {
  img: string;
  title: string;
  description: string;
  date: Date;
  registerUrl: string;
}

function EventCard({
  img,
  title,
  description,
  date,
  registerUrl,
}: EventCardProps) {
  return (
    <>
      <div className="max-w-[30rem]">
        {/* <img src={img} className="max-w-[30rem]  rounded-t-2xl" /> */}
        <div
          className="
        flex flex-col 
        bg-white text-black
        rounded-b-2xl
        p-2
        "
        >
          <div className="flex flex-col mb-1">
            <span className="font-bold">{title}</span>
            <span>{description}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 text-sm">
              {date.toLocaleString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </span>
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                backgroundColor: "#000",
                color: "#FFF",
              }}
              href={registerUrl}
              className="border rounded-full border-black px-2 text-sm bg-white text-black"
            >
              Register Now
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
