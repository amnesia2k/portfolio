"use client";

import { person } from "@/public";
import Image from "next/image";
import { heroIcons } from "./common";
import {
  useMotionValue,
  useTransform,
  motion,
  useSpring,
  delay,
} from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseMove, setMouseMove] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);

    // console.log(clientX, clientY, x, y);
  };

  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setMouseMove(true);
  };

  const { innerWidth, innerHeight } = windowOffset;

  const xSpring = useSpring(x, { stiffness: 500, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 500, damping: 10 });

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);

  return (
    <div
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 capitalize">
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            <Image
              src={person}
              alt="person_image"
              width={400}
              height={400}
              priority={true}
              className="h-auto w-[150px]"
            />
            <motion.span
              className="absolute text-3xl font-bold text-white"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              transition={{ opacity: { delay: 1 } }}
            >
              Hi
            </motion.span>
          </motion.div>
          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500">
            My name is Olatilewa &
          </h1>
          <p className="text-lg tracking-wider text-gray-700">
            ...I love writing code 😀
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-x-10 text-3xl">
          {heroIcons.map(({ id, href, icon: Icon }) => (
            <a key={id} href={href}>
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <h3
          className="cursor-pointer mx-auto mt-7 block w-max rounded-lg bg-red-600 px-3 py-1 capitalize tracking-wider text-white hover:bg-red-400 transition-colors duration-300"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Say HI!
        </h3>
      </div>
    </div>
  );
};

export default Hero;
