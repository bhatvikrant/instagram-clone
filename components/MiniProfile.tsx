import Image from "next/image";

// TS INTERFACES
interface Props {}

const MiniProfile: React.FC<Props> = (props) => {
  const {} = props;

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <div className="h-12 w-12 border p-1 rounded-full">
        <Image
          src={"https://avatars.githubusercontent.com/u/50735025?v=4"}
          alt={"Profile pic"}
          height={48}
          width={48}
          className="rounded-full object-contain"
        />
      </div>

      <div className="flex-1 mx-4">
        <h2 className="font-bold">username</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
