"use client"

import { sidebarLinks } from "@/constants";
import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Topbar() {
  const pathname = usePathname();

  return (
    <nav className="topbar">
      <a href="/">
        <Image src="/assets/logo1.svg" alt="logo" width={64} height={64} />
      </a>
      
      <div className='bottombar_container '>
          {sidebarLinks.map((link) => {
            if (link.label === "Profile") {
              const isActive =
                (pathname.includes(link.route) && link.route.length > 1) ||
                pathname === link.route;
    
              return (
                <Link
                  href={link.route}
                  key={link.label}
                  className={`bottombar_link ${isActive && "bg-dark-3"}`}
                >
                  <Image
                    src={link.imgURL}
                    alt={link.label}
                    width={24}
                    height={24}
                    className='object-contain'
                  />
    
                  <p className='text-subtle-medium text-light-1 max-sm:hidden'>
                    {link.label.split(/\s+/)[0]}
                  </p>
                </Link>
              );
            }
          })}
        </div>
    </nav>
  );
}

export default Topbar;
