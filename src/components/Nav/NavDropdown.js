import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Icon from "@/macros/Icons/Icon";
import ArrowLongSVG from "@/macros/SVGs/ArrowLongSVG";

const dropdownVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      when: "afterChildren",
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
    y: -20,
  },
  open: {
    opacity: 1,
    y: 0,
  },
};

const NavDropdown = ({ name, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const firstItemRef = useRef(null);

  useEffect(() => {
    if (isOpen && firstItemRef.current) {
      firstItemRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div>
      <button
        className="w-full flex justify-between items-center group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-4xl lg:text-6xl grow-1">{name}</h2>
        <Icon
          Icon={<ArrowLongSVG dark />}
          hover
          HoverIcon={<ArrowLongSVG dark />}
          className={`flex-grow-0`}
          direction={isOpen ? "up" : "down"}
          border
          size={"md"}
          dark
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-full flex flex-col items-start overflow-hidden pt-4"
            initial="closed"
            animate="open"
            exit="closed"
            variants={dropdownVariants}
          >
            {items.map((item, index) => (
              <motion.div
                key={`${name}-menu-item-${index}`}
                variants={itemVariants}
                className="w-full"
              >
                <Link
                  href={item.url}
                  ref={index === 0 ? firstItemRef : null}
                  className="text-xl lg:text-xl block w-full px-4 py-2 group"
                >
                  <span className={`relative inline-block`}>
                    <div
                      className={`border-b-[1.5px] border-white z-0 absolute w-0 h-full top-0 left-0 block transition-all duration-200 group-hover:w-full`}
                    ></div>
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavDropdown;
