import Image from "next/image";
import React from "react";
import Stars from "./Stars";
import Heading from "./UI/Heading";
import Content from "./UI/Content";
import Button from "./UI/Button";



function Hero() {
  return (
    <section className=" relative sm:mr-8 max-sm:mr-8 max-sm:ml-8 sm:ml-8 lg:mr-20 lg:ml-20 mt-16 grid gap-16 bg-hero-bg.svg lg:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 mb-40">
      <div>
        <Image src={'camp.svg'} width={50} height={50} alt={'camp'}></Image>
        <Heading className={"mb-10"}>Putuk Truno Camp Area</Heading>
        <Content>
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </Content>
        <div className="flex space-x-5">
          <Stars />
          <p>
            <span className="mr-1 font-bold">198K</span> Execellent Reviews
          </p>
        </div>
        <div>
          <Button
            className={
              "bg-green-500 p-5 w-full rounded-full text-white font-bold hover:bg-green-600"
            }
          >
            Download App
          </Button>
          <Button className={"flex space-x-2 p-5 w-full justify-center"}>
            <Image src={"play.svg"} width={20} height={20} alt="play"></Image>{" "}
            <span>How We Work</span>
          </Button>
        </div>
      </div>

      <div className=" max-w-xs bg-gray-900 p-8 rounded-3xl max-h-64">
        <div className=" space-y-12">
          <div className="flex justify-between">
            <span className="text-gray-400">Location</span>
            <span>
              <Image src={"close.svg"} width={20} height={20} alt="close"></Image>
            </span>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="text-gray-400">Distance</span>
              <br />
              <span className=" text-white font-bold text-lg">173.28 mi</span>
            </div>
            <div>
              <span className="text-gray-400">Elevation</span>
              <br />
              <span className=" text-white font-bold text-lg">2.040 km</span>
            </div>
          </div>
        </div>
        
      </div>
      <Image className=" -z-10 absolute" src={'/hero-bg.svg'} width={1000} height={1000} alt="hero-bg"></Image>
    </section>
  );
}

export default Hero;
