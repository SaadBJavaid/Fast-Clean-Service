// components/Slider3D.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SliderContainer, Slider, SliderItem } from "../../mui/HomePkgs";
import PackageModal from "./PackageModal";

const Slider3D = () => {
  const [open, setOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalDetails, setModalDetails] = useState("");

  const handleOpen = (imageSrc, title, details) => {
    setModalImage(imageSrc);
    setModalTitle(title);
    setModalDetails(details);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const images = [
    {
      src: "/images/dragon_1.jpg",
      title: "Title 1",
      details: "Details about image 1",
    },
    {
      src: "/images/dragon_2.jpg",
      title: "Title 2",
      details: "Details about image 2",
    },
    {
      src: "/images/dragon_3.jpg",
      title: "Title 3",
      details: "Details about image 3",
    },
    {
      src: "/images/dragon_4.jpg",
      title: "Title 4",
      details: "Details about image 4",
    },
    {
      src: "/images/dragon_5.jpg",
      title: "Title 5",
      details: "Details about image 5",
    },
    {
      src: "/images/dragon_6.jpg",
      title: "Title 6",
      details: "Details about image 6",
    },
  ];

  return (
    <div>
      <SliderContainer>
        <Slider>
          {images.map((img, index) => (
            <SliderItem
              key={index}
              onClick={() => handleOpen(img.src, img.title, img.details)}
              sx={{ "--position": index + 1, "--quantity": images.length }}
            >
              {/* <Image
                src={img.src}
                alt={`img ${index + 1}`}
                width={400}
                height={600}
              /> */}
            </SliderItem>
          ))}
        </Slider>
      </SliderContainer>

      <PackageModal
        open={open}
        handleClose={handleClose}
        imageSrc={modalImage}
        title={modalTitle}
        details={modalDetails}
      />
    </div>
  );
};

export default Slider3D;
