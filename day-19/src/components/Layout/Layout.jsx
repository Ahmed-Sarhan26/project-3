import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav style={{ padding: "16px", background: "#aaa" }}>
        <Link to="/" style={{ margin: "16px" }}>Home</Link>
        <Link to="/about" style={{ margin: "16px" }}>About</Link>
        <Link to="/shop" style={{ margin: "16px" }}>Shop</Link>
      </nav>
      <main style={{ padding: "16px" }}>
        <Outlet />
      </main>
    </div>
  );
}