"use client";
import { useParams } from "next/navigation";

function Room() {
  const { id } = useParams();
  return (
    <>
      <h1>{id}</h1>
      <div>
        <input type="text" placeholder="" />
        <button></button>
      </div>
    </>
  );
}

export default Room;
