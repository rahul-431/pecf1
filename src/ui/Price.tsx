type PriceType = {
  price: number;
  discount: number;
};
const Price: React.FC<PriceType> = ({ price, discount }) => {
  const netPrice = (price * discount) / 100;
  return (
    <div className="flex gap-1 items-center">
      <p className="font-semibold">NPR {netPrice}</p>
      <p className="line-through">{price}</p>
    </div>
  );
};

export default Price;
