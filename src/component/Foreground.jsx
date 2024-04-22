import React, { useRef } from "react";
import Card from "./Card";
const Foreground = () => {
  const forref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      size: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagtitle: "Download Now",
        tagColor: true,
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      size: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagtitle: "Download Now",
        tagColor: false,
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      size: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagtitle: "Download Now",
        tagColor: true,
      },
    },
  ];
  return (
    <>
      <div
        className="w-full h-full fixed top-0 left-0 z-[3] flex gap-5 flex-wrap"
        ref={forref}
      >
        {data.map((item, index) => (
          <Card key={index} cardData={item} reference={forref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
