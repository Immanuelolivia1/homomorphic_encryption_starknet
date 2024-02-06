import Logo from "./Logo";

function Footer() {
  return (
    <div className="px-[120px] py-[76px] gap-x-[149px] bg-darkPrimary grid grid-cols-[534px_auto] text-white">
      <div>
        <Logo />
        <p className="text-base font-normal leading-10 ">
          Comes with a very great service, friendly and of course comfortable at
          a very affordable price by all groups, both bottom and top
        </p>
      </div>
      <div className="flex gap-x-[84px] text-base font-normal">
        <div>
          <h5 className="text-lg font-bold mb-4">About Us</h5>
          <ul className="flex flex-col gap-y-4">
            <li>Our taxi’s</li>
            <li>Our drivers</li>
            <li>Contact us</li>
            <li>Tesrimonial</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-bold mb-4">Info</h5>
          <ul className="flex flex-col gap-y-4">
            <li>FAQ</li>
            <li>Cookie & help</li>
            <li>Privacy policy</li>
            <li>Terms & conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
