import Link from "next/link";
import { fetchUserRecord } from "./../../../../lib/users";
// import { fetchUserRecord } from "@/lib/users";

type UserParams = {
  params: {
    userId: string;
  };
};
const UserPage = async ({ params: { userId } }: UserParams) => {
  const userData: Promise<User> = fetchUserRecord(userId);
  const user = await userData;

  const { name, username, email, phone } = user;

  const userRecordRender = (
    <div className="user-record--container">
      <div>{name}</div>
      <div>{username}</div>
      <div>{email}</div>
      <div>{phone}</div>
    </div>
  );
  return (
    <section>
      <div>
        Back to <Link href="/users">User</Link>
      </div>
      {userRecordRender}
    </section>
  );
};

export default UserPage;
