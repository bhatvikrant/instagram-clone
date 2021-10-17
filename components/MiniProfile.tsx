import Image from "next/image";

// NEXT AUTH
import { signOut, useSession } from "next-auth/react";

// TS INTERFACES
interface Props {}

const MiniProfile: React.FC<Props> = (props) => {
  const {} = props;

  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <div className="h-12 w-12 border p-1 rounded-full">
        <Image
          src={session.user.image}
          alt={"Profile pic"}
          height={48}
          width={48}
          className="rounded-full object-contain"
        />
      </div>

      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session.user.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button
        className="text-blue-400 text-sm font-semibold"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
};

export default MiniProfile;
