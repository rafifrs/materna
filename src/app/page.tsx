import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { NavbarUser } from "~/app/_components/user/navbar-user";
import TaskItem from "./_components/user/daily-task";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <div>
      <div className="space-y-3 p-4">
        <TaskItem text="Daily Task 1" />
        <TaskItem text="Daily Task 2" />
        <TaskItem text="Daily Task 3" />
      </div>
      <NavbarUser />
    </div>
  );
}
