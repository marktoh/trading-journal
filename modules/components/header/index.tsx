import { Brand } from "./brand";
import { UserInfo } from "./user-info";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <Brand displayName="The Trading Journal" />
      <UserInfo displayName="Mark Toh" email="marktohtk@gmail.com" />
    </header>
  );
};

export { Header };
