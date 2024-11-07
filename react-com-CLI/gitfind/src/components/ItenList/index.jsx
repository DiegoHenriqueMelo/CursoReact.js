import "./style.css";

function ItemList({ title, description }) {
  return (
    <div className="iten-list">
      <strong>{title}</strong>
      <p>{description}</p>
        <hr/>
    </div>
  );
}

export default ItemList;

