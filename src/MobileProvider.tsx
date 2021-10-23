import React, { createContext, useContext, useState, useEffect } from "react";

const MOBILE_WIDTH = 400; // This is the bootstrap 'lg' breakpoint.

type MobileContextType = {
  isMobile: () => boolean;
};

const MobileContext = createContext<MobileContextType>({
  isMobile: () => false,
});

export const MobileProvider: React.FC = ({ children }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const mobile = { isMobile: () => width <= MOBILE_WIDTH };

  return (
    <MobileContext.Provider value={mobile}>{children}</MobileContext.Provider>
  );
};

export const useIsMobile = () => {
  return useContext(MobileContext);
};
