import React, { useState } from "react";
import PhotoCard from "./PhotoCard";
import Button from "./Button";

const EditPhoto = ({ image }) => {
  const [style, setStyle] = useState({
    brightnessVal: 100,
    contrastVal: 100,
    SaturateVal: 100,
    SaturateVal: 100,
    Sepia: 0,
    HueVal: 0,
    Invert: 0,
  });

  return (
    <div className=" text-[#d4d4d4] justify-between    flex w-[800px] h-[600px] p-2 rounded-md bg-[#242526] ">
      <div className={`   w-[300px] object-cover h-full rounded-md '`}>
        <PhotoCard
          className={` transition-colors  w-[300px] object-cover h-full rounded-md '`}
          image={image}
          brightnessVal={style.brightnessVal}
          contrastVal={style.contrastVal}
          SaturateVal={style.SaturateVal}
          Sepia={style.Sepia}
          HueVal={style.HueVal}
          Invert={style.Invert}
        />
      </div>

      <div className=" flex w-[400px] flex-col justify-start items-center ">
        <div className=" flex text-sm justify-start items-center gap-3 p-2 ">
          <label for="range" class="text-sm w-[100px] font-medium">
            Brightness:
          </label>
          <input
            id="range"
            type="range"
            min="0"
            max="200"
            value={style.brightnessVal}
            onChange={(e) =>
              setStyle({ ...style, brightnessVal: e.target.value })
            }
            class="w-[200px]  h-2 bg-[$333333] rounded-lg appearance-none cursor-pointer accent-[#d4d4d4]"
          />
          <input
            onChange={(e) =>
              setStyle({ ...style, brightnessVal: e.target.value })
            }
            value={style.brightnessVal}
            id="rangeValue"
            min="0"
            max="200"
            type="number"
            class="text-sm p-1 w-[50px] text-center bg-transparent border rounded font-medium"
          ></input>
        </div>

        <div className=" flex text-sm justify-start items-center gap-3 p-2 ">
          <label for="range" class="text-sm w-[100px] font-medium">
            Contrast:
          </label>
          <input
            id="range"
            type="range"
            min="0"
            max="400"
            value={style.contrastVal}
            onChange={(e) =>
              setStyle({ ...style, contrastVal: e.target.value })
            }
            class="w-[200px]  h-2 bg-[$333333] rounded-lg appearance-none cursor-pointer accent-[#d4d4d4]"
          />
          <input
            onChange={(e) =>
              setStyle({ ...style, contrastVal: e.target.value })
            }
            value={style.contrastVal}
            min="0"
            max="400"
            type="number"
            class="text-sm p-1 w-[50px] text-center bg-transparent border rounded font-medium"
          ></input>
        </div>

        <div className=" flex text-sm justify-start items-center gap-3 p-2 ">
          <label for="range" class="text-sm w-[100px] font-medium">
            Saturate:
          </label>
          <input
            id="range"
            type="range"
            min="0"
            max="200"
            value={style.SaturateVal}
            onChange={(e) =>
              setStyle({ ...style, SaturateVal: e.target.value })
            }
            class="w-[200px]  h-2 bg-[$333333] rounded-lg appearance-none cursor-pointer accent-[#d4d4d4]"
          />
          <input
            onChange={(e) =>
              setStyle({ ...style, SaturateVal: e.target.value })
            }
            value={style.SaturateVal}
            min="0"
            max="200"
            type="number"
            class="text-sm p-1 w-[50px] text-center bg-transparent border rounded font-medium"
          ></input>
        </div>
        <div className=" flex text-sm justify-start items-center gap-3 p-2 ">
          <label for="range" class="text-sm w-[100px] font-medium">
            Sepia:
          </label>
          <input
            id="range"
            type="range"
            min="0"
            max="100"
            value={style.Sepia}
            onChange={(e) => setStyle({ ...style, Sepia: e.target.value })}
            class="w-[200px]  h-2 bg-[$333333] rounded-lg appearance-none cursor-pointer accent-[#d4d4d4]"
          />
          <input
            onChange={(e) => setStyle({ ...style, Sepia: e.target.value })}
            value={style.Sepia}
            min="0"
            max="100"
            type="number"
            class="text-sm p-1 w-[50px] text-center bg-transparent border rounded font-medium"
          ></input>
        </div>
        <div className=" flex text-sm justify-start items-center gap-3 p-2 ">
          <label for="range" class="text-sm w-[100px] font-medium">
            Hue:
          </label>
          <input
            id="range"
            type="range"
            min="-100"
            max="100"
            value={style.HueVal}
            onChange={(e) => setStyle({ ...style, HueVal: e.target.value })}
            class="w-[200px]  h-2 bg-[$333333] rounded-lg appearance-none cursor-pointer accent-[#d4d4d4]"
          />
          <input
            onChange={(e) => setStyle({ ...style, HueVal: e.target.value })}
            value={style.HueVal}
            min="-100"
            max="100"
            type="number"
            class="text-sm p-1 w-[50px] text-center bg-transparent border rounded font-medium"
          ></input>
        </div>
        <div className=" flex text-sm justify-start items-center gap-3 p-2 ">
          <label for="range" class="text-sm w-[100px] font-medium">
            Invert:
          </label>
          <input
            id="range"
            type="range"
            min="0"
            max="100"
            value={style.Invert}
            onChange={(e) => setStyle({ ...style, Invert: e.target.value })}
            class="w-[200px]  h-2 bg-[$333333] rounded-lg appearance-none cursor-pointer accent-[#d4d4d4]"
          />
          <input
            onChange={(e) => setStyle({ ...style, Invert: e.target.value })}
            value={style.Invert}
            min="0"
            max="100"
            type="number"
            class="text-sm p-1 w-[50px] text-center bg-transparent border rounded font-medium"
          ></input>
        </div>

        <code className=" flex flex-col font-mono tracking-wider p-2 mx-2 my-8 rounded bg-[#181818] text-[#d6336c] ">
          <i>//CSS//</i>

          <pre className=" text-[#d3c637] ">{"img {"} </pre>
          <p className=" text-[#d4d4d4] flex ">
            filter:{" "}
            <p className="flex flex-wrap gap-0 px-2">
              <pre className=" text-[#d3c637] ">brightness</pre>(
              {style.brightnessVal / 100})
              <pre className=" text-[#d3c637] "> contrast</pre> (
              {style.contrastVal / 100})
              <pre className=" text-[#d3c637] "> saturate</pre> (
              {style.SaturateVal / 100})
              <pre className=" text-[#d3c637] "> sepia</pre> (
              {style.Sepia / 100})
              <pre className=" text-[#d3c637] "> invert</pre> ({style.Invert}%)
              <pre className=" text-[#d3c637] "> hue-rotate</pre>({style.HueVal}
              deg);
            </p>
          </p>

          <pre className=" text-[#d3c637] ">{"}"} </pre>
        </code>

        <Button
          className={
            " mx-2 self-end bg-[#181818] text-[#f4f4f4] border border-[#f4f4f4] tracking-wide w-[25%] h-[8%] rounded-md "
          }
          icon={false}
          text={"Save"}
          clickText={"Saving"}
          isLoading={true}
        />
      </div>
    </div>
  );
};

export default EditPhoto;
