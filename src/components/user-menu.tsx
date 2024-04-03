import { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

import { useTheme } from "next-themes";

interface ContainerCardProps {
  children: ReactNode;
}

export const UserMenu: React.FC<ContainerCardProps> = ({ children }) => {
  const { setTheme } = useTheme();
  return (
    <div className="flex items-center justify-between">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-fit">
          <Link href="/items">
            <DropdownMenuItem>all Items</DropdownMenuItem>
          </Link>
          <Link href="/stratagems">
            <DropdownMenuItem>all Stratagems</DropdownMenuItem>
          </Link>
          <Link href="/faq">
            <DropdownMenuItem>FAQ</DropdownMenuItem>
          </Link>
          <Link href="/leaderboard">
            <DropdownMenuItem>Leaderboard</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Resources</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Privacy Policy</DropdownMenuItem>
              <DropdownMenuItem>Credits</DropdownMenuItem>
              <DropdownMenuItem>Contact</DropdownMenuItem>
              <DropdownMenuItem>About</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span className="sr-only">Toggle theme</span>
              <p>Themes</p>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
