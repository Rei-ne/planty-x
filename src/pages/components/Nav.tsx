import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../util/useMediaQuery";

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  // media query for responsiveness
  // const matches = useMediaQuery("(max-width:780px)");

  // framer motion variant
  const navMove = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const navUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 3, // Adjust the delay as needed (3 seconds delay)
      },
    },
  };

  const linkMove = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  const linkUp = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: {
        delay: index * 0.3, // Adjust the delay for each child
      },
    }),
  };

  return (
    <nav className="flex items-center justify-between text-white pt-12 pb-4 mb-4 relative mx-8 md:mx-16 lg:mx-32 text-center">
      <div className="flex justify-center items-center gap-2 h-16">
        <a
          href="/"
          className="text-white font-GT-_Flexa w-12 h-12 border-2 rounded-full  text-xl hover:bg-white hover:text-green text-center flex items-center justify-center"
        >
          GL
        </a>

        {/* Title */}
        <h1 className="text-xl font-PPNeueMontreal text-white text-center">
          Green Life
        </h1>
      </div>

      {/* desktop nav */}

      <motion.div
        variants={navUp}
        animate="visible"
        initial="hidden"
        className="hidden lg:flex gap-12 font-GT-_Flexa font-bold "
      >
        <motion.a
          variants={linkUp}
          animate="visible"
          initial="hidden"
          custom={0}
          href="/"
          className="hover:underline"
        >
          Home
        </motion.a>
        <motion.a
          variants={linkUp}
          animate="visible"
          initial="hidden"
          custom={1}
          href="/services"
          className="hover:underline"
        >
          Services
        </motion.a>
        <motion.a
          variants={linkUp}
          animate="visible"
          initial="hidden"
          custom={2}
          href="/contact"
          className="hover:underline"
        >
          Contact
        </motion.a>
      </motion.div>

      {/* hamburger */}

      <div
        onClick={() => setToggled((prevToggle) => !prevToggle)}
        className="space-y-1.5 cursor-pointer z-50 lg:hidden"
      >
        <motion.span
          animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
          className="block h-0.5 w-8 bg-white"
        ></motion.span>
        <motion.span
          animate={{ width: toggled ? 0 : 24 }}
          className="block h-0.5 w-6 bg-white"
        ></motion.span>
        <motion.span
          animate={{
            rotateZ: toggled ? -45 : 0,
            y: toggled ? -8 : 0,
            width: toggled ? 32 : 16,
          }}
          className="block h-0.5 w-4 bg-white"
        ></motion.span>
      </div>
      {/* mobile nav */}
      {toggled && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          className="flex gap-12 font-GT-_Flexa font-bold fixed bg-green bottom-0 left-0 w-full h-full items-center justify-center z-40 "
        >
          <motion.div
            variants={navMove}
            animate="visible"
            initial="hidden"
            className="flex flex-col text-xl gap-24"
          >
            <motion.a variants={linkMove} href="/">
              Home
            </motion.a>
            <motion.a variants={linkMove} href="/services">
              Services
            </motion.a>
            <motion.a variants={linkMove} href="/contact">
              Contact
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
}
