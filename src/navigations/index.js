import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navigations = () => {
  const router = useRouter();

  const handleNavigateToAbout = () => {
    router.push("/about");
  };

  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <button onClick={handleNavigateToAbout}>Go to About</button>
        </li>
        {/* เพิ่มเส้นทางอื่นๆ ที่คุณต้องการ */}
      </ul>
    </div>
  );
};

export default Navigations;
