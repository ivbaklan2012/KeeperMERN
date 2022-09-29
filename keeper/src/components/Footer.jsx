const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright by Ivan Baklan ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
