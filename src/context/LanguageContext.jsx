import { createContext, useContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [langu, setLang] = useState(false);

  

  return (
    <LanguageContext.Provider value={{ langu, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  return useContext(LanguageContext);
}