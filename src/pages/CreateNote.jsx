import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
    }

    console.log(title, details);
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}>
          Save
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="10"
          placeholder="Note Details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
