import Image from "next/image";
import { FiSearch, FiBell, FiSun, FiMoon } from "react-icons/fi";
import theme from "../../img/theme.png"


export default function Navbar() {


  return (
    <div className="h-16 bg-surface px-6 flex items-center justify-between w-full">

      {/* LEFT: Search */}
      <div className="flex items-center gap-3 px-3 py-1 hover:border hover:border-muted rounded-xl shadow shadow-muted">
        <FiSearch className="text-muted" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-surface outline-none text-sm text-muted/90 placeholder:text-muted"
        />
      </div>

      {/* RIGHT: Icons */}
      <div className="flex items-center gap-5">
        <Image src={theme} alt="Theme icon" width={24} height={24} />
        <FiBell size={18} className="text-muted" />
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <span className="text-xs text-bg">M</span>
        </div>
      </div>

    </div>

  );
}
