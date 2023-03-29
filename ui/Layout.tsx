import { FC, ReactNode } from "react";
import { Footer } from "./footer";
import { Nav } from "./nav";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Nav />
    <main css={{ maxWidth: "1200px", margin: "0px auto" }}>{children}</main>
    <Footer />
  </>
);
