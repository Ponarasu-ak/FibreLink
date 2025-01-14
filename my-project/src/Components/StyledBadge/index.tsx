interface StyledBadgeProps {
  value?: number;
}

const StyledBadge = ({ value }: StyledBadgeProps) => {
  return (
    <div className="relative">
      <div
        className={` ${
          value &&
          "h-[20px] w-[20px]  bg-blue-500 absolute left-4 bottom-4 rounded-xl text-white text-[12px] flex justify-center items-center"
        }`}
      >
        {value}
      </div>
      {value ? (
        <i className="fa-solid fa-cart-shopping"></i>
      ) : (
        <i className="fa-solid fa-cart-plus"></i>
      )}
    </div>
  );
};

export { StyledBadge };
