import HeaderRight from "./HeaderRight";
import "./index.scss";
import Logo from "./Logo";
import Menu from "./Menu";
//

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Menu />
            <HeaderRight />
        </div>
    )
}
export default Header;