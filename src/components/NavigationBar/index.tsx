import Category from "./Category";
import "./index.module.css";
import NavigationLink from "./NavigationLink";

export default function NavigationBar() {
  return (
    <nav>
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
