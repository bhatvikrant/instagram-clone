import Image from "next/image";

// ICONS
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

// NEXT AUTH
import { useSession } from "next-auth/react";

// TS INTERFACES
interface Props {
  id: string;
  username: string;
  profileImg: string;
  postImage: string;
  caption: string;
}

const Post: React.FC<Props> = (props) => {
  const { id, username, profileImg, postImage, caption } = props;

  const { data: session } = useSession();

  return (
    <div className="bg-white my-7 border rounded-sm relative">
      {/* ============== Feed Header ============== */}
      <div className="flex items-center p-5 border-b">
        <div className="h-12 w-12 border p-1 rounded-full mr-3">
          <Image
            src={profileImg}
            alt={username}
            height={48}
            width={48}
            className="rounded-full object-contain"
          />
        </div>
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* ============== Feed Content (img) ============== */}
      <div className="w-full relative h-96">
        {postImage && (
          <Image
            src={postImage}
            className="w-full"
            layout="fill"
            objectFit="contain"
          />
        )}
      </div>

      {/* ============== Feed Buttons ============== */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="feedBtn" />
            <ChatIcon className="feedBtn" />
            <PaperAirplaneIcon className="feedBtn rotate-45" />
          </div>
          <BookmarkIcon className="feedBtn" />
        </div>
      )}

      {/* ============== Feed Caption ============== */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>

      {/* ============== Feed Comments ============== */}

      {/* ============== Feed Comment Input ============== */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7 flex-shrink-0" />
          <input
            type="text"
            className="border-none flex-1 focus:ring-0 outline-none"
            placeholder="Add a comment..."
          />

          <button className="font-semibold text-blue-400">Post</button>
        </form>
      )}
    </div>
  );
};

export default Post;
