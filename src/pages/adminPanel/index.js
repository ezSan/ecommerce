// pages/admin-panel.js
import ProductContainer from "@/components/ProductContainer";
import ProductForm from "@/components/ProductForm";

const AdminPanel = () => {
  return (
    <div>
      <ProductForm />
      <ProductContainer />
    </div>
  );
};

export default AdminPanel;
