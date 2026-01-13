import { useState, useEffect } from 'react';
import axios from 'axios';

export function useProducts() {
  const [treats, setTreats] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTreats = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiHost = import.meta.env.VITE_API_HOST || 'http://localhost:8080';
        const res = await axios.get(`${apiHost}/cart/products`);
        setTreats(res.data);
      } catch (err: any) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };
    fetchTreats();
  }, []);

  return { treats, loading, error };
}

export function useComputeTotal() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState<number|null>(null);

  const computeTotal = async (cart: any[], date: string) => {
    setLoading(true);
    setError(null);
    setTotal(null);
    try {
      const apiHost = import.meta.env.VITE_API_HOST || 'http://localhost:8080';
      const cartItems = cart.map(item => ({ id: item.id, qty: item.quantity }));
      const res = await axios.post(`${apiHost}/cart/total`, { cartItems, date });
      setTotal(res.data);
    } catch (err: any) {
      setError('Failed to compute total');
    } finally {
      setLoading(false);
    }
  };

  return { computeTotal, loading, error, total };
}
