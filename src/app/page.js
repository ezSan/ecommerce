import Image from "next/image";

/* import Login from "@/components/Login"; */
import MainLayout from "./layouts/MainLayout";
import ProductContainer from "@/components/ProductContainer";

export default function Home() {
  return (
    <main>
      <MainLayout>
        <ProductContainer />
      </MainLayout>
    </main>
  );
}
