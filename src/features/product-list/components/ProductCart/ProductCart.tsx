import { Button } from "@/components/ShadcnUi/Button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ShadcnUi/Sheet";
import SimpleBadge from "@/components/Badges/SimpleBadge";
import CartContent from "../CartContent/CartContent";
import ProductCount from "../ProductCount/ProductCount";
import { cn } from "@/utils/utils";

interface IProductCart {
  className?: string;
}

export default function ProductCart({ className }: IProductCart) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className={cn("relative", className)}>
          <SimpleBadge
            badge="cart"
            showTitle={false}
            className="rounded cursor-pointer"
          />
          <ProductCount className="absolute top-0 right-0" />
        </div>
      </SheetTrigger>
      <SheetContent className="overflow-auto p-0">
        <SheetHeader>
          <SheetTitle className="p-4 pb-2">Cart</SheetTitle>
        </SheetHeader>
        <CartContent />
        <SheetFooter className="p-4 pt-0">
          <SheetClose asChild>
            <Button type="submit">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
