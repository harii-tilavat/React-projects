import logoImg from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <header id="header">
      <img src={logoImg} alt="" />
      <h1>Investment Calculater</h1>
    </header>
  );
}
