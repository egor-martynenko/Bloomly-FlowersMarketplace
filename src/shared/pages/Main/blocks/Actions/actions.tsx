import { Link} from "@heroui/react";
import database from "../../../../../../migrations/flowersDatabase.json";
import {ProductCard} from "@/components/ProductCard/ProductCard";


export const Actions = () => {
  return (
    <div className="container mx-auto mt-10">

      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-2xl">Товары по акции</h3>
        <Link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="https://heroui.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Перейти в каталог
          <Link.Icon aria-hidden="true" />
        </Link>

      </div>

      <div className="grid grid-cols-4 gap-4 mt-4">
        {
          database.products.slice(0,4).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        }
      </div>


    </div>
  );
};