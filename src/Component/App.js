// import { useState } from "react";
// import Logo from "./Logo";
// import Form from "./Form";
// import PackingList from "./PackingList";
// import Stats from "./Stats";

// export default function App() {
//   const [Items, setItems] = useState([]);

//   function handleAddItem(item) {
//     setItems((Items) => [...Items, item]);
//   }
//   function handleDeleteItem(id) {
//     setItems((Items) => Items.filter((item) => item.id !== id));
//   }
//   function handleToggleitem(id) {
//     setItems((items) =>
//       items.map((item) =>
//         item.id === id ? { ...item, packed: !item.packed } : item
//       )
//     );
//   }

//   function HandleDeleteItem() {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete all items"
//     );

//     if (confirmed) setItems([]);
//   }
//   return (
//     <div className="app">
//       <Logo />
//       <Form onAdditems={handleAddItem} />
//       <PackingList
//         items={Items}
//         onDeleteItem={handleDeleteItem}
//         onToggleItem={handleToggleitem}
//         onClearList={HandleDeleteItem}
//       />
//       <Stats items={Items} />
//     </div>
//   );
// }
import { useState } from "react";
import "./style.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordian">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, SetisOpen] = useState(false);

  function handleToggle() {
    SetisOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
