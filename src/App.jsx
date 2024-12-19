import { useState } from "react";
import "./App.css";
import EditPhoto from "./Components/EditPhoto";
import PhotoCard from "./Components/PhotoCard";

function App() {
  const [image, setImage] = useState("");
  console.log(image);

  const UploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  };

  return (
    <div className=" overflow-hidden ">
      <p className=" p-2 text-xl font-medium tracking-wide underline ">
        Edit Photo
      </p>
      <div className=" flex overflow-hidden w-full h-screen gap-2 p-6 ">
        <PhotoCard
          image={image ? image : ""}
          className={
            " rounded-md  object-cover w-[250px] h-[500px] cursor-pointer "
          }
        />
        <div className=" cursor-pointer self-center relative p-2 justify-center items-center flex rounded font-medium bg-[#333333] text-[#d4d4d4] tracking-wide text-center w-[150px] h-[50px] ">
          <p className=" text-pretty cursor-pointer  ">Choose Photo</p>
          <input
            onChange={UploadImage}
            className=" opacity-0 cursor-pointer absolute left-0 top-[-60%] w-full h-[160%] bg-[#000000] "
            type="file"
            name=""
            id=""
          />
        </div>
        <EditPhoto image={image ? image : ""} />
      </div>
    </div>
  );
}

export default App;
