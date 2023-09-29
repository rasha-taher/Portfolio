import "./email.css";
const Temail = ({ name, email, message }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{message}</td>
    </tr>
  );
};

export default Temail;
