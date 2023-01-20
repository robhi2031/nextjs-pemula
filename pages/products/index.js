// import { useState, useEffect } from "react"
import Link from "next/link"
import useSWR from "swr"

const fetcher = ( ...args ) => fetch( ...args ).then(res => res.json())


// const Products = ({ products }) => {
const Products = () => {
  const { data, error } = useSWR('http://localhost:8080/products', fetcher)

  if(error) return <div>Failed to load</div>
  if(!data) return <div>Loading ...</div>

  // const [products, setProducts] = useState([])

  /* useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('http://localhost:8080/products')
      let data = await response.json()

      setProducts(data)
    }

    getProducts()
  }, []) */

  return (
    <div>
      <h2>This is Product List</h2>
      { data.map((item) => (
        <ul>
          <li key={ item.id }><Link href={`/products/${encodeURIComponent( item.id )}`}>{ item.name } = { item.price }</Link></li>
        </ul>
      )) }
    </div>
  )
}

export default Products

/* export const getStaticProps = async () => {
  const response = await fetch('http://localhost:8080/products')
  let data = await response.json()

  return {
    props: {
      products: data
    },
    revalidate: 1
  }
} */

/*
export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:8080/products')
  let data = await response.json()

  return {
    props: {
      products: data
    }
  }
} */