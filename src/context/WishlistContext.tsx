import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

/* TYPES */
export type WishlistItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type WishlistContextType = {
  wishlist: WishlistItem[];
  toggleWishlist: (item: WishlistItem) => void;
  isInWishlist: (id: number) => boolean;
};

/* CONTEXT */
const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

/* PROVIDER */
export const WishlistProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const toggleWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.filter((p) => p.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const isInWishlist = (id: number) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

/* HOOK */
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used inside WishlistProvider");
  }
  return context;
};
