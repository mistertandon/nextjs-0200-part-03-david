import Link from "next/link";
import { Suspense } from "react";
import { fetchUserRecord, fetchUserPosts } from "./../../../../lib/users";
import { UserPosts, User } from "./components";

type UserParams = {
  params: {
    userId: string;
  };
};
const UserPage = async ({ params: { userId } }: UserParams) => {
  const userPromise: Promise<User> = fetchUserRecord(userId);
  const userPostsPromise: Promise<Post[]> = fetchUserPosts(userId);

  return (
    <section className="user--container">
      <div className="user-navigation__user">
        Back to <Link href="/users">Users</Link>
      </div>
      <Suspense fallback={<h3>User Loading...</h3>}>
        <User userPromise={userPromise} />
      </Suspense>
      <Suspense fallback={<h3>User posts Loading...</h3>}>
        <UserPosts
          userPromise={userPromise}
          userPostsPromise={userPostsPromise}
        />
      </Suspense>
    </section>
  );
};

export default UserPage;
