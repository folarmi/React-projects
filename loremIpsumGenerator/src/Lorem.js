import React, { useState } from "react";
import Data from "./Data";
const Lorem = () => {
  const [paragraph, setParagraphs] = useState([]);
  const [index, setIndex] = useState(0);

  const getNumber = (e) => {
    e.preventDefault();
    let amount = parseInt(index);
    if (index <= 0) {
      amount = 1;
    }
    if (index > 8) {
      amount = 8;
    }
    setParagraphs(Data.slice(0, amount));
  };
  return (
    <section className="main">
      <h2>Tired of Boring Lorem Ipsum?</h2>
      <form>
        <label htmlFor="paragraph">Paragraphs:</label>
        <input
          type="number"
          value={index}
          onChange={(e) => setIndex(e.target.value)}
        />
        <button onClick={getNumber} type="submit">
          Generate
        </button>
        <article className="text">
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            cumque possimus harum id officiis maxime adipisci ullam impedit
            culpa nobis?
          </p> */}
          {paragraph.map((onePara, index) => {
            return <p key={index}>{onePara}</p>;
          })}
        </article>
      </form>
    </section>
  );
};

export default Lorem;
