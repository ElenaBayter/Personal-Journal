import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalForm from "./components/JournalForm/JournalForm";

import JournalList from "./components/JournalList/JournalList";
import Body from "./layouts/Body/Body";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
// import { UserContextProvider } from "./context/user.context";

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      setItems(
        data.map((item) => ({
          ...item,
          date: new Date(item.date),
        }))
      );
    }
  }, []);
  useEffect(() => {
    if (items.length) {
      localStorage.setItem("data", JSON.stringify(items));
    }
  }, [items]);

  const addItem = (item) => {
    if (!item.id) {
      setItems((oldItems) => [
        ...oldItems,
        {
          text: item.text,
          title: item.title,
          date: new Date(item.date),
          id:
            oldItems.length > 0
              ? Math.max(...oldItems.map((i) => i.id)) + 1
              : 1,
        },
      ]);
    } else {
      setItems([
        ...items.map((i) => {
          if (i.id === item.id) {
            return {
              ...item,
            };
          }
          return i;
        }),
      ]);
    }
  };
  const deleteItem = (id) => {
    setItems([...items.filter((i) => i.id !== id)]);
  };
  return (
    <>
      <div className="app">
        <LeftPanel>
          <Header />
          <JournalAddButton clearForm={() => setSelectedItem(null)} />
          <JournalList items={items} setItem={setSelectedItem} />
        </LeftPanel>
        <Body>
          <JournalForm
            onSubmit={addItem}
            onDelete={deleteItem}
            data={selectedItem}
          />
        </Body>
      </div>
    </>
  );
}

export default App;
