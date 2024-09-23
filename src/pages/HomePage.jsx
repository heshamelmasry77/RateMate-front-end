import { CurrencyDollarIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import CurrencyConverter from "../components/CurrencyConverter";

function HomePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <CurrencyDollarIcon className="h-10 w-10 text-indigo-600" />
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome to RateMate
          </h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          <ChartBarIcon className="h-6 w-6 text-indigo-600" />
          <p className="text-lg text-gray-600">
            Convert currencies and view historical exchange rates.
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default HomePage;
