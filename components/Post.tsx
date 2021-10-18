import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";

// DAYJS
import dayjs from "dayjs";
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

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

// FIREBASE
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot,
  serverTimestamp,
  setDoc,
} from "@firebase/firestore";
import { db } from "../firebase";

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

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);
  const [likes, setLikes] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
  const [hasLiked, setHasLiked] = useState(false);

  // useEffect to fetch comments
  useEffect(
    () =>
      // implicit return so that it cleansup automatically
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => {
          setComments(snapshot.docs);
        }
      ),
    [db, id]
  );

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user.uid) !== -1
      ),
    [likes, session]
  );

  // useEffect to fetch likes
  useEffect(
    () =>
      // implicit return so that it cleansup automatically
      onSnapshot(query(collection(db, "posts", id, "likes")), (snapshot) => {
        setLikes(snapshot.docs);
      }),
    [db, id]
  );

  const createComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session?.user.username,
      userImage: session?.user.image,
      timestamp: serverTimestamp(),
    });
  };

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(
        doc(db, "posts", id, "likes", session?.user.uid as string)
      );
    } else {
      await setDoc(doc(db, "posts", id, "likes", session?.user.uid as string), {
        username: session?.user.username,
      });
    }
  };

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
            {hasLiked ? (
              <HeartIconFilled className="feedBtn" onClick={likePost} />
            ) : (
              <HeartIcon className="feedBtn" onClick={likePost} />
            )}
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
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div className="flex items-center space-x-2 mb-3" key={comment.id}>
              <Image
                src={comment.data().userImage}
                alt={comment.data().username}
                height={30}
                width={30}
                className="rounded-full"
              />

              <p className="flex-1 text-sm">
                <span className="font-bold">{comment.data().username}</span>{" "}
                {comment.data().comment}
              </p>
              <p className="pr-5 text-xs">
                {dayjs(comment.data().timestamp.toDate()).fromNow()}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* ============== Feed Comment Input ============== */}
      {session && (
        <form
          className="flex items-center p-4"
          onSubmit={(e) => createComment(e)}
        >
          <EmojiHappyIcon className="h-7 flex-shrink-0" />
          <input
            type="text"
            className="border-none flex-1 focus:ring-0 outline-none"
            placeholder="Add a comment..."
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />

          <button
            className="font-semibold text-blue-400"
            type="submit"
            disabled={!comment.trim()}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
