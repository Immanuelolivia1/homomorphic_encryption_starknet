/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import WalletConnector from "./WalletConnector";
// import { useConnectWallet } from "../context/ConnectContext";

function Navbar() {
  // const { connection } = useConnectWallet();
  return (
    <nav className="px-[120px] flex text-base justify-between items-center py-10 bg-darkPrimary text-ashPrimary">
      <Logo />
      {/* {connection?.isConnected && ( */}
      <ul className="font-normal navigationLinks flex items-center gap-x-8">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"about"}>About us</NavLink>
        </li>
        <li>
          <NavLink to={"pricing"}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={"testimonial"}>Testimonial</NavLink>
        </li>
      </ul>
      {/* )} */}
      <WalletConnector />
    </nav>
  );
}

export default Navbar;
