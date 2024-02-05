import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative isolate px-6 pt-14 lg:px-8 heroSection">
        <div className="mx-auto max-w-2xl py-5 sm:py-5 lg:py-5 backdrop-blur-md pt-4">
        
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="font-medium">What's Facebook?Did you mean{" "}</span> 
              <span className="foodbook text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-sky-800 "> Foodbook </span>?
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover a world of flavors with Foodbook. Explore recipes, share
              your culinary creations, and connect with fellow food enthusiasts.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/addRecipe"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add a receipe
              </a>
              <a
                href="/recipes"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Browse our archives <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}