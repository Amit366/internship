const Navbar = ({ onSetIsClicked }) => {
  const clicked = () => {
    onSetIsClicked(1);
  };
  return (
    <div className="Navbar">
      <ul>
        <li>
          <a className="brand">React App</a>
        </li>
        <button onClick={clicked} className="button button1">
          Get Info
        </button>
      </ul>
    </div>
  );
};
export default Navbar;
