import NavBar from "@/components/NavBar";
import NewPostForm from "@/components/NewPostForm";
import PostsList from "@/components/PostsList";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center gap-y-10">
        <NewPostForm />
        <PostsList />
      </div>
    </main>
  );
}
