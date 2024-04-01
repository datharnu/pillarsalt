import { StaticImageData } from "next/image";
import Home from "../components/icons/HomeIcon";
import Profile from "../components/icons/ProfileIcon";
import Wallet from "../components/icons/WalletIcon";
import Branch from "../components/icons/BranchIcon";
import Security from "../components/icons/SecurityIcon";
import Support from "../components/icons/SupportIcon";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Navlink = {
  name: string;
  href: string;
  id: number;
  icon: React.ReactNode;
};

export const Navlinks: Navlink[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    id: 1,
    icon: <Home />,
  },
  {
    name: "Branch",
    href: "/dashboard/branch",
    id: 2,
    icon: <Branch />,
  },
  {
    name: "Wallet",
    href: "/dashboard/wallet",
    id: 3,
    icon: <Wallet />,
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    id: 4,
    icon: <Profile />,
  },
  {
    name: "Security",
    href: "/dashboard/security",
    id: 5,
    icon: <Security />,
  },
  {
    name: "Support",
    href: "/dashboard/support",
    id: 6,
    icon: <Support />,
  },
];
