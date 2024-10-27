import Link from "next/link";

const  home = () => {
  return (
    <div className="home">
      <ul>
        <li>
          <h1></h1>
        </li>
         <li><Link href="/about" target="_blank">About</Link></li>
         <li>
          <Link href="/contact">Contact</Link>
         </li>
         <li>
          <Link href="/service">service</Link>
         </li>
      </ul>
      <h1>Home Page</h1>
    </div>
  );
};

export default home;