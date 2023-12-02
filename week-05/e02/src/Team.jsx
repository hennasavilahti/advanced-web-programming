import "./Team.css";

const Team = ({text, id}) => {
  return <li>{id + " - " +  text}</li>
} 

export default Team;