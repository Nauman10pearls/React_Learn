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
// import { useState } from "react";
// import "./style.css";

// const faqs = [
//   {
//     title: "Where are these chairs assembled?",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
//   },
//   {
//     title: "How long do I have to return my chair?",
//     text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
//   },
//   {
//     title: "Do you ship to countries outside the EU?",
//     text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
//   },
// ];

// export default function App() {
//   return (
//     <div>
//       <Accordion data={faqs} />
//     </div>
//   );
// }

// function Accordion({ data }) {
//   const [currOpen, setIsOpen] = useState(null);
//   return (
//     <div className="accordian">
//       {data.map((el, i) => (
//         <AccordionItem
//           currOpen={currOpen}
//           OnOpen={setIsOpen}
//           title={el.title}
//           num={i}
//           key={el.title}
//         >
//           {el.text}
//         </AccordionItem>
//       ))}
//       <AccordionItem
//         currOpen={currOpen}
//         OnOpen={setIsOpen}
//         title={"Test"}
//         num={23}
//         key={"Test"}
//       >
//         <p>Pakistan</p>
//         <ul>
//           <li>P</li>
//           <li>k</li>
//           <li>l</li>
//           <li>i</li>
//         </ul>
//       </AccordionItem>
//     </div>
//   );
// }

// function AccordionItem({ num, title, currOpen, OnOpen, children }) {
//   const isOpen = num === currOpen;
//   function handleToggle() {
//     OnOpen(isOpen ? null : num);
//   }

//   return (
//     <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
//       <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
//       <p className="title">{title}</p>
//       <p className="icon">{isOpen ? "-" : "+"}</p>
//       {isOpen && <div className="content-box">{children}</div>}
//     </div>
//   );
// }
import { useState } from "react";
export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percentage1, setpercentage1] = useState(0);
  const [percentage2, setpercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  function handleReset() {
    setBill("");
    setpercentage1(0);
    setpercentage2(0);
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setpercentage1}>
        How did you like the Service
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setpercentage2}>
        How did your Friend like the service
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <p>{children}</p>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">it was okay (5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="20">Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h1>
      you pay ${bill + tip} (${bill} + ${tip} tip)
    </h1>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
