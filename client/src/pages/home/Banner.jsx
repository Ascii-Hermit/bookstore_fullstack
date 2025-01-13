import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row py-8 px-6 md:py-12 md:px-12 justify-between items-center gap-16">
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h1 className="md:text-5xl text-3xl font-semibold mb-6">
          New Releases This Week
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone.
        </p>
        <button className="btn-primary px-6 py-3 rounded-md text-lg">
          Subscribe
        </button>
      </div>
      <div className="md:w-1/2 w-full">
        <img
          src={bannerImg}
          alt="New Releases Banner"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
