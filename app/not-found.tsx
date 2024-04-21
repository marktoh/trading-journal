import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";

import "./not-found.css";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h2>Page not found</h2>
      <div>
        <Link href="/">
          <HomeIcon />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
