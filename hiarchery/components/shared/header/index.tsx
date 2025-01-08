import { ShoppingCart, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <span className="font-bold text-2xl">{APP_NAME}</span>
          </Link>
        </div>
        <div className="space-x-2">
          <Button asChild variant="ghost">
            <Link href="/events">Events</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/classes">Classes</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/tournaments">Tournaments</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/about">About</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/gallery">Gallery</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/store">Store</Link>
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
