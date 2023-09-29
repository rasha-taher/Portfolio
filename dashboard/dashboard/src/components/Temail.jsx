import "./email.css";
const Temail = ({ id, title, description }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{description}</td>
    </tr>
  );
};

export default Temail;
