import ActionButtons from "./action-buttons";
import Logo from "./logo";
import NavigationBar from "./navigationbar";

const Navbar = () => {
  return (
    <div className="
    flex
    justify-between
    items-center px-10 border-bottom 
    ">
        <Logo />
        <NavigationBar />
        <ActionButtons  />
    </div>
);
}

export default Navbar;