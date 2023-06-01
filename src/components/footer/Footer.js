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
      <li>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin"></i>
      </li>
    </footer>
  );
}

export default Footer;
