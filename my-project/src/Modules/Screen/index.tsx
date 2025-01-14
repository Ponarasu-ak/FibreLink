import { Route, Routes, useLocation } from "react-router-dom";
import {
  Cart,
  ContactUs,
  Home,
  NavigationBar,
  Pricing,
  Shop,
  WhatWeOffer,
} from "../Components";
import { Headers } from "../../Utils";

const Screen = () => {
  //   const stringToRemove = "/item";

  const { pathname } = useLocation();

  const updatedPathname = pathname.replace("/", "");

  console.log(updatedPathname);

  return (
    <div className="website-container">
      <NavigationBar />
      <Routes>
        {/* {Headers.map((ele, index) => (
          <Route key={index} path={ele.route} element={ele.component} />
        ))} */}

        <Route path="/" element={<Home />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/WhatWeOffer" element={<WhatWeOffer />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export { Screen };
