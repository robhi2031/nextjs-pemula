import {useRouter} from "next/router"

const Slug = () => {
  const router = useRouter()
  const { slug = [] } = router.query
  return (
    <div><h2>This dinamic postId { slug[0] } - { slug[1] } - { slug[2] } - { slug[3] }</h2></div>
  )
}

export default Slug