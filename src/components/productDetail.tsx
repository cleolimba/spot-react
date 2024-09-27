import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Interface pour le produit détaillé
interface DetailProps {
  id: string;
  images: string;
  title: string;
  regularPrice: string;
}

function ProductDetail() {
  // État pour stocker les détails du produit
  const [product, setProduct] = useState<DetailProps | null>(null);
  // État pour gérer le chargement
  const [loading, setLoading] = useState<boolean>(false);
  // Utilisation de useParams pour récupérer l'id depuis l'URL
  const { id } = useParams<{ id: string }>();

  // Fonction asynchrone pour récupérer les détails du produit
  async function fetchProductDetail() {
    try {
      setLoading(true);
      // Requête API pour obtenir le produit spécifique
      const response = await axios.get(`https://spot-light-cleolimba.onrender.com/products/${id}`);
      const data = await response.data;

      // Mise à jour des détails du produit dans l'état
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  // Utilisation du hook useEffect pour charger les détails du produit
  useEffect(() => {
    if (id) {
      fetchProductDetail();
    }
  }, [id]);

  // Si les données sont en cours de chargement
  if (loading) {
    return <h1>Chargement...</h1>;
  }

  // Si aucun produit n'est trouvé
  if (!product) {
    return <h1>Produit introuvable</h1>;
  }

  // Affichage des détails du produit
  return (
    <div>
      <img src={product.images} alt={product.title} className="w-56 h-56" />
      <h2>{product.title}</h2>
      <p>Prix: {product.regularPrice}</p>
    </div>
  );
}

export default ProductDetail;
