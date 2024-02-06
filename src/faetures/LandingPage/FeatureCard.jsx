/* eslint-disable react/prop-types */
function FeatureCard({ logo, feature_title, feature_description }) {
  return (
    <div className="p-6 bg-white w-[350px]">
      <div className="bg-[#cfcece] rounded-full relative flex items-center justify-center w-[100px] h-[100px]">
        <div className=" w-[100px] h-[50px]  rounded-b-[110px] bg-[#ababaa] absolute left-0 bottom-0"></div>
        <img src={logo} alt="" className="z-[40]" />
      </div>
      <h3 className="mt-6 mb-2 text-2xl font-semibold text-darkSecondary">
        {feature_title}
      </h3>
      <p className="text-sm leading-6 font-normal text-ashPrimary pl-[5px]">
        {feature_description}
      </p>
    </div>
  );
}

export default FeatureCard;
