function Circle({ id, clickHandler, current }) {
  return (
    <div
      className={`circle ${current ? "active" : ""}`}
      onClick={() => clickHandler(id)}
    >
      <p>{id}</p>
    </div>
  );
}

export default Circle;
