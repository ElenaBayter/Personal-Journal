import "./JournalList.css";
import CardButton from "../CardButton/CardButton";
import JournalItem from "../JournalItem/JournalItem";

function JournalList({ items, setItem }) {
  if (items.length === 0) {
    return (
      <p className="journal-list__p">
        There is no flashbacks yet, make the first one
      </p>
    );
  }
  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <>
      {items.sort(sortItems).map((el) => (
        <CardButton key={el.id} onClick={() => setItem(el)}>
          <JournalItem title={el.title} date={el.date} text={el.text} />
        </CardButton>
      ))}
    </>
  );
}

export default JournalList;
