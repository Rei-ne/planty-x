import { useState } from "react";
import { motion } from "framer-motion";

// icons
import logo from "../icons/logo.png";
import search from "../icons/search-icon.png";
import cart from "../icons/cart-icon.png";
import profile from "../icons/profile-icon.png";

export default function Nav() {
  const [toggled, setToggled] = useState(false);

  // framer motion variants for nav animation
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
    <nav className="flex items-center justify-between text-black pt-8 pb-4 mb-4 relative mx-8 md:mx-16 lg:mx-32 text-center">
      <div className="flex justify-center items-center gap-2 h-8 w-1/4">
        <a href="/" className="text-black flex items-center justify-center">
          <img className="h-8" src={logo.src} alt="logo" />
        </a>
      </div>

      {/* desktop nav */}

      <motion.div
        variants={navUp}
        animate="visible"
        initial="hidden"
        className="hidden lg:flex gap-12 font-Quicksand_B font-bold "
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

      <div className="flex w-1/2 items-center justify-around">
        {/* icons */}
        <div className="flex items-center justify-between w-2/3">
          <img
            className="hover:cursor-pointer h-6"
            src={search.src}
            alt="search-icon"
          />
          <img
            className="hover:cursor-pointer h-6"
            src={profile.src}
            alt="profile-icon"
          />
          <img
            className="hover:cursor-pointer h-6"
            src={cart.src}
            alt="cart-icon"
          />
        </div>
        {/* hamburger */}

        <div
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className=" ml-10 space-y-1.5 cursor-pointer z-50  lg:hidden"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 5 : 0 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -5 : 0,
            }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
        </div>
      </div>
      {/* mobile nav */}
      {toggled && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          className="flex gap-12 font-Quicksand_B font-bold fixed bg-white bottom-0 left-0 w-full h-full items-center justify-center z-40 "
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
