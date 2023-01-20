import { useRouter } from "next/router"
// import { useState, useEffect } from "react"
import useSWR from "swr"

const fetcher = ( ...args ) => fetch( ...args ).then(res => res.json())

// const ProductId = ({ product }) => {
const ProductId = () => {
  // const router = useRouter()

  /* if(router.isFallback) {
    return <div>Loading ...</div>
  } */

  /* const [name, setName] = useState("")
  const [price, setPrice] = useState("") */
  const router = useRouter()
  const { productId } = router.query

  /* useEffect(() => {
    const getProductById = async () => {
      const response = await fetch(`http://localhost:8080/products/${ productId }`)
      let data = await response.json()

      setName(data.name)
      setPrice(data.price)
    }

    getProductById()
  }, [productId]) */

  const { data, error } = useSWR(`http://localhost:8080/products/${ productId }`, fetcher)

  if(error) return <div>Failed to load</div>
  if(!data) return <div>Loading ...</div>

  return (
    <div>
      <h2>Product Detail ID: { productId }</h2>
      <p>Name: { data.name }</p>
      <p>Price: { data.price }</p>
    </div>
  )
}

export default ProductId

/* export const getStaticPaths = async () => {
  const response = await fetch(`http://localhost:8080/products?_limit=2`);
  const data = await response.json();

  const paths = data.map((item) => ({
    params: {
      productId: `${item.id}`,
    },
  }));

  return {
    paths,
    fallback: true,
  }
} */

/* export const getStaticProps = async ({ params }) => {
  const response = await fetch(`http://localhost:8080/products/${ params.productId }`)
  let data = await response.json()

  if(!data.id) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      product: data
    },
    revalidate: 1
  }
} */

/*
export const getServerSideProps = async ({ params }) => {
  const response = await fetch(`http://localhost:8080/products/${ params.productId }`)
  let data = await response.json()

  if(!data.id) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      product: data
    }
  }
}
*/
