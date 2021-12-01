// COMPONENTS
import Story from "./Story";

// NEXT AUTH
import { useSession } from "next-auth/react";

// STATIC DATA
import { fakeUsers } from "../static-data/fakeUsers.data";

const Stories: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {fakeUsers.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
