import Image from "next/image";

// ICONS
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

// NEXT AUTH
import { signIn, signOut, useSession } from "next-auth/react";

// TS INTERFACES
interface Props {}

const Header: React.FC<Props> = (props) => {
  const {} = props;

  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="shadow border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* =============== LEFT =============== */}
        <div className="relative w-24 hidden lg:inline-grid cursor-pointer">
          <Image src="/full-logo.webp" layout="fill" objectFit="contain" />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image src="/logo.png" layout="fill" objectFit="contain" />
        </div>
        {/* =============== MIDDLE =============== */}
        <div className="max-w-xs">
          <div className="mt-1 relative p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
            />
          </div>
        </div>
        {/* =============== RIGHT =============== */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />

                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full grid place-items-center animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <div
                className="grid place-items-center cursor-pointer"
                onClick={() => signOut()}
              >
                <Image
                  src={session.user?.image || "/default-user.png"}
                  height="40"
                  width="40"
                  objectFit="cover"
                  className="rounded-full"
                  alt="Profile pic"
                />
              </div>
            </>
          ) : (
            <button onClick={() => signIn()}>Sign in</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
