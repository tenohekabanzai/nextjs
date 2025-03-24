"use client";

import { fetchProductList } from "@/app/actions";
import { useEffect, useState } from "react";

const ClientPageExample = () => {
  const getList = async () => {
    const resp = await fetchProductList();
    setProducts(resp);
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <h1 className="">Client page server actions example</h1>
      {products && products.length > 0 ? (
        products.map((i) => (
          <li className="" key={i.id}>
            {i.title}
          </li>
        ))
      ) : (
        <>None found</>
      )}
    </div>
  );
};

export default ClientPageExample;
