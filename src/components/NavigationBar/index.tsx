import styles from "./index.module.css";

import Category from "./Category";

import NavigationLink from "./NavigationLink";

export default function NavigationBar() {
  return (
    <nav className={styles["navigation-bar"]}>
      <Category name='Layout'>
        <ul>
          <li>
            <NavigationLink path='component/layout/container'>
              Container
            </NavigationLink>
          </li>
          <li>
            <NavigationLink path='component/layout/grid'>Grid</NavigationLink>
          </li>
          <li>
            <NavigationLink path='component/layout/flex'>Flex</NavigationLink>
          </li>
        </ul>
      </Category>
    </nav>
  );
}
