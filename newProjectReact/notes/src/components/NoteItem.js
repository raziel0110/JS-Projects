import React from "react";

const NoteItem = props => {
  return (
    <div>
      <li>{props.note.noteTitle}</li>
    </div>
  );
};

export default NoteItem;
