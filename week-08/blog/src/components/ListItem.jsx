import './ListItem.css';

const ListItem = ({ title, body }) => {
  return (
    <li className="posts__list-item">
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  );
};

export default ListItem;
