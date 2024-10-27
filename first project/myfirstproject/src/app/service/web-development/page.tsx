import React from "react";
import Link from "next/link";

const servicepage = () => {
   return (
    <div>
        <h1> This is service page</h1> 
        <ul>
           <li>
            <Link href="/web-development/service">web development </Link>
          </li>
    </ul>
    </div>
   )
}
export default servicepage;