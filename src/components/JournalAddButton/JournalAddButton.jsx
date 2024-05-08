import CardButton from "../CardButton/CardButton";
import "./JournalAddButton.css";

function JournalAddButton({ clearForm }) {
  return (
    <>
      <CardButton className="journal-add" onClick={clearForm}>
        <span className="plus">+</span> New Flashback
      </CardButton>
    </>
  );
}

export default JournalAddButton;
