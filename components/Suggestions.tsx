import Image from "next/image";

// STATIC DATA
import { fakeUsers } from "../static-data/fakeUsers.data";

const Suggestions: React.FC = () => {
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {fakeUsers.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <div className="h-12 w-12 border p-1 rounded-full">
            <Image
              src={profile.avatar}
              height={40}
              width={40}
              alt={profile.name}
              className="rounded-full"
            />
          </div>

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-gray-400 text-xs">
              Works at {profile.company.name}
            </h3>
          </div>

          <button className="text-blue-400 text-sm font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
