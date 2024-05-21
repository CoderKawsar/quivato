function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-5">
      <h2 className="text-white text-center">
        Copyright &copy; {currentYear}. All rights reserved.
      </h2>
    </footer>
  );
}

export default Footer;
