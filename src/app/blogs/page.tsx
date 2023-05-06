import AddBlog from "@/app/blogs/AddBlog"
import Blog from "@/components/Blog"
import next from "next/types"

async function getBlogs() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/blog/records',
    {
      cache: 'no-store',
      next: {
        revalidate: 10
      }
    }
  )
  const data = await res.json()
  return data.items as any[]
}

export default async () => {
  const blogs = await getBlogs()

  return (
    <div className="flex w-full min-h-screen justify-center items-center gap-5">

      <div className="">
        <AddBlog />
      </div>

      <div className="space-y-4">
        {blogs.map((blog) => {
          return <Blog id={blog.id} blog={blog} />
        })}
      </div>

    </div>
  )
}