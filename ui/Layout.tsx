import { FC, ReactNode } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <main css={{ maxWidth: "1200px", margin: "4rem auto" }}>{children}</main>
  </>
);
