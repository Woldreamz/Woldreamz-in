import ActionButtons from "./action-buttons";
import Logo from "./logo";
import { NavigationMenuBar } from "./navigationbar";

const Navbar = () => {
  return (
    <div className="
    flex
    justify-between
    items-center px-10 border-bottom h-40
    ">
        <Logo />
        <NavigationMenuBar />
        <ActionButtons  />
    </div>
);
}

export default Navbar;