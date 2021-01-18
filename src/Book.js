import React from "react";

const Book = ({ img, title, author }) => {
  const clickHandler = (e) => {
    alert("Hello World!");
  };
  const clickComplex = (author) => {
    console.log(author);
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference example
      </button>
      <button type="button" onClick={() => clickComplex(author)}>
        More complex example
      </button>
    </article>
  );
};

export default Book;
