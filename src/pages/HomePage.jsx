import CurrencyConverter from "../components/CurrencyConverter";

function HomePage() {
  return (
    <div className={"container mx-auto py-4"}>
      <h1>Welcome to RateMate</h1>
      <p>Convert currencies and view history</p>
      <CurrencyConverter />
    </div>
  );
}

export default HomePage;
