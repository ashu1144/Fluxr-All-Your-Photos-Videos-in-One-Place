import React from "react";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResult,
  clearReasult,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ResultCard from "./ResultCard";
import { useState } from "react";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (state) => state.search,
  );

  useEffect(() => {
    getData();
  }, [query, activeTab]);

  const [currentPage, setCurrentPage] = useState(0)

  const noOfItems = 10;
  const noOfPages =results.length / noOfItems;
  const start = currentPage * 10;
  const end = start + 10;

  const getData = async () => {
    try {
      dispatch(setLoading());
      let data = [];
      if (activeTab == "photos" && query.trim().length > 0) {
        const respose = await fetchPhotos(query);
        data = respose.map((item) => ({
          id: item.id,
          type: "photo",
          title: item.alt_description,
          thumbnail: item.urls.small,
          src: item.urls.full,
          link: item.links.html,
        }));
      }
      if (activeTab == "videos" && query.trim().length > 0) {
        let response = await fetchVideos(query);
        data = response.map((item) => ({
          id: item.id,
          type: "video",
          title: item.user.name || "video",
          thumbnail: item.image,
          src: item.video_files[0].link,
          link: item.url,
        }));
      }
      dispatch(setResult(data));
    } catch (err) {
      dispatch(setError(err));
    }
  };

  if(error) return <h1>{error.message}</h1>
  if (loading) return <h1 className="text-center my-10">Loading...</h1>;
  if(results.length==0) return<div className=" flex h-96 w-full items-center justify-center">
        <div>
            <h1 className="text-3xl max-md:text-2xl font-bold text-center animate-bounce">
        Search for photos, videos & GIFs
        </h1>
        <p className="text-center text-gray-500 mt-2">
            Where creativity finds visuals
        </p>
        </div>
    </div>

  return (
    <div className="mx-auto px-3 py-6 w-full max-w-7xl">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.slice(start,end).map((item, idx) => (
          <ResultCard key={item.id ?? idx} item={item} />
        ))}
      </div>
      <div className="flex justify-center my-10 gap-2">
        {[...Array(noOfPages).keys()].map((num)=>(
          <div key={num} onClick={()=>setCurrentPage(num)} className={`border-2 p-2 ${currentPage==num?"border-red-400 scale-95":""}`}>{num+1}</div>
        ))}
      </div>
    </div>
  );
};

export default ResultGrid;
