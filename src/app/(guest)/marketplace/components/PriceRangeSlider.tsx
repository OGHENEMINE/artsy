import React, { Dispatch, SetStateAction } from "react";

const PriceRangeSlider = ({
  priceRange,
  setPriceRange,
}: {
  priceRange: {
    min: number;
    max: number;
  };
  setPriceRange: Dispatch<SetStateAction<{ min: number; max: number }>>;
}) => {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= priceRange.max) {
      setPriceRange((prev) => ({ ...prev, min: value }));
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= priceRange.min) {
      setPriceRange((prev) => ({ ...prev, max: value }));
    }
  };

  return (
    <div className="relative h-[80px]">
      {/* Background track */}
      <div className="absolute top-1/2 w-full h-0.5 bg-gray-300 rounded -translate-y-1/2" />
      {/* Active range bar */}
      <div
        className="absolute top-1/2 h-0.5 bg-indigo-500 rounded -translate-y-1/2"
        style={{
          left: `${(priceRange.min / 1000) * 100}%`,
          width: `${((priceRange.max - priceRange.min) / 1000) * 100}%`,
        }}
      />
      {/* Min input */}
      <input
        type="range"
        min="0"
        max="1000"
        value={priceRange.min}
        onChange={handleMinChange}
        className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-1 bg-transparent pointer-events-none appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:dark:border-indigo-500 [&::-webkit-slider-thumb]:rounded-full"
      />
      {/* Max input */}
      <input
        type="range"
        min="0"
        max="1000"
        value={priceRange.max}
        onChange={handleMaxChange}
        className="absolute top-1/2 -translate-y-1/2 right-0 w-full h-1 bg-transparent pointer-events-none appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:rounded-full"
      />
      {/* Value labels below */}
      <div className="absolute -top-2 mt-2 left-0 right-0 flex justify-between text-sm">
        <span>Min: ${priceRange.min}</span>
        <span>Max: ${priceRange.max}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
