import clsx from "clsx";
import type { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    clsx({
      "text-black/30": !isActive,
      "text-black/80": isActive,
    });

  return (
    <header>
      <Container>
        <nav className="px-2 py-4 flex justify-between items-center">
          <div>
            <Link
              to="/"
              className="font-(family-name:--font-accent) text-(--color-primary) text-3xl"
            >
              conduit
            </Link>
          </div>
          <ul className="pl-0 mb-0 list-none flex gap-3 pt-[0.425rem] pb-[0.425rem] font-(family-name:--font-basic) text-xl">
            <li className="ml-1">
              <NavLink to="/" className={navLinkClasses}>
                Home
              </NavLink>
            </li>
            <li className="ml-1">
              <NavLink to="/sign-in" className={navLinkClasses}>
                Sign in
              </NavLink>
            </li>
            <li className="ml-1">
              <NavLink to="/sign-up" className={navLinkClasses}>
                Sign up
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
