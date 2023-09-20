import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import NoteItem from "../components/NoteItem";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    // Function to filter notes based on the search text
    const filterNotes = () => {
      setFilteredNotes(
        notes.filter((note) => {
          return note.title.toLowerCase().includes(text.toLowerCase());
        })
      );
    };

    if (showSearch) {
      filterNotes();
    } else {
      setFilteredNotes(notes);
    }
  }, [text, showSearch, notes]);

  return (
    <section>
      <header className="notes__header">
        {!showSearch ? (
          <>
            <h2>My notes</h2>
            <button className="btn" onClick={() => setShowSearch(true)}>
              <BiSearchAlt2 />
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              autoFocus
              placeholder="Keyword..."
            />
            <button
              className="btn"
              onClick={() => {
                setShowSearch(false);
                setText("");
              }}
            >
              <MdClose />
            </button>
          </>
        )}
      </header>
      <div className="notes__container">
        {filteredNotes.length == 0 && (
          <p className="empty__notes">No Notes found</p>
        )}
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link to="/create-note" className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
