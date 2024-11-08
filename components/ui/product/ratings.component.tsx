"use client";

import { Rating } from "react-simple-star-rating";

type TProps = {
  ratings: number;
  text?: string;
  shop?: boolean;
  totalRating?: number;
  showCount?: boolean;
};

export function Ratings({
  ratings,
  text,
  totalRating,
  showCount = true,
}: Readonly<TProps>) {
  return (
    <div
      style={{
        direction: "ltr",
        fontFamily: "sans-serif",
        touchAction: "none",
        maxWidth: "220px",
      }}
      className="flex items-center"
    >
      <Rating
        SVGstyle={{ display: "inline-block" }}
        fillColor="#FFA439"
        initialValue={ratings}
        allowFraction={true}
        size={21}
        readonly
      />
      <span className="pl-2 pt-[4px] text-[14px] font-medium text-[#777777]">
        {showCount && totalRating && totalRating > 0 ? (
          <span>
            ({totalRating?.toFixed(0)}
            {text && <span> {` ${text}`}</span>})
          </span>
        ) : null}
      </span>
    </div>
  );
}
