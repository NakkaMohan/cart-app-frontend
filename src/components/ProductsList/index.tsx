import { Flex, View, Heading, Text, Image } from '@adobe/react-spectrum';
import AddToCartControl from '../AddToCartControl';

export default function ProductsList({ treats, loading, error, addToCart }: {
  treats: any[], loading: boolean, error: string | null, addToCart: (treat: any, qty: number) => void
}) {
  return (
    <View flex>
      <Heading level={2}>Treats</Heading>
      <Flex wrap gap="size-200">
        {loading ? <Text>Loading...</Text> : error ? <Text UNSAFE_style={{color: 'red'}}>{error}</Text> : treats.map((treat: any) => (
          <View key={treat.id} borderWidth="thin" borderColor="gray-300" borderRadius="medium" padding="size-200" width="220px">
            <Image src={treat.imageURL} alt={treat.name} width="200px" height="120px" objectFit="cover" />
            <Text><b>{treat.name}</b></Text>
            <Text>Price: ${treat.price.toFixed(2)}</Text>
            {treat.bulkPricing && (
              <Text>Bulk: {treat.bulkPricing.amount} for ${treat.bulkPricing.totalPrice.toFixed(2)}</Text>
            )}
            <AddToCartControl treat={treat} onAdd={addToCart} />
          </View>
        ))}
      </Flex>
    </View>
  );
}
