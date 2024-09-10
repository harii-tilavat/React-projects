// eslint-disable-next-line react/prop-types
export default function TabButton({ children, isSelected, ...props }) {
  console.log("TAB BUTTON CALLED !");
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}
