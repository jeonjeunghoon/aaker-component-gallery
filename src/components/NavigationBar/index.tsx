import Category from "./Category";
import "./index.module.css";
import NavigationLink from "./NavigationLink";

export default function NavigationBar() {
  return (
    <nav>
      <Category name='Layout'>
        <ul>
          <li>
            <NavigationLink path='/container'>Container</NavigationLink>
          </li>
          <li>
            <NavigationLink path='/grid'>Grid</NavigationLink>
          </li>
          <li>
            <NavigationLink path='/flex'>Flex</NavigationLink>
          </li>
        </ul>
      </Category>
    </nav>
  );
}
