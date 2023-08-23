import React from "react";
import { useGlobalContext } from "../context";
import Tour from "./Tour";
import { nanoid } from "nanoid";

const Tours = () => {
  const { tours } = useGlobalContext();
  return (
    <section className="tours">
      {tours.map((item) => {
        return <Tour key={nanoid()} {...item} />;
      })}
    </section>
  );
};

export default Tours;
