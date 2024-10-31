"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { IoClose } from "react-icons/io5";
import { useCart } from "@/context/cart-context";
import Image from "next/image";

type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cartItems, cartCount } = useCart();

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 z-50" />

        <Dialog.Content className="fixed text-blue left-1/2 w-full max-w-xs md:top-1/2 md:w-96 lg:w-[50%] lg:max-w-2xl lg:h-[60%] -translate-x-1/2 md:-translate-y-1/2 bg-white rounded-lg p-4 md:p-6 shadow-lg z-50 transition-transform transform scale-100 duration-300 ease-out">
          <div className="w-full flex justify-between items-center mb-6">
            <Dialog.Title className="text-lg md:text-2xl font-bold text-center w-full">
              Varukorgen
            </Dialog.Title>
            <Dialog.Close asChild>
              <button onClick={onClose} className="absolute right-6 top-6">
                <IoClose className="text-2xl md:text-3xl" />
              </button>
            </Dialog.Close>
          </div>

          {/* Cart Items */}
          <div className="text-center w-full">
            {cartCount === 0 ? (
              <p className="text-base md:text-lg lg:text-xl">
                Varukorgen är tom
              </p>
            ) : (
              <div className="space-y-6 w-full">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={164}
                      className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover rounded mr-4"
                    />
                    <div className="flex-1 text-left">
                      <p className="font-semibold text-lg md:text-xl">
                        {item.name}
                      </p>
                      <p className="font-bold">{item.price} SEK</p>
                      <p className=" font-normal">Antal: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
