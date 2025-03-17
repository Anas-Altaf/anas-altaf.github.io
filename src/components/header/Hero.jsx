import React from "react";
import Navbar from "./Navbar";
import ActionButton from "../buttons/ActionButton";
import Socials from "../socials/Socials";
import TypingText from "../effects/TypingText";

const Hero = ({ ref, onNavClick }) => {
  return (
    <>
      <div
        ref={ref}
        className="relative overflow-hidden h-screen w-full bg-zinc-950/75 top-0 left-0 right-0 bottom-0 "
      >
        <div
          className="before:inset-0 before:content-[''] before:absolute 
              before:bg-[url(/assets/images/bg-2.jpg)]  before:z-[-1] before:bg:bg-cover before:bg-center before:bg-no-repeat before:bg-fixed before:object-cover"
        ></div>
        <Navbar onNavClick={onNavClick} />
        <div className="flex flex-row max-md:flex-col items-center justify-between max-md:justify-evenly max-md:px-5  px-20 h-full w-full ">
          <div className=" space-y-10  pb-20 max-md:pb-0 text-left ">
            <span className=" relative animate-pulse px-3  py-0.5 bg-acc/5 border-1 border-acc text-acc rounded-full text-sm font-light">
              Under Development
            </span>
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
          <div className="flex flex-col justify-center pb-10 pr-20 max-md:pb-20 max-md:pb max-md:px-0    ">
            <h1 className="text-4xl text-center  border-b-1 font-extralight">
              I'm <span className="font-bold">Anas Altaf</span>
            </h1>
            <div className=" overflow-hidden">
              <TypingText />
            </div>
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
