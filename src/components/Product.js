import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
const MIN_RATING = 1;
const MAX_RATING = 5;
import { addToBasket } from '../slices/basketSlice'

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch()
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);

    const addItemToBasket = () => {

      const product = {
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
        hasPrime: hasPrime,
      };

      dispatch(addToBasket(product));

    }

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3 ">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description} </p>
      <div className="mb-5">
        <Currency quantity={price} />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 mt-5">
          <img className="w-12" src="http://links.papareact.com/fdw" />
          <p className="text-xs text-gray-500">Free Next Day delivery</p>
        </div>
      )}
      <button onClick={addItemToBasket} className="mt-auto button"> Add to Basket </button>
    </div>
  );
}

export default Product;