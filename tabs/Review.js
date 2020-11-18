import React, { useState } from "react";
import Data from "./Data";
import { AiOutlineDoubleRight } from "react-icons/ai";
const Experience = () => {
  const [index, setIndex] = useState(0);
  const { name, title, period } = Data[index];
  const {
    role: { one, two, three },
  } = Data[index];

  const firstIndex = () => {
    setIndex(0);
  };

  const secondIndex = () => {
    setIndex(1);
  };

  const thirdIndex = () => {
    setIndex(2);
  };

  return (
    <section className="main">
      <div className="title">
        <h2>My Job Experience</h2>
      </div>
      <div className="underline"></div>
      <div className="btns">
        <button className="btn" onClick={firstIndex}>
          DevC
        </button>
        <button className="btn" onClick={secondIndex}>
          Flux
        </button>
        <button className="btn" onClick={thirdIndex}>
          Liveizy
        </button>
      </div>
      <h3>{title}</h3>
      <h4>{name}</h4>
      <p>{period}</p>
      <section className="role-outline">
        <p>
          <span className="job-icon">
            <AiOutlineDoubleRight />
          </span>
          {one}
        </p>
        <p>
          <span className="job-icon">
            <AiOutlineDoubleRight />
          </span>
          {two}
        </p>
        <p>
          <span className="job-icon">
            <AiOutlineDoubleRight />
          </span>
          {three}
        </p>
      </section>
    </section>
  );
};

export default Experience;
