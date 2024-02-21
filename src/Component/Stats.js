export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="footer">
        <em>Start Adding items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numpacked = items.filter((item) => item.packed).length;
  const percenatge = Math.round((numpacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percenatge === 100
          ? "You got everything! Ready to go ✈️"
          : `👜 you have ${numItems} item on your list, and you already packed
        ${numpacked} (${percenatge}%)`}
      </em>
    </footer>
  );
}
