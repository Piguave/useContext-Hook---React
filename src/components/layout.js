import NavBar from "./navbar";

export default function Layout({ children }) {
  const containerStyle = {
    width: "100%",
    margin: "30px auto",
  };
  return (
    <div>
      <NavBar />
      <div style={containerStyle}>{children}</div>
    </div>
  );
}
