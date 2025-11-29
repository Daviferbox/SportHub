import { createContext, useState } from "react";
import type { ReactNode } from "react";

type ContextType = {
  email: string;
  setEmail: (n: string) => void;
};

export const UsuarioLogadoContext = createContext<ContextType | null>(null);

export const UsuarioLogadoProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState("");

  return (
    <UsuarioLogadoContext.Provider value={{email, setEmail }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
