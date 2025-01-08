import { Button } from "@/components/ui/button";
import {
  EllipsisVertical,
  UserIcon,
  ShoppingBag,
  Camera,
  Calendar,
  GraduationCap,
  Contact,
  Target,
} from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <>
      <div className="flex justify-end gap-3">
        <nav className="md:flex hidden w-full max-w-screen-l gap-1">
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
        </nav>
        <nav className="md:hidden">
          <Sheet>
            <SheetTrigger className="align-middle">
              <EllipsisVertical />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start">
              <SheetTitle>Menu</SheetTitle>
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
              <SheetDescription></SheetDescription>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </>
  );
};

export default Menu;
