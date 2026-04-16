"use cache";
import { getAllApprovedProducts } from "@/actions_getters/product/product-getters";
import SectionHeader from "@/components/web/Common/section-header";
import ProductExplorer from "@/components/web/Product/product-explorer";
import { CompassIcon } from "lucide-react";

export const dynamic = "force-static";

export default async function ExplorePage() {
  const products = await getAllApprovedProducts();

  return (
    <div className="py-20">
      <div className="wrapper">
        <div className="mb-12">
          <SectionHeader
            title="Explore All Products"
            icon={CompassIcon}
            description="Browse and discover amazing projects from our community"
          />
        </div>
        <ProductExplorer products={products} />
      </div>
    </div>
  );
}