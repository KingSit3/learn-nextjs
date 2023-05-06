import Blog from "@/components/Blog"
import { Metadata } from "next"
import Link from "next/link"

async function getBlog(blogId: string){
  const res:any = await fetch(`http://127.0.0.1:8090/api/collections/blog/records/${blogId}`, 
    { 
      next: {
        revalidate: 10 //Regenate page every 30 sec 
      }
    }
  )

  const data = res.json()
  return data
}

export const generateMetadata = async ({params}: any): Promise<Metadata> => {
  const blog = await getBlog(params.id)

  return {title: blog.title}
}

export default async ({params}: any) => {
  const blog = await getBlog(params.id)

  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="space-y-5">
        
        <div>
          <Link href={`/blogs`} className="hover:opacity-50 duration-200">&lt;- Return</Link>
        </div>

        <Blog blog={blog} />
      </div>
    </div>
  ) 
}