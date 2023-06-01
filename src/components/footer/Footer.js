import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <li>Raven</li>
      <li>
        <p>
          © {'</>'} with 🤍 by &nbsp;
          <a
            href="https://github.com/vivekkushal"
            className="name-link"
            target="_blank"
            rel="noreferrer"
          >
            Vivek Kushal
          </a>
        </p>
      </li>
      <li>Cart</li>
    </footer>
  );
}

export default Footer;
