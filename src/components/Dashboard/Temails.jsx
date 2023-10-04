const Temails = ({ name, email, message }) => {
  return (
    <tr>
      <td className="email-td-data">{name}</td>
      <td className="email-td-data">{email}</td>
      <td className="email-td-data">{message}</td>
    </tr>
  );
};

export default Temails;

