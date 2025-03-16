import React from "react";
import Navbar from "./Navbar";
import ActionButton from "./ActionButton";
import Socials from "./socials/Socials";

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen w-full bg-zinc-950/75 top-0 left-0 right-0 bottom-0 ">
        <div
          className="before:inset-0 before:content-[''] before:absolute 
              before:bg-[url(/assets/images/bg-2.jpg)]  before:z-[-1] before:bg:bg-cover before:bg-center before:bg-no-repeat before:bg-fixed before:object-cover"
        ></div>
        <Navbar />
        <div className="flex flex-row items-center justify-between  px-20 h-full w-full ">
          <div className=" space-y-10 pb-20 text-left ">
            <h1 className="text-6xl font-semibold text-white  w-[min(20,100)] ">
              We turn ideas <br /> into Reality
            </h1>
            <p className=" font-light text-white">
              Research • Analyzing • Solving
            </p>

            <ActionButton
              text={"Resume"}
              colored={true}
              icon={"arrow-down-to-line"}
              onClick={() => {
                console.log("Resume Download Button Clicked");
              }}
            />
            <ActionButton
              text={"Code Space"}
              colored={false}
              icon={"arrow-up-right-from-square"}
              onClick={() => {
                console.log("Code Space Button Clicked");
              }}
            />
          </div>
          <div className="flex flex-col justify-center pb-20 pr-20  space-y-5  ">
            <div className=" overflow-hidden"></div>
            <h1 className="text-4xl text-center pb-2 border-b-1 font-extralight">
              I'm <span className="font-bold">Anas Altaf</span>
            </h1>
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
