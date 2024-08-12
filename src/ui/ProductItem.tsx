import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Price from "./Price";

const ProductItem: React.FC<ProductItemType> = ({
  _id,
  tag,
  colors,
  title,
  price,
  mainImage,
  discount = 10,
}) => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col gap-4 rounded-lg w-full shadow-md shadow-yellow-500 h-96">
      <img
        src={mainImage}
        alt={`${title} image`}
        className="object-cover w-full h-[70%] rounded-t-lg relative cursor-pointer hover:scale-105 transition-all"
        onClick={() => navigate(`shop/${_id}`)}
      />
      <p className="px-2 rounded-full bg-yellow-400 absolute top-2 right-2">
        {tag}
      </p>
      <div className="flex flex-col gap-1 px-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1
              className="text-lg font-semibold underline cursor-pointer"
              onClick={() => navigate(`shop/${_id}`)}
            >
              {title}
            </h1>
            <p>{colors} Colors</p>
          </div>
          <div className="flex gap-4">
            <button
              className=" hover:text-yellow-400 text-xl"
              title="Add to wishlist"
            >
              <FaRegHeart />
            </button>
            <button
              title="Add to cart"
              className=" hover:text-yellow-400 text-xl"
              onClick={() => navigate(`cart/${_id}`)}
            >
              <BsCart3 />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Price price={price} discount={discount} />
          <p className="font-bold">{discount}% OFF</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
