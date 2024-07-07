import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export function Hero() {
  return (
    <section className="flex items-center justify-center text-center bg-cover bg-center h-screen bg-hero-image">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Delicious Food Delivered to Your Doorstep
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8">
          Experience the best food from the comfort of your home.
        </p>
        <Link href="/menu" className="mt-4 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 inline-flex items-center">
         
            Order Now <HiArrowRight className="ml-2" />

        </Link>
      </div>
    </section>
  );
}
