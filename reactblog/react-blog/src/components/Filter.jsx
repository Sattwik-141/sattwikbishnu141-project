function Filter({ category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(event) => setCategory(event.target.value)}
      className="filter"
    >
      <option value="All">All</option>
      <option value="React">React</option>
      <option value="JavaScript">JavaScript</option>
      <option value="CSS">CSS</option>
    </select>
  );
}

export default Filter;