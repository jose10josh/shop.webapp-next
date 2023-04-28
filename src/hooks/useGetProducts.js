import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      const data = response.data.map(item => {
        return {...item, images: ["https://picsum.photos/640/640?r=2827",
        "https://picsum.photos/640/640?r=7321",
        "https://picsum.photos/640/640?r=1023"]};
      });
      setProducts(data);
    }
    fetchData();
  }, [API]);

  return products;
};

export default useGetProducts;
