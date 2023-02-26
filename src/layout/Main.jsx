import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
};

// const Main = () => {
//   return (
//     <div>
//       <Header />
//       <Home />
//       {/* <Contact/> */}
//       <Footer />
//     </div>
//   );
// };

export default Main;
