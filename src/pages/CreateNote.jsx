import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import useCreateDate from "../components/useCreateDate";

const colors = ["#264653", "#E9C46A", "#F4A261", "#E76F51"];

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      const note = { id: uuid(), title, details, date };
      // add this note to array
      setNotes((prevNotes) => [note, ...prevNotes]);
      // console.log(note);
      // redirect
      navigate("/");
    }
  };

  const handleColorChange = () => {
    // Cycle through colors or reset to the first color when reaching the end
    setSelectedColorIndex((prevIndex) =>
      prevIndex === colors.length - 1 ? 0 : prevIndex + 1
    );
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
