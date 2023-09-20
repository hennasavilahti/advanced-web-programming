import './ListItem.css';

const ListItem = (props) => {
  return (
    <li className="list-item">
      <span className="list-item-id">{props.id}</span>
      <span className="list-item-text">{props.text}</span>
    </li>
  );
};

export default ListItem;
