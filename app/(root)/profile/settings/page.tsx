import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const SettingsPage: React.FC = () => {
  // Add your settings page content here

  return (
    <div>
      <h1 className="head-text">Settings Page</h1>
      <div className="mt-6 px-2">
        <div className="flex cursor-pointer gap-4 p-4">
          <Image src="/assets/bell.svg" alt="bell" width={24} height={24} />

          <p className="text-light-2">Notifications</p>
        </div>
        <div className="flex cursor-pointer gap-4 p-4">
          <Image src="/assets/about.svg" alt="about" width={24} height={24} />

          <p className="text-light-2">About</p>
        </div>
        <div className="flex cursor-pointer gap-4 p-4">
          <Image src="/assets/privacy.svg" alt="privacy" width={24} height={24} />

          <p className="text-light-2">Privacy</p>
        </div>
        <div className="flex cursor-pointer gap-4 p-4">
          <Image src="/assets/help.svg" alt="help" width={24} height={24} />

          <p className="text-light-2">Help</p>
        </div>

        <SignedIn>
          <SignOutButton redirectUrl="/sign-in">
            <div className="flex cursor-pointer gap-4 p-4">
              <Image
                src="/assets/logout.svg"
                alt="logout"
                width={24}
                height={24}
              />

              <p className="text-light-2">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
};

export default SettingsPage;
