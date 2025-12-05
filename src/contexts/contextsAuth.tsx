import { createContext, useState } from "react";
import type { ReactNode } from "react";

type ContextType = {
  email: string;
  setEmail: (n: string) => void;
  isLogged: boolean;
  setIsLogged: (v: boolean) => void;
};

export const UsuarioLogadoContext = createContext<ContextType | null>(null);

export const UsuarioLogadoProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  return (
    <UsuarioLogadoContext.Provider value={{ email, setEmail, isLogged, setIsLogged }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
