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
        pb-3
        scroll-m-10"
    >
      <div
        id="events"
        className="
    grid
    grid-cols-2
    place-items-center
    gap-10
    text-white
    m-40
    "
      >
        <h1 className="text-7xl font-bold uppercase underline">
          Upcoming <br /> Events
        </h1>
        <EventCard
          // img="/solana/solana_hungary/event_one.png"
          title={"Solana Hungary x Monkey Meetup Budapest"}
          description={"Join us for a Monke Meetup in Budapest."}
          date={new Date("2024-11-16T18:00")}
          registerUrl={"https://lu.ma/705rpj6u"}
        />
      </div>
      <div
        id="socials"
        className="text-white flex flex-col justify-center items-center gap-1"
      >
        {/* <img
          src="/solana/solana_hungary/solana_hungary_logo.png"
          className="w-10"
          alt="The official Solana Hungary logo."
        /> */}
        <span className="text-2xl">Solana Hungary</span>
        <span className="text-sm font-thin">
          © 2024 Solana Hungary - All rights reserved.
        </span>
        <div className="flex flex-row gap-5 mt-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/solanahungary"
            className="flex"
          >
            {/* <img
              width={25}
              src="/logos/discord.svg"
              alt="The official Discord logo."
            /> */}
          </a>
          <a
            href="https://x.com/solanahungary"
            target="_blank"
            rel="noopener noreferrer"
            className="flex"
          >
            {/* <img
              width={25}
              src="/logos/logo-white.png"
              alt="The official Discord logo."
            /> */}
          </a>
        </div>
      </div>
    </section>
  );
}
export default UpcomingEvents;
