import Link from "next/link"

export default ({blog}: any) => {
  return (
    <div className="hover:scale-110 duration-300">
      <Link href={`/blogs/${blog.id}`} id={blog.id}>
        <div className="bg-red-500 p-2 rounded-lg">
          <h2>{blog.title}</h2>
          <h5>{blog.content}</h5>
          <p>{blog.created }</p>
        </div>
      </Link>
    </div>
  )
}
