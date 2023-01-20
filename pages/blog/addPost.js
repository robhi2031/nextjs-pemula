import { useRouter } from "next/router"

const addPost = () => {
  const router = useRouter()
  
  const publish = () => {
    alert('Data success save!')
    router.push('/blog')
  }

  return (
    <div>
      <h2>Add New Blog Post</h2>
      <button onClick={ publish }>Publish Post</button>
    </div>
  )
}

export default addPost