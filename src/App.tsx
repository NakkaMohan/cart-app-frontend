import { useState } from 'react'
import './App.css'
import { Flex, Provider, defaultTheme, Divider } from '@adobe/react-spectrum';
import { today } from '@internationalized/date';
import { useProducts, useComputeTotal } from './cartApiHooks';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<any>(today('UTC'));
  const { treats, loading, error } = useProducts();
  const { computeTotal, loading: totalLoading, error: totalError, total: computedTotal } = useComputeTotal();

  const addToCart = (treat: any, qty: number) => {
    if (qty < 1) return;
    setCart(prev => {
      const existing = prev.find(item => item.id === treat.id);
      if (existing) {
        return prev.map(item => item.id === treat.id ? { ...item, quantity: item.quantity + qty } : item);
      } else {
        return [...prev, { ...treat, quantity: qty }];
      }
    });
  };

  const updateCartQty = (id: number, qty: number) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: qty } : item));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleCompute = () => {
    const dateStr = selectedDate.toDate ? selectedDate.toDate().toISOString().slice(0, 10) : selectedDate;
    computeTotal(cart, dateStr);
  };

  return (
    <Provider theme={defaultTheme} colorScheme="light">
      <Flex direction={{ base: 'column', M: 'row' }} gap="size-300" margin="size-300">
        <ProductsList treats={treats} loading={loading} error={error} addToCart={addToCart} />
        <Divider orientation="vertical" />
        <Cart
          cart={cart}
          updateCartQty={updateCartQty}
          removeFromCart={removeFromCart}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          handleCompute={handleCompute}
          totalLoading={totalLoading}
          totalError={totalError}
          computedTotal={computedTotal}
        />
      </Flex>
    </Provider>
  );
}

export default App;
