import Image from "next/image";
import React from "react";

function FeatureCard({img,title,content}) {
  return (
    <div className=" space-y-5">
      <div className="bg-green-500 p-3 rounded-full w-fit">
        <Image src={`${img}`} width={30} height={30} alt="map"></Image>
      </div>
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="text-slate-500">
       {content}
      </p>
    </div>
  );
}

export default FeatureCard;
