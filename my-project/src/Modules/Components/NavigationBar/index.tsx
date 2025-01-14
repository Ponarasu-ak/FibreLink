import { useState } from "react";
import { StyledBadge } from "../../../Components/StyledBadge";
import { Headers } from "../../../Utils";
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const { pathname } = useLocation();

  // const updatedPathname = pathname.replace("/", "");

  console.log(pathname, "pathname");
  const [border, setBorder] = useState(Headers);

  function isBorder(val: number) {
    let updated: any = border.map((el, index) => ({
      ...el,
      isClicked: index === val,
    }));

    console.log(updated, "updated");

    setBorder(updated);
  }

  function HideBroder(val: number) {
    let updated: any = border.map((el) => ({
      ...el,
      isClicked: false,
    }));
    setBorder(updated);
  }

  return (
    <div className="w-100 h-[80px] flex justify-between px-20 py-6">
      <div className="font-bold text-primary text-2xl">FIBRELINK</div>
      <div className="flex justify-between gap-12 font-medium">
        {border.map((el, index) => {
          console.log(el.route, "map");

          return (
            <Link key={index} to={el.route}>
              <div
                className={`cursor-pointer ${
                  el.isClicked && "border-b-2 border-b-blue-400"
                } `}
                onClick={() => isBorder(index)}
              >
                {el.title}
              </div>
            </Link>
          );
        })}

        <Link to="Cart">
          <div onClick={() => HideBroder(5)} className="cursor-pointer">
            <StyledBadge />
          </div>
        </Link>
      </div>
    </div>
  );
};

export { NavigationBar };
