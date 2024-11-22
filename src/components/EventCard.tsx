import { motion } from "framer-motion";

interface EventCardProps {
  img: string;
  title: string;
  description: string;
  date: Date;
  registerUrl: string;
}

export default function EventCard({
  img,
  title,
  description,
  date,
  registerUrl,
}: EventCardProps) {
  console.log(date);
  return (
    <>
      <div className="max-w-[30rem]">
        <img src={img} className="max-h-[30rem] rounded-t-2xl w-full" />
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
          <div className="flex justify-between gap-10">
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
            <div className="flex justify-center items-center">
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  backgroundColor: "#000",
                  color: "#fff",
                }}
                href={registerUrl}
                className="uppercase border rounded-full border-black px-2 text-sm bg-white text-black"
              >
                rsvp
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
