import {Card, Link} from "@heroui/react";
import {ProductCardProps} from "@/types/product";
import {FC} from "react";
import Image from "next/image";

export const ProductCard:FC<ProductCardProps> = (product) => {
  return (
    <Card
      className="relative w-full h-[420px] overflow-hidden flex flex-col shadow-lg gap-0 hover:shadow-xl transition-shadow duration-300 p-0"
    >
      <div className="relative w-full h-[180px] flex-shrink-0">
        <Image
          src={product.img}
          alt={product.title}
          fill
          className="object-cover object-top transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 280px"
          priority={product.id === "flower-001"}
        />

        {product.discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            -{product.discount}%
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 z-10">
          ⭐ {product.rating}
        </div>
      </div>

      <div className="flex flex-col flex-grow p-2">
        <div className="mb-3">
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
            {product.title}
          </h2>

          <div className="flex items-center gap-2 mt-1">
            {product.discount > 0 ? (
              <>
            <span className="text-lg font-medium text-gray-900">
              {Math.round(product.price * (1 - product.discount / 100))} ₽
            </span>
                <span className="text-sm text-gray-500 line-through">
              {product.price} ₽
            </span>
              </>
            ) : (
              <span className="text-lg font-medium  text-gray-900">
            {product.price} ₽
          </span>
            )}
          </div>
        </div>

        <p className="text-sm  h-16 text-gray-600 line-clamp-3 mb-4 flex-grow overflow-y-hidden">
          {product.description}
        </p>

        <button
          className="mt-auto bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-lg transition-colors duration-200 mb-2"
        >
          В корзину
        </button>

        <Link
          href="/"
          target="_blank"
          className="mx-auto text-gray-500 font-light text-sm flex items-center"
        >
          <span>Подробнее</span>
          <Link.Icon aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
};