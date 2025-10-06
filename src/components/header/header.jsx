import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineSegment } from "react-icons/md";

export default function Header (){
    return (
        <div className={"header"}>
            <h1 className={"logo"}> Koral. </h1>
            <div className={"header-pages-container"}>
                <h1 className={"header-icon"}>
                    HOME
                </h1>
                <h1 className={"header-icon"}>
                    PAGES
                </h1>
                <h1 className={"header-icon"}>
                    PORTFOLIO
                </h1>
                <h1 className={"header-icon"}>
                    HEADERS
                </h1>
                <h1 className={"header-icon"}>
                    ELEMENTS
                </h1>
                <h1 className={"header-icon"}>
                    BLOG
                </h1>
            </div>

            <div className={"header-icons"}>
                <FaMagnifyingGlass />
                <CiShoppingCart />
                <MdOutlineSegment />
            </div>
        </div>
    )
}