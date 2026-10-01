'use client';
import Link from 'next/link';
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { Minus, Plus, ShoppingBag, Trash2, ArrowRight, Check } from 'lucide-react';
import { menuItems, money } from '@/data/menu';
import { Modal } from './Modal';
import { ReservationForm } from './ReservationForm';
import { FoodImage } from './FoodImage';
interface CartLine {
  id: string;
  quantity: number;
}
interface Experience {
  reserve: () => void;
  openCart: () => void;
  add: (id: string, quantity: number) => void;
  count: number;
}
const Context = createContext<Experience | null>(null);
export function useExperience() {
  const context = useContext(Context);
  if (!context) throw new Error('ExperienceProvider missing');
  return context;
}
export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<'reservation' | 'cart' | null>(null);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);
  const [checkout, setCheckout] = useState(false);
  useEffect(() => {
    let saved: CartLine[] = [];
    try {
      const value: unknown = JSON.parse(localStorage.getItem('ember-cart') || '[]');
      if (Array.isArray(value)) {
        const unique = new Map<string, CartLine>();
        for (const line of value)
          if (
            line &&
            typeof line.id === 'string' &&
            menuItems.some((item) => item.id === line.id) &&
            Number.isInteger(line.quantity) &&
            line.quantity > 0
          )
            unique.set(line.id, { id: line.id, quantity: Math.min(20, line.quantity) });
        saved = [...unique.values()];
      }
    } catch {
      /* Storage may be unavailable in private browsing. */
    }
    queueMicrotask(() => {
      setCart(saved);
      setReady(true);
    });
  }, []);
  useEffect(() => {
    if (ready) {
      try {
        localStorage.setItem('ember-cart', JSON.stringify(cart));
      } catch {
        /* The current session still works without persistence. */
      }
    }
  }, [cart, ready]);
  const close = useCallback(() => setModal(null), []);
  function update(id: string, quantity: number) {
    setCheckout(false);
    setCart((current) =>
      current
        .map((line) => (line.id === id ? { ...line, quantity: Math.min(20, quantity) } : line))
        .filter((line) => line.quantity > 0),
    );
  }
  function add(id: string, quantity: number) {
    setCart((current) => {
      const found = current.find((line) => line.id === id);
      return found
        ? current.map((line) =>
            line.id === id ? { ...line, quantity: Math.min(20, line.quantity + quantity) } : line,
          )
        : [...current, { id, quantity }];
    });
    setCheckout(false);
    setModal('cart');
  }
  const subtotal = cart.reduce(
    (total, line) =>
      total + (menuItems.find((item) => item.id === line.id)?.price || 0) * line.quantity,
    0,
  );
  return (
    <Context.Provider
      value={{
        reserve: () => setModal('reservation'),
        openCart: () => {
          setCheckout(false);
          setModal('cart');
        },
        add,
        count: cart.reduce((sum, line) => sum + line.quantity, 0),
      }}
    >
      {children}
      {modal === 'reservation' && (
        <Modal title="A table for you." onClose={close}>
          <ReservationForm />
        </Modal>
      )}
      {modal === 'cart' && (
        <Modal title="Your order." onClose={close} drawer>
          {checkout ? (
            <div className="success-state" role="status">
              <span className="success-icon">
                <Check />
              </span>
              <h3>Great taste.</h3>
              <p>This is a demo checkout. No order was placed and no payment was collected.</p>
              <button className="button" onClick={close}>
                Keep exploring
              </button>
            </div>
          ) : cart.length ? (
            <>
              <p className="micro">A little preview of your next visit • Demo order</p>
              <div className="cart-lines">
                {cart.map((line) => {
                  const item = menuItems.find((item) => item.id === line.id)!;
                  return (
                    <div className="cart-line" key={line.id}>
                      <div className="cart-photo">
                        <FoodImage src={item.image} alt={item.name} sizes="90px" />
                      </div>
                      <div className="cart-line-info">
                        <h3>{item.name}</h3>
                        <span className="price">{money(item.price * line.quantity)}</span>
                        <div className="quantity compact">
                          <button
                            aria-label={`Decrease ${item.name}`}
                            onClick={() => update(line.id, line.quantity - 1)}
                          >
                            <Minus size={14} />
                          </button>
                          <span>{line.quantity}</span>
                          <button
                            disabled={line.quantity >= 20}
                            aria-label={`Increase ${item.name}`}
                            onClick={() => update(line.id, line.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <button
                        className="icon-button"
                        aria-label={`Remove ${item.name}`}
                        onClick={() => update(line.id, 0)}
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="cart-total">
                <span>Subtotal</span>
                <strong>{money(subtotal)}</strong>
              </div>
              <p className="micro">Taxes and gratuity are not included. This is a demo.</p>
              <button
                className="button wide"
                onClick={() => {
                  setCheckout(true);
                  setCart([]);
                }}
              >
                Demo Checkout <ArrowRight size={17} />
              </button>
            </>
          ) : (
            <div className="empty-state">
              <ShoppingBag size={38} />
              <h3>Your next favorite is waiting.</h3>
              <p>Add a dish from its menu page to start your demo order.</p>
              <Link href="/menu" className="button" onClick={close}>
                Explore the Menu
              </Link>
            </div>
          )}
        </Modal>
      )}
    </Context.Provider>
  );
}
export function ReserveButton({
  children = 'Reserve a Table',
  className = 'button',
}: {
  children?: ReactNode;
  className?: string;
}) {
  const { reserve } = useExperience();
  return (
    <button className={className} onClick={reserve}>
      {children}
    </button>
  );
}
