"use cache"

import { ArrowUpRightIcon, StarIcon } from "lucide-react"
import SectionHeader from "../Common/section-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getFeaturedProducts } from "@/actions_getters/product/product-getters"
import ProductCard from "../Product/Product-card"


const FeaturedSection = async() => {

  const featuredProducts = await getFeaturedProducts()

  console.log("Featured products: ", featuredProducts)
  return (
    <div>
       <section className="py-20 px-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Featured Today"
            icon={StarIcon}
            description="Top picks from our community this week"
          />
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/explore">
              View All <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default FeaturedSection
