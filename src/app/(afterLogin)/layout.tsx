import { ReactNode } from "react";

type props = { children: ReactNode };
export default function AfterLoginLayout({ children }: props) {
  return <div>{children}</div>;
}
