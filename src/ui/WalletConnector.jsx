import { useNavigate } from "react-router-dom";
import { useConnectWallet } from "../context/ConnectContext";
import { connectWallet, disconnectWallet } from "../api/ConnectAPI";
import { connect, disconnect } from "get-starknet";
import SpinnerMini from "./SpinnerMini";
import { useState } from "react";
import argent from "../assets/argentLogo.svg";

function WalletConnector() {
  const { dispatch, address, connection, loading } = useConnectWallet();
  const [displayAddress, setDisplayAddress] = useState(true);
  const navigate = useNavigate();

  async function onConnect() {
    connectWallet(dispatch, connect);
    const response = await connectWallet(dispatch, connect);
    if (!response) return;
    navigate("app/instructions");
  }

  async function onDisconnect() {
    await disconnectWallet(dispatch, disconnect);
  }

  return (
    <>
      {!connection?.isConnected ? (
        <button
          className="flex w-[203px] items-center justify-center rounded-[4px] bg-white py-[14px] text-center  text-base font-medium text-darkPrimary disabled:cursor-not-allowed"
          onClick={onConnect}
          disabled={loading}
        >
          {loading ? <SpinnerMini /> : "Connect Wallet"}
        </button>
      ) : (
        <button
          className="flex  w-[203px] items-center justify-center gap-x-3 rounded-[4px] bg-white py-[14px] text-center text-base font-medium text-darkPrimary disabled:cursor-not-allowed"
          onMouseEnter={() => setDisplayAddress(false)}
          onMouseLeave={() => setDisplayAddress(true)}
          onClick={onDisconnect}
        >
          {!displayAddress ? (
            loading ? (
              <SpinnerMini />
            ) : (
              "Disconnect Wallet"
            )
          ) : (
            <>
              <img src={argent} className="h-[24px] w-[24px]" alt="" />
              <span>{address.slice(0, 10).concat("...")}</span>
            </>
          )}
        </button>
      )}
    </>
  );
}

export default WalletConnector;
