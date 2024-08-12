import { HiMiniArrowLongRight } from "react-icons/hi2";
import ProductItem from "../ui/ProductItem";
import Mid from "../ui/Mid";

const productList: ProductItemType[] = [
  {
    _id: "p1",
    title: "Leather chair",
    price: 1500,
    mainImage: "sofa.png",
    tag: "Best Price",
    colors: 5,
  },
  {
    _id: "p2",
    title: "Sofa",
    price: 22500,
    mainImage: "sofa.png",
    tag: "Top Rated",
    colors: 3,
  },
  {
    _id: "p3",
    title: "Study Table",
    price: 2950,
    mainImage: "sofa.png",
    tag: "Best Sale",
    colors: 7,
  },
  {
    _id: "p4",
    title: "Low oak stool",
    price: 2200,
    mainImage: "sofa.png",
    tag: "Best Price",
    colors: 5,
  },
  {
    _id: "p5",
    title: "Lamp",
    price: 2500,
    mainImage: "sofa.png",
    tag: "Best Price",
    colors: 5,
  },
  {
    _id: "p6",
    title: "Wally light",
    price: 1699,
    mainImage: "sofa.png",
    tag: "Best Price",
    colors: 2,
  },
];
const Home = () => {
  return (
    <main className="flex flex-col w-full bg-white gap-5">
      <section className="py-5 px-4 md:px-8 lg:px-12 w-full md:h-screen flex flex-col-reverse md:flex-row md:justify-around md:items-center gap-6 bg-gradient-to-r from-yellow-100 to-indigo-100">
        <div className="flex flex-col md:gap-4 gap-2 items-start">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold">
            Summer Collection
          </h2>
          <h1 className="lg:text-6xl md:text-5xl text-4xl uppercase font-bold">
            sofa 50% off{" "}
          </h1>
          <button className="px-4 py-2 w-60 rounded-full bg-black text-white font-bold">
            Buy Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full md:w-[50%] h-[60%] object-cover rounded-xl"
        />
      </section>
      <section className="px-4 md:px-8 lg:px-12 flex flex-col gap-4 my-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Our New collections</h1>
          <button className="flex space-x-1 items-center bg-yellow-500 px-2 rounded text-xl hover:bg-yellow-600">
            <span>View all</span>
            <span>
              <HiMiniArrowLongRight />
            </span>
          </button>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {productList.map((item) => (
            <ProductItem
              _id={item._id}
              title={item.title}
              mainImage={item.mainImage}
              colors={item.colors}
              price={item.price}
              tag={item.tag}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-4 px-4 md:px-8 lg:px-12 py-4 md:justify-around bg-gray-50">
        <Mid />
      </section>
    </main>
  );
};

export default Home;
