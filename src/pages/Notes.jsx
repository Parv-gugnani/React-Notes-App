import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
// import DummyNotes from "../dummy_notes";
import { Link } from "react-router-dom";
import NoteItem from "../components/NoteItem";

const Notes = ({ notes }) => {
  return (
    <section>
      <header className="notes__header">
        <h2>My notes</h2>
        <input type="text" autoFocus placeholder="Keyword..."></input>
        <button className="btn">
          <BiSearchAlt2 />
        </button>
      </header>
      <div className="notes__container">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
