import { connect } from "get-starknet";
import { connectWallet } from "../../api/ConnectAPI";
import { useConnectWallet } from "../../context/ConnectContext";
import SpinnerMini from "../../ui/SpinnerMini";

function HeroSection() {
  const { dispatch, loading } = useConnectWallet();
  return (
    <div className="pt-[72px] pb-[200px] bg-darkPrimary text-white gap-x-11 flex justify-center items-center">
      <div className="w-[566px]">
        <h1 className="font-bold text-[40px]">
          Elevate Your Data. Elevate Your Privacy.{" "}
        </h1>
        <p className="mt-6 mb-10 text-[22px] font-light">
          StarkNet Unleashes Secure Data Aggregation Through Homomorphic
          Encryption
        </p>
        <button
          className="rounded-[4px] text-base flex w-[203px] items-center justify-center bg-white py-[14px] text-center  font-medium text-darkPrimary disabled:cursor-not-allowed"
          onClick={() => connectWallet(dispatch, connect)}
          disabled={loading}
        >
          {loading ? <SpinnerMini /> : "Connect Wallet"}
        </button>
      </div>
      <div className="w-[594px] h-[370px] bg-white rounded-full flex justify-center items-center"></div>
    </div>
  );
}

export default HeroSection;
