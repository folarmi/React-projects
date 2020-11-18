import React, { useState } from "react";

const Lorem = () => {
  const [paragraph, setParagraphs] = useState("0");
  const [lorem, setLorem] = useState("");
  const word =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequuntur obcaecati a animi ducimus placeat magnam vero eos numquam maiores?";

  const getNumber = (e) => {
    e.preventDefault();
    console.log(paragraph);
    setLorem(word.repeat(paragraph));
    // string.repeat([count]);
  };
  return (
    <div className="main">
      <h2>Tired of Boring Lorem Ipsum?</h2>
      <form action="" method="get">
        <label htmlFor="paragraph">Paragraphs:</label>
        <input
          type="number"
          name=""
          id=""
          value={paragraph}
          onChange={(e) => setParagraphs(e.target.value)}
        />
        <button onClick={getNumber}>Generate</button>
        <div className="text">
          <p>{lorem}</p>
        </div>
      </form>
    </div>
  );
};

export default Lorem;
