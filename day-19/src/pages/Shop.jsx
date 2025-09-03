import { Outlet, Link } from "react-router-dom";

export default function Shop() {
  return (
    <div>
      <h1>Shop</h1>
      <nav style={{ marginBottom: "16px" }}>
        <Link to="/shop" style={{ margin: "16px" }}>All Products</Link>
        <Link to="/shop/mens" style={{ margin: "16px" }}>Mens</Link>
        <Link to="/shop/womens" style={{ margin: "16px" }}>Womens</Link>
      </nav>
      <Outlet />
    </div>
  )
}