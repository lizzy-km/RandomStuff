import React, { useEffect, useState } from "react";

const PhotoCard = ({
  image = "",
  className = "",
  brightnessVal = 100,
  contrastVal = 100,
  SaturateVal = 100,
  Sepia = 0,
  HueVal = 0,
  Invert = 0,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all(image).then(() => image?.length > 0 && setIsLoading(false));
  }, [image]);

  return isLoading ? (
    <div className={className + " bg-[#343536] "}></div>
  ) : (
    <img
      style={{
        filter: ` brightness(${brightnessVal / 100}) contrast(${
          contrastVal / 100
        }) saturate(${SaturateVal / 100}) sepia(${
          Sepia / 100
        }) hue-rotate(${HueVal}deg) invert(${Invert / 100}) `,
      }}
      className={className}
      src={image}
      alt="Photo"
      srcset=""
    />
  );
};

export default PhotoCard;
