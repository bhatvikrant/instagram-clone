// FAKER
import faker from "faker";

// COMPONENTS
import Story from "./Story";

// NEXT AUTH
import { useSession } from "next-auth/react";

// TS INTERFACES
interface Props {}

// STATIC FAKE DATA
const suggestions = [...Array(20)].map((_, idx) => ({
  ...faker.helpers.contextualCard(),
  id: idx,
}));

const Stories: React.FC<Props> = (props) => {
  const {} = props;

  const { data: session } = useSession();

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile) => (
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
