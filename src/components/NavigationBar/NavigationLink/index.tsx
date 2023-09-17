import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import "./index.module.css";

interface Props extends PropsWithChildren {
  path: string;
}

export default function NavigationLink({ path, children }: Props) {
  return <Link to={path}>{children}</Link>;
}
