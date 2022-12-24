import BannerImg from "../assets/banner.jpg";
export default function Banner() {
  return (
    <div className="px-4 py-12">
      <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white lg:px-10 md:px-6 px-4 py-12">
        <div className="md:flex justify-center gap-8 items-center">
          <div className="banner-img-div">
            <img
              src={BannerImg}
              alt="hair_care"
              className="lg:block md:hidden block"
            />
            <img
              src={BannerImg}
              alt="hair_care"
              class="lg:hidden md:block hidden"
            />
          </div>
          <div>
            <p className="lg:text-4xl md:text-3xl text-3xl font-semibold md:text-left text-center">
              Space X
            </p>
            <p className="text-base text-gray-600 max-w-[624px] w-full mt-6 md:text-left text-center">
              Space Exploration Technologies Corp. is an American spacecraft
              manufacturer, launcher, and a satellite communications corporation
              headquartered in Hawthorne, California. It was founded in 2002 by
              Elon Musk with the stated goal of reducing space transportation
              costs to enable the colonization of Mars.
            </p>
            <button className="bg-gray-800 text-base font-medium lg:max-w-[205px] w-full px-3 py-2 text-white mt-11 hover:bg-gray-700 transition duration-300 ease-in-out lg:block md:hidden blocl">
              Buy Rocket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
