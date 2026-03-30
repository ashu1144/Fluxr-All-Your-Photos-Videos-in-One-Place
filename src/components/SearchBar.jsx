import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
import { Link } from "react-router-dom";

export const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  
  const savedItems = useSelector((state)=>state.collection)


  function handelSubmit(e) {
    e.preventDefault();
    const inpuTtext = e.target.inputForm.value;
    dispatch(setQuery(inpuTtext));
    setText("");
  }
  return (
    <div className="bg-[#08080f] border-b-2 border-zinc-500/10 z-99 relative ">
      <form
        onSubmit={handelSubmit}
        className="flex flex-col md:flex-row items-center gap-4 md:gap-5 p-4 mx-auto w-full max-w-4xl"
      >
        <div className="w-60  overflow-hidden object-contain ">
          <img src="/logo.svg" alt="" />
        </div>

        <div className="flex gap-2 w-full">
          <input
            className="border-2 w-full px-4 py-2 text-lg md:text-xl outline-none rounded-2xl"
            value={text}
            name="inputForm"
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="search anything...."
            required
          />

          <button
            className="active:scale-95 max-sm:w-[25%] flex items-center justify-center bg-pink-500 hover:bg-purple-600 text-white px-6 py-2 rounded-2xl md:w-auto"
            type="submit"
          >
            SEARCH
          </button>
        </div>

        <Link to='/collections'  className="active:scale-95 bg-green-500 p hover:bg-purple-600 text-white px-6 py-3 rounded-2xl w-full md:w-auto text-center flex gap-1 justify-center" >
          SAVED <span className="font-extrabold text-gray-700">{savedItems.length}</span>
        </Link>
      </form>
    </div>
  );
};
