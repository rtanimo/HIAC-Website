import {
  UserIcon,
  ShoppingBag,
  Camera,
  Calendar,
  GraduationCap,
  Contact,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <span className="font-bold text-2xl">HIAC</span>
          </Link>
        </div>
        <div className="space-x-2">
          <Button asChild variant="ghost">
            <Link href="/news">
              <Calendar />
              Events
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/classes">
              <GraduationCap />
              Classes
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/tournaments">
              <Target />
              Tournaments
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/about">
              <Contact />
              About
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/gallery">
              <Camera />
              Gallery
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/store">
              <ShoppingBag />
              Store
            </Link>
          </Button>
          <Button asChild>
            <Link href="/sign-on">
              <UserIcon /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
