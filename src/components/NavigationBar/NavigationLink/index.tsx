import { PropsWithChildren } from "react";

import styles from "./index.module.css";

import { Link } from "react-router-dom";

interface Props extends PropsWithChildren {
  path: string;
}

export default function NavigationLink({ path, children }: Props) {
  return (
    <Link className={styles["navigation-link"]} to={path}>
      {children}
    </Link>
  );
}
