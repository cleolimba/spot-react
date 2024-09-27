import { useEffect, useState } from "react";
import Navbar from "./navbar";
import axios from "axios";
import Footer from "./footer";
import { Link } from "react-router-dom";

interface ProduitProps {
    id: string;
    images: string;
    title: string;
    regularPrice:string;

  }
  


function ProductList() {

  const [produits, setProduit] = useState<ProduitProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function ProduitsCLV() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://spot-light-cleolimba.onrender.com/products"
      );

      const data = await response.data;

      setProduit(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      return <h1>Error</h1>;
    }
  }


  useEffect(function () {
      ProduitsCLV();
  }, []);
    if (loading) {
      return <h1>Loading...</h1>;
    }
  return (

    <div>
      <Navbar />

      <ul className="flex flex-row gap-5 flex-wrap justify-center mt-10 pl-[10rem]">
        {produits.map((produit) => (
          <li key={produit.id} id={produit.id}>
            <Link to={`/products/${produit.id}`}><img src={produit.images} alt="" className="w-56 h-56"/></Link> 
            <p>{produit.title}</p>
            <p>{produit.regularPrice}</p>

          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );

}

export default ProductList;
