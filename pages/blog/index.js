// import { useEffect } from "react"
import { useRouter } from "next/router"

const index = () => {
  const router = useRouter()
  const { page, limit } = router.query
  // var TitlePage = 'This is blog pages'

  return (
    <div><h2>This is blog page: { page } and limit: { limit }</h2></div>
  )
}

export default index