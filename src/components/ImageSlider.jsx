import React, { useEffect, useState } from "react";

const images = [
  "https://www.saranmotors.in/wp-content/uploads/2024/04/Himalayan-Granite-Black.jpg",
  "https://cdni.autocarindia.com/Features/_New%20Sedans%20%20Sports%20Cars%20Web%20Resized%20%20Watermarked._002.jpeg",
  "https://www.vhv.rs/dpng/d/437-4375693_jawa-perak-vs-royal-enfield-classic-500-hd.png",
  "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTEwL3Jhd3BpeGVsb2ZmaWNlNF9mdWxsX3F1YXJ0ZXJfZnJvbnRfdmlld19waG90b19vZl9hX2dyZXlfbW9kZXJuX18yMGIxNDdhYy1hYzRjLTQ0NGQtODRkYS04YjllNzg4MWM3NmIucG5n.png"
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute w-100 h-100 object-cover bg-cover transition-opacity duration-1000 top-[50%] left-[36%] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
