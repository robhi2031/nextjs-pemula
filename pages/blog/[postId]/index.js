import {useRouter} from "next/router"

const Index = () => {
  const router = useRouter()
  const { postId } = router.query
  return (
    <div><h2>This dinamic postId { postId }</h2></div>
  )
}

export default Index