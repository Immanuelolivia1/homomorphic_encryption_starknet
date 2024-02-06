import { connect } from "get-starknet";
import { connectWallet } from "../../api/ConnectAPI";
import { useConnectWallet } from "../../context/ConnectContext";
import SpinnerMini from "../../ui/SpinnerMini";
import FeatureCard from "./FeatureCard";
import encryptIcon from "../../assets/lock.svg";
import gatewayIcon from "../../assets/arrow-square.svg";
import magicIcon from "../../assets/sheildIcon.svg";
import decryptIcon from "../../assets/unlock.svg";

function FeaturesSection() {
  const { dispatch, loading } = useConnectWallet();
  return (
    <div className="bg-white flex justify-center gap-x-[27px] items-center pt-[80px] pb-[116px]">
      <div className="w-[539px]">
        <h2 className="font-semibold text-5xl leading-[72px] text-darkSecondary">
          Encrypt, enter, experience, aggregate, decrypt
        </h2>
        <p className="text-ashSecondary font-normal text-base leading-10 mt-4 mb-[42px]">
          Secure your data with personalized encryption keys, enter
          StarkNet&apos;s decentralized gateway, experience the power of
          homomorphic encryption in our aggregation hub, and reclaim control by
          decrypting insights on-demand
        </p>
        <button
          className="rounded-[8px] flex w-[203px] items-center justify-center text-white py-[14px] text-center text-base  font-medium bg-darkPrimary disabled:cursor-not-allowed"
          onClick={() => connectWallet(dispatch, connect)}
          disabled={loading}
        >
          {loading ? <SpinnerMini /> : "Connect Wallet"}
        </button>
      </div>
      <div className="grid grid-cols-[auto_auto]">
        <FeatureCard
          logo={encryptIcon}
          feature_title={"User Encryption"}
          feature_description={
            "Start by encrypting your data with your personalized keys, securing it for the journey ahead."
          }
        />
        <FeatureCard
          logo={gatewayIcon}
          feature_title={"StarkNet Gateway"}
          feature_description={
            "Safely enter the StarkNet ecosystem, where decentralized principles ensure data integrity and resist unauthorized access."
          }
        />
        <FeatureCard
          logo={magicIcon}
          feature_title={"Homomorphic Magic"}
          feature_description={
            "Experience the power of homomorphic encryption, allowing computation on encrypted data without compromising individual privacy."
          }
        />
        <FeatureCard
          logo={decryptIcon}
          feature_title={"Decryption"}
          feature_description={
            "When you're ready, decrypt the aggregated insights on-demand, ensuring control over your data at every step."
          }
        />
      </div>
    </div>
  );
}

export default FeaturesSection;
