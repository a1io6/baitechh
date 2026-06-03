// context/NavContext.js
'use client';
import { createContext, useContext, useState } from 'react';

const NavContext = createContext(null);

export function NavProvider({ children }) {
  const [activeCategoryKey, setActiveCategoryKey] = useState(null);
  return (
    <NavContext.Provider value={{ activeCategoryKey, setActiveCategoryKey }}>
      {children}
    </NavContext.Provider>
  );
}

export const useNav = () => useContext(NavContext);