'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default () => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const router = useRouter()

  const addNewBlog = async () => {
    await fetch('http://127.0.0.1:8090/api/collections/blog/records', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        content
      })
    })

    setTitle('')
    setContent('')

    router.refresh()
  } 
  
  return (
    <div className="space-y-3">

      {/* Title Input Form */}
      <div className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} placeholder="Input Your Title here~" onChange={e => setTitle(e.target.value)} className="text-black p-1 rounded-md outline-none focus:outline-none"/>
      </div>
      {/* End Title Input Form */}

      {/* Content Input Form */}
      <div className="flex flex-col">
        <label htmlFor="content">Content</label>
        <input type="text" id="content" value={content} placeholder="Input Your Content here~" onChange={e => setContent(e.target.value)} className="text-black p-1 rounded-md outline-none focus:outline-none"/>
      </div>
      {/* End Content Input Form */}

      <div className="flex w-full justify-end">
        <button onClick={addNewBlog} className="bg-blue-500 hover:bg-600 duration-300 p-1 px-4 rounded">Submit</button>
      </div>

    </div>
  )
}