import { useEffect, useRef, useState } from "react";
import EventCard from "./EventCard";
import { motion, useInView } from "framer-motion";

interface EventContent {
  title: string;
  description: string;
  date: Date;
  url: string;
  id: number;
  image: {
    url: string; // a lot more things could be added here in case we want to
  };
}

interface EventData {
  data: EventContent[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
function UpcomingEvents() {
  const apiUrl = "https://admin.solanahungary.hu/api/events?populate=*";
  const { data, loading } = useData(apiUrl);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });
  return (
    <section
      className="
        bg-gradient-to-t from-[#89212A] to-[#253528]
        min-h-[90lvh] 
        relative
        flex flex-col
        justify-center items-center
        p-2
        py-20"
    >
      <div
        ref={ref}
        id="events"
        className="
    grid
    xl:grid-cols-2
    place-items-center
    gap-10
    text-white"
      >
        <motion.h1
        initial={{opacity: 0, y: 20}}
        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
        className="text-5xl lg:text-7xl font-bold uppercase underline">
          Upcoming <br /> Events
        </motion.h1>
        {loading && <p>Loading upcoming events...</p>}
        {!loading &&
          data != null &&
          data.data.map((e: EventContent) => {
            return (
              <>
                <EventCard
                  title={e.title}
                  description={e.description}
                  date={new Date(e.date)}
                  img={e.image.url}
                  registerUrl={e.url}
                  key={e.id}
                />
              </>
            );
          })}
      </div>
    </section>
  );
}

function useData(url: string) {
  const [data, setData] = useState<EventData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setData(json);
          setLoading(false);
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);
  return { data, loading };
}

export default UpcomingEvents;
