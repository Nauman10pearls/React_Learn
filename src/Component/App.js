import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [Items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((Items) => [...Items, item]);
  }
  function handleDeleteItem(id) {
    setItems((Items) => Items.filter((item) => item.id !== id));
  }
  function handleToggleitem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function HandleDeleteItem() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );

    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleAddItem} />
      <PackingList
        items={Items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleitem}
        onClearList={HandleDeleteItem}
      />
      <Stats items={Items} />
    </div>
  );
}
