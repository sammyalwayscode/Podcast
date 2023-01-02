import { createContext, PropsWithChildren, useState } from "react";

interface toggle {
  mobileToggle: boolean;
  setMobileToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<toggle | null>(null);

export const GlobalState: React.FC<PropsWithChildren> = ({ children }) => {
  const [mobileToggle, setMobileToggle] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ mobileToggle, setMobileToggle }}>
      {children}
    </GlobalContext.Provider>
  );
};
