import { createContext, useContext, useState } from "react";

const useValue = () => {
  const [introAlreadyLoaded, setIntroAlreadyLoaded] = useState<boolean>();

  return {
    introAlreadyLoaded,
    setIntroAlreadyLoaded,
  };
};

export const IntroContext = createContext({} as ReturnType<typeof useValue>);

export function useIntroContext() {
  return useContext(IntroContext);
}

export const IntroContextProvider: React.FC<{}> = ({ children }: any) => {
  return (
    <IntroContext.Provider value={useValue()}>{children}</IntroContext.Provider>
  );
};
