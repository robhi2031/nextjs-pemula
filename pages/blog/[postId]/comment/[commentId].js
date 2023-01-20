import { useRouter } from "next/router"

const CommentId = () => {
  const router = useRouter()
  const { postId, commentId} = router.query
  return (
    <div><p>This is postId { postId } and commentId { commentId }</p></div>
  )
}

export default CommentId