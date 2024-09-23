import CurrencyConverter from "../components/CurrencyConverter";

function HomePage() {
  return (
    <div>
      <h1>Welcome to RateMate</h1>
      <p>Convert currencies and view history</p>
      <CurrencyConverter />
    </div>
  );
}

export default HomePage;
