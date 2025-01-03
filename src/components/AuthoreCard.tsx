import React from "react";
import Image from "next/image";
const AuthoreCard = () => {
  return (
    <div className=" shadow-lg rounded- p-6 mt-12 bg-stone-400">
      <div className="flex items-center animation-fedIn">
        <Image
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 borser-red-400"
          src="/images/author.jpg"
          alt="Auther Image"
          width={64}
          height={64}
        />

        <div>
          <h3 className="text-xl font-bold">Shabnam Wahid</h3>
          <p className="text-white">Front-End Developer</p>
        </div>
      </div>
      <p className="mt-4 font-black leading-relaxed">
        Shabnam Wahid is a passionate Front-End Developer with a keen eye for
        detail and a love for creating user-friendly, responsive web
        applications. With expertise in HTML, CSS, JavaScript, and modern
        frameworks like React, Shabnam specializes in transforming ideas into
        seamless and visually appealing digital experiences.
      </p>
      <div className="mt-4 flex space-x-3">
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-slate-600 transition duration-300"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-slate-600 transition duration-300"
        >
        GitHub
        </a>
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-slate-600 transition duration-300"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default AuthoreCard;
