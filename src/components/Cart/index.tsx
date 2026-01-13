import { Flex, View, Heading, Text, Image, NumberField, ActionButton, Divider, DatePicker, Button } from '@adobe/react-spectrum';

export default function Cart({ cart, updateCartQty, removeFromCart, selectedDate, setSelectedDate, handleCompute, totalLoading, totalError, computedTotal }: {
  cart: any[],
  updateCartQty: (id: number, qty: number) => void,
  removeFromCart: (id: number) => void,
  selectedDate: any,
  setSelectedDate: (date: any) => void,
  handleCompute: () => void,
  totalLoading: boolean,
  totalError: string | null,
  computedTotal: number | null
}) {
  return (
    <View flex minWidth="320px">
      <Heading level={2}><span role="img" aria-label="Cart">🛒</span> Cart</Heading>
      {cart.length === 0 ? <Text>No items in cart.</Text> : (
        <Flex direction="column" gap="size-200">
          {cart.map(item => (
            <Flex key={item.id} alignItems="center" gap="size-100">
              <Image src={item.imageURL} alt={item.name} width="40px" height="40px" objectFit="cover" />
              <Text flex>{item.name}</Text>
              <NumberField
                label="Qty"
                value={item.quantity}
                minValue={1}
                onChange={val => updateCartQty(item.id, val)}
                width="80px"
              />
              <ActionButton isQuiet onPress={() => removeFromCart(item.id)} aria-label="Remove"><span role="img" aria-label="Remove">🗑️</span></ActionButton>
            </Flex>
          ))}
        </Flex>
      )}
      <Divider marginY="size-200" />
      <DatePicker
        label="Select Date"
        value={selectedDate}
        onChange={setSelectedDate}
        granularity="day"
        width="100%"
      />
      <Button variant="cta" marginTop="size-200" onPress={handleCompute} isDisabled={cart.length === 0 || totalLoading}>Compute Total</Button>
      {totalLoading && <Text>Computing...</Text>}
      {totalError && <Text UNSAFE_style={{color: 'red'}}>{totalError}</Text>}
      {computedTotal !== null && !totalLoading && (
        <Text UNSAFE_style={{ fontWeight: 'bold', fontSize: 20 }}>Total: ${computedTotal.toFixed(2)}</Text>
      )}
    </View>
  );
}
