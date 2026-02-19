import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  product: any;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card className="hover:shadow-xl transition rounded-2xl">
      <CardContent className="p-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover rounded-xl"
        />

        <h3 className="text-lg font-semibold mt-3">
          {product.name}
        </h3>

        <p className="text-gray-500 text-sm">
          ₹{product.price}
        </p>

        <div className="flex gap-2 mt-4">
          <Button size="sm" variant="outline">
            Edit
          </Button>
          <Button size="sm" variant="destructive">
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
