/* eslint-disable */
import { Link, useLocation } from "react-router-dom";
// chakra imports

export const SidebarLinks = (props: { routes: RoutesType[] }): JSX.Element => {
  // Chakra color mode
  let location = useLocation();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes: RoutesType[]) => {
    return routes.map((route, index) => {
      {
        return (
          <Link key={index} to={route.layout}>
            <div
              className={`relative	mb-1.5 flex h-10  hover:cursor-pointer md:mb-3  ${
                activeRoute(route.path) === true ? "bg-orange-1000" : ""
              }`}
            >
              <li
                className="my-[3px]	 flex cursor-pointer items-center pl-8"
                key={index}
              >
                <span
                  className={`${
                    activeRoute(route.path) === true
                      ? "font-bold text-brand-500 dark:text-white"
                      : "text-gray-600 font-medium"
                  }`}
                >
                  {/* TODO: Optimize this */}

                  {route.icon && route.icon}
                  {!route.icon && <div className="w-[16px]"></div>}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(route.path) === true
                      ? "font-[700] text-navy-700 dark:text-white"
                      : "font-[700] text-gray-900"
                  }`}
                >
                  {route.name}
                </p>
                <span className="ml-[90px]">
                  {/* TODO: Optimize this */}

                  {route.rightIcon && route.rightIcon}
                </span>
              </li>
              {activeRoute(route.path) ? (
                <div className="absolute left-0 top-px h-10 w-1  bg-orange-2000 dark:bg-orange-2000" />
              ) : null}
            </div>
          </Link>
        );
      }
    });
  };
  // BRAND
  return <>{createLinks(routes)}</>;
};

export default SidebarLinks;
