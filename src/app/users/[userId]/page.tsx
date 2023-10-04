import Link from "next/link";
import { fetchUserRecord, fetchUserPosts } from "./../../../../lib/users";
import { UserPosts } from "./components";

type UserParams = {
  params: {
    userId: string;
  };
};
const UserPage = async ({ params: { userId } }: UserParams) => {
  const userData: Promise<User> = fetchUserRecord(userId);
  const userPostsData: Promise<Post[]> = fetchUserPosts(userId);
  const user = await userData;
  const userPosts = await userPostsData;

  const { name, username, email, phone } = user;

  const userRecordRender = (
    <div className="user-record--container">
      <div className="user-record__name">{name}</div>
      <div className="user-record__username">{username}</div>
      <div className="user-record__email">{email}</div>
      <div className="user-record__phone">{phone}</div>
    </div>
  );

  const userPostsRender = (
    <section className="user-posts--container">
      {userPosts.map(({ id, title, body }) => (
        <div className="user-post--container" key={id}>
          <div className="user-post__title">{title}</div>
          <div className="user-post__body">{body}</div>
        </div>
      ))}
    </section>
  );
  return (
    <section className="user--container">
      <div className="user-navigation__user">
        Back to <Link href="/users">User</Link>
      </div>
      {userRecordRender}
      {userPostsRender}
      <UserPosts />
    </section>
  );
};

export default UserPage;
