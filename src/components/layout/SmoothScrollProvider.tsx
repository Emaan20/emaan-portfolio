import { ReactNode } from "react";
import useLenis from "../../hooks/useLenis";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useLenis();
  return <>{children}</>;
}
