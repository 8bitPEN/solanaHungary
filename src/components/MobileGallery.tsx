import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import React from "react";

export default function MobileGallery({
  className,
}: {
  className: string | null;
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <div className={className == null ? "" : className}>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[Autoplay()]}
        setApi={setApi}
      >
        <CarouselContent className="min-h-96">
          <CarouselItem className="rounded-3xl">
            <img
              src="./solana/solana_hungary/us/compressed/6.jpg"
              className="h-full object-cover rounded-3xl"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="./solana/solana_hungary/us/compressed/4.png"
              className="h-full object-cover rounded-3xl"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="./solana/solana_hungary/us/compressed/7.png"
              className="h-full object-cover rounded-3xl"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="./solana/solana_hungary/us/compressed/9.jpg"
              className="h-full object-cover rounded-3xl"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-5">
        {Array.from({ length: count || 0 }, (_, i) => {
          return (
            <button key={i} onClick={() => api?.scrollTo(i)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                viewBox="0 -960 960 960"
                width="16px"
                fill={selectedIndex == i ? "white" : "gray"}
              >
                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </button>
          );
        })}
      </div>
    </div>
  );
}
