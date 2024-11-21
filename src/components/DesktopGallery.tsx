export default function DesktopGallery({className} : {className: string | null}) {
  return (
    <div className={className == null ? "" : className}>
      {/* Upper gallery */}
      <div className={"grid grid-cols-6 gap-10 mb-10 grid-rows-[20rem] mt-20 "}>
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
      {/* Lower gallery */}
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
  );
}
