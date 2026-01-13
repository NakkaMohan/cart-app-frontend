import { useState } from 'react';
import { Flex, NumberField, Button } from '@adobe/react-spectrum';

export default function AddToCartControl({ treat, onAdd }: { treat: any, onAdd: (treat: any, qty: number) => void }) {
  const [qty, setQty] = useState(1);
  return (
    <Flex alignItems="end" gap="size-100" marginTop="size-100">
      <NumberField label="Qty" value={qty} minValue={1} onChange={setQty} width="80px" />
      <Button variant="primary" onPress={() => { onAdd(treat, qty); setQty(1); }}>Add</Button>
    </Flex>
  );
}
