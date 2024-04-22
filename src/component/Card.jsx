import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import { IoIosCloseCircleOutline } from "react-icons/io";
const Card = ({ cardData, reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.2 }}
        dragElastic={0.2}
        className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900 px-8 py-10 text-white overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-sm leading-tight mt-5 font-semibold">
          {cardData.desc}
        </p>
        <div className="footer absolute bottom-0 w-full left-0 ">
          <div className="flex justify-between items-center py-3 px-8">
            <h5>{cardData.size}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {cardData.close ? (
                <MdFileDownload size="0.8em" color="#ffffff" />
              ) : (
                <IoIosCloseCircleOutline size="0.8em" color="#ffffff" />
              )}
            </span>
          </div>
          {cardData.tag.isOpen && (
            <div
              className={`tag w-full ${
                cardData.tag.tagColor ? "bg-green-600" : "bg-blue-600"
              } py-4 flex items-center justify-center`}
            >
              <h3 className="text-sm font-semibold">{cardData.tag.tagtitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
