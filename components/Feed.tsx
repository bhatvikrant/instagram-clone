import Stories from "./Stories";
import Posts from "./Posts";

// TS INTERFACES
interface Props {}

const Feed: React.FC<Props> = (props) => {
  const {} = props;

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      {/* =============== RIGHT =============== */}
      <section>
        {/* ======== Mini Profile ======== */}
        {/* ======== Suggestions ======== */}
      </section>
    </main>
  );
};

export default Feed;
