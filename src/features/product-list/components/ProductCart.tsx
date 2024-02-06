import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import SimpleBadge from "@/components/Badges/SimpleBadge";
import CartContent from "./CartContent";
import ProductCount from "./ProductCount";


export default function ProductCart() {


  return (
    <Sheet>
      <SheetTrigger asChild>
      <div className="relative">
          <SimpleBadge badge="IconShoppingCart" showTitle={false} className="rounded cursor-pointer" />
          <ProductCount className="absolute top-0 right-0" />
        
                </div>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <CartContent />
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
