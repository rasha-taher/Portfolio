import "./email.css";
const Temail = ({id,title , description }) => {
    return (
        <div className="email">
        <h2>
            Email
        </h2>
        <table className="tEmail">
            <tr><th>Name</th><th>Email</th><th>Message</th></tr>
            <tr><td>{id}</td><td>{title}</td><td>{description}</td></tr>
        </table>
    </div>
    );
  };
  
  export default Temail;
  