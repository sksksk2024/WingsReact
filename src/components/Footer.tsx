import { Link } from "react-router-dom";
import './../index.css';

const Footer = () => {
  return (
    <footer className="footer container">
      <hr />
      <p>© 2024 Calisthenics Wings | 0757476361 pentru comenzi și mai multe informații!</p>
      <div>
        <Link to="/produse" style={{ fontWeight: 700 }}>Produse</Link>
        <Link to="/info" style={{ fontWeight: 700 }}>Info</Link>
      </div>
      <p style={{ display: "flex", justifyContent: "end", fontSize: "17px" }}>Last Updated: July 17 2024</p>
    </footer>
  );
};

export default Footer;