import EventCard from "./EventCard";
function UpcomingEvents() {
  return (
    <section
      className="
        bg-gradient-to-b from-[#89212A] to-[#253528]
        min-h-[90lvh] 
        relative
        flex flex-col
        justify-center items-center
        p-2"
    >
      <div
        id="events"
        className="
    grid
    xl:grid-cols-2
    place-items-center
    gap-10
    text-white"
      >
        <h1 className="text-5xl lg:text-7xl font-bold uppercase underline">
          Upcoming <br /> Events
        </h1>
        <EventCard
          img="./solana/solana_hungary/event_one.png"
          title={"Solana Hungary x Monkey Meetup Budapest"}
          description={"Join us for a Monke Meetup in Budapest."}
          date={new Date("2024-11-16T18:00")}
          registerUrl={"https://lu.ma/705rpj6u"}
        />
      </div>
    </section>
  );
}
export default UpcomingEvents;
