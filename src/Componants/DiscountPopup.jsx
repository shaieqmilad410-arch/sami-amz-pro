import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const DiscountBadge = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the discount after 1 second
  // Hide it automatically after 10 seconds
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 11000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);
  

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.3,
            rotate: -12,
            x: 50,
          }}
          animate={{
            opacity: 1,
            scale: [0.3, 1.15, 0.95, 1],
            rotate: [-12, 8, -4, 0],
            x: [50, -10, 5, 0],
          }}
          exit={{
            opacity: 0,
            scale: 0.7,
            rotate: 8,
            x: 40,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.05,
            rotate: -2,
          }}
          className="
            absolute
            right-4
            top-[20%]
            z-30
            w-44
            overflow-hidden
            rounded-2xl
            bg-[#111827]/95
            p-4
            shadow-2xl
            backdrop-blur-md
            sm:right-6
            sm:w-48
          "
        >
          {/* Decorative orange glow */}
          <div
            className="
              absolute
              -right-8
              -top-8
              h-24
              w-24
              rounded-full
              bg-[#FF9900]/30
              blur-2xl
            "
          />

          {/* Little decorative circle */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              absolute
              bottom-3
              right-3
              h-2
              w-2
              rounded-full
              bg-[#FF9900]
            "
          />

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Close discount"
            className="
              absolute
              right-2
              top-2
              z-20
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-sm
              font-bold
              text-gray-300
              transition
              hover:bg-white/20
              hover:text-white
            "
          >
            ×
          </button>

          <div className="relative">
            {/* Limited offer */}
            <div className="flex items-center gap-2">
              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#FF9900]
                "
              />

              <span
                className="
                text-[10px]
                font-bold
                uppercase
                tracking-widest
                text-gray-400
              "
              >
                Limited Offer
              </span>
            </div>

            {/* Discount percentage */}
            <div className="mt-3 flex items-end gap-1">
              <span
                className="
                text-4xl
                font-black
                leading-none
                text-[#FF9900]
              "
              >
                50%
              </span>

              <span
                className="
                mb-1
                text-sm
                font-bold
                text-white
              "
              >
                OFF
              </span>
            </div>

            {/* Message */}
            <p
              className="
              mt-2
              pr-3
              text-xs
              leading-5
              text-gray-400
            "
            >
              Start your Amazon business journey today.
            </p>

            {/* CTA */}
            <Link
              to="/courses"
              onClick={() => setIsVisible(false)}
              className="
                mt-3
                block
                rounded-lg
                bg-[#FF9900]
                px-3
                py-2
                text-center
                text-xs
                font-bold
                text-white
                shadow-lg
                transition
                duration-300
                hover:bg-[#e88b00]
                hover:shadow-orange-500/30
              "
            >
              Claim Offer →
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DiscountBadge;
