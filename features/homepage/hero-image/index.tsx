import React from "react";

function HeroImage() {
  return (
    <div className="@container">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-[1.5rem]">
          <p
            className="text-[3.5rem] font-extrabold mb-3"
            style={{ lineHeight: 1.2 }}
          >
            <span className="text-[#ff6200]">Save money</span>
            <br className="show-for-large" />
            on your next
            <br className="show-for-large" />
            Daraz purchase.
            <br className="show-for-large" />
          </p>
          PriceWise is a free Daraz price tracker, alerting you to good deals on
          products you love.
          <br className="show-for-large" />
          <a
            href="/signup"
            id="landing-signup-btn"
            className="bg-[#ff6200] text-white px-4 py-2 mt-5 inline-block rounded-full"
          >
            Sign up for free
          </a>
        </div>
        <p className="hide-for-large">
          <img
            loading="eager"
            src="https://camelcamelcamel.com/cdn-cgi/imagedelivery/xo6xxztHGfobo4prc8GRDw/5a070f4d-565d-4ecd-b9e7-7f288c923900/public"
            id="mobile-landing-img"
            alt=""
          />
        </p>
      </div>
    </div>
  );
}

export default HeroImage;
