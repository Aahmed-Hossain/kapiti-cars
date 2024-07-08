
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useAllProducts = () => {

  const {
    data: allProducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/products`
      );
      return res.data;
    },
  });
  return [
    allProducts,
    refetch,
    isLoading,
  ];
};

export default useAllProducts;
