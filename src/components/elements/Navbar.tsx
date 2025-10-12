
const navItems = [
    {href: "#", text: "HOME"},
    {href: "#collections", text: "COLLECTIONS"},
    {href: "#classics", text: "CLASSICS"},
    {href: "#disclaimer", text:"DISCLAIMER"}
]

export const Navbar = () => {
     return (
    <header className="fixed inset-x-0 top-0 z-50 py-4 bg-white">
      <nav className="relative flex justify-between items-center">
        <img className="md:h-7 h-5 mx-4 xl:h-9" src="src/assets/logonike.png" alt="" />
        <ul className="flex mx-3 gap-5 text-[12px] md:text-[16px] xl:text-[20px] xl:gap-7">
          {navItems.map((item) => (
            <li className="text-black" key={item.text}>
              <a href={item.href} className="hover:text-gray-500 hover:opacity-45 hover:transition duration-200 ease-in">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};