import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ActionButton from "../buttons/ActionButton";

const ProjectCard = ({
  id,
  pName,
  desc,
  img,
  images,
  icons,
  category,
  link,
  content,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      {/* Clickable Card */}
      <motion.div
        className="block z-10 bg-fg-p pr-6 pt-6 rounded-xl shadow-md shadow-black cursor-pointer hover:shadow-fg-s hover:shadow-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-fg-p to-fg-s/20 hover:bg-gradient-to-tl"
        initial={{ scale: 1 }}
        animate={{ scale: isExpanded ? 1.05 : 1 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsExpanded(true)}
      >
        <div className="flex justify-between items-center mb-6 pl-6">
          <h4 className="text-txt-desc text-sm font-medium uppercase tracking-wide">
            {id < 10 ? "0" + id : id} | {category}
          </h4>
          <div className="flex -space-x-1 scale-x-[-1]">
            {icons
              .map((icon) => (
                <img
                  key={icon}
                  title={icon}
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`}
                  className="w-6 h-6 scale-x-[-1] rounded-full p-0.5 bg-white shadow-md shadow-gray-900"
                  alt={icon}
                />
              ))
              .reverse()}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <img
              src={img}
              alt={`Project ${id}`}
              className="w-full h-full object-cover rounded-tr-xl  rounded-bl-xl"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-medium text-white mb-2">{pName}</h1>
            <p className="text-gray-300 text-sm pr-20">{desc}</p>
          </div>
        </div>
      </motion.div>

      {/* Modal with Animation */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Full Background Blur */}
            <motion.div
              className="fixed inset-0 bg-black/70 bg-opacity-50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)} // Click outside to close
            />

            {/* Expanding Modal with Scrollable Content */}
            <motion.div
              className="fixed z-50 top-1/2 left-1/2 w-full max-w-5xl max-h-[90vh] bg-bg-p p-8 rounded-xl shadow-xl transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-fg-s hover:bg-fg-s/20 transition duration-100 ease"
                onClick={() => setIsExpanded(false)}
              >
                <X size={24} />
              </button>

              {/* Scrollable Content */}
              <div
                className="h-[80vh] overflow-y-auto px-6 
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-track]:bg-fg-s
                [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-bg-p"
              >
                {/* Maximized Image */}
                <motion.img
                  src={img}
                  alt={`Project ${id}`}
                  className="w-full max-h-96 object-cover rounded-lg mb-6"
                  initial={{ height: "200px", opacity: 0 }}
                  animate={{ height: "400px", opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 12 }}
                />

                {/* Additional Images */}
                <div className="grid grid-cols-2 gap-4 my-6">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Project ${id} Image ${index}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>

                <h2 className="text-3xl  mb-4">{pName}</h2>
                <p className="text-txt-desc  font-light">{content}</p>

                {/* Icons */}
                <div className="mt-4 flex gap-2 flex-wrap">
                  {icons.map((icon) => (
                    <img
                      key={icon}
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`}
                      className="w-8 h-8"
                      alt={icon}
                    />
                  ))}
                </div>

                {/* Visit Link Button */}
                <div className="mt-6">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <ActionButton
                      text="View Project"
                      icon="arrow-up-right-from-square"
                      colored="true"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;
