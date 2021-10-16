import Image from "next/image";

// TS INTERFACES
interface Props {
  img: string;
  username: string;
}

const Story: React.FC<Props> = (props) => {
  const { img, username } = props;

  return (
    <div>
      <div className="h-14 w-14 rounded-full p-0.5 border-red-500 border-2 object-contain hover:scale-110 transition transform duration-200 ease-out">
        <Image
          src={img}
          alt={`${username}'s story'`}
          height={50}
          width={50}
          className="rounded-full cursor-pointer"
        />
      </div>
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
};

export default Story;
