'use client';
import { useState } from 'react';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { useExperience } from './ExperienceProvider';
import { money } from '@/data/menu';
export function AddToOrder({ id, price }: { id: string; price: number }) {
  const [quantity, setQuantity] = useState(1);
  const { add } = useExperience();
  return (
    <>
      <div className="order-actions">
        <div className="quantity">
          <button
            disabled={quantity === 1}
            aria-label="Decrease quantity"
            onClick={() => setQuantity(quantity - 1)}
          >
            <Minus size={17} />
          </button>
          <output aria-label="Quantity">{quantity}</output>
          <button
            disabled={quantity === 20}
            aria-label="Increase quantity"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus size={17} />
          </button>
        </div>
        <button className="button" onClick={() => add(id, quantity)}>
          <ShoppingBag size={17} /> Add to Order — {money(price * quantity)}
        </button>
      </div>
      <p className="micro">A demo order, made for exploring. No payment required.</p>
    </>
  );
}
