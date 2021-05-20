import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-200 ">
      <Head>
        <title>Amazon</title>
      </Head>
      {/* Header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto lg:px-20">
        {/* Banner */}
        <Banner />

        {/* Feed */}
        <ProductFeed products={products} />
      </main>
      {console.log(products)}
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products
    },
  }
}

// https://fakestoreapi.com/products