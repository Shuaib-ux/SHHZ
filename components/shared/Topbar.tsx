import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav className="topbar">
      <a href="/">
        <Image src="/assets/logo1.svg" alt="logo" width={64} height={64} />
      </a>

      {/* <p className='text-heading3-bold text-light-1 max-xs:hidden'>Topicanon</p> */}

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <div className="mt-10 px-6">
            {/* <SignedIn>
          <SignOutButton redirectUrl="/sign-in">
            <div className='flex cursor-pointer gap-4 p-4'>
              <Image
                src='/assets/logout.svg'
                alt='logout'
                width={24}
                height={24}
              />

              <p className='text-light-2 max-lg:hidden'>Logout</p>
            </div>
          </SignOutButton>
        </SignedIn> */}
          </div>
        </div>

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            // elements: {
            //   organizationSwitcherTrigger: "py-2 px-4",
            // },
          }}
        />
      </div>
    </nav>
  );
}

export default Topbar;
