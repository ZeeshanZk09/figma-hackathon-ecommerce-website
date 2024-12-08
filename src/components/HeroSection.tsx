import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="md:bg-white w-screen h-screen md:flex md:justify-center md:items-center md:px-20 md:py-16 overflow-x-hidden">
      <div className="hidden  md:flex h-[36.5rem] bg-[#2A254B] md:w-[60rem]  overflow-hidden xl:w-[80rem]  justify-between  text-white ">
        <div className="flex flex-col h-full p-16 ">
          <div className="flex flex-col md:w-[16.0625rem] xl:w-[32.0625rem]  justify-start gap-10">
            <h2 className="font-clashDisplay font-normal text-4xl">
              The furniture brand for the future, with timeless designs
            </h2>
            <button
              className="h-14 w-44 bg-[#F9F9F926] text-center"
              type="button"
            >
              View Collection
            </button>
          </div>

          <p className="absolute bottom-0 font-satoshiRegular md:max-w-[19.375rem] xl:max-w-[31.375rem] w-fit  tracking-wide  font-normal text-lg">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>
        <div className="w-[32.5rem] object-contain">
          <Image
            className="h-[36.5rem] w-[32.5rem]"
            src={`/image copy.png`}
            alt="Avelon Logo"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="flex flex-col h-full px-6 pt-10 md:hidden text-white bg-[#2A254B]">
        <h2 className="font-clashDisplay font-normal text-4xl tracking-wide">
          The future brand for the future, with timeless designs
        </h2>
        <div className="flex flex-col gap-8 relative top-56">
          <p className="font-satoshiRegular tracking-wide font-normal text-lg ">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
          <button className="w-full h-14 bg-[#F9F9F926]" type="button">
            View Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
