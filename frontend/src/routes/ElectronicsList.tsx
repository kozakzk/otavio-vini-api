import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';
// import mockedElectronicsList from '../mocks/electronics-list.mock.json';

type ElectronicProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
};

export function ElectronicsList() {
  const [products, setProducts] = useState<ElectronicProduct[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/products`,
      );
      const products: ElectronicProduct[] = await response.json();

      setProducts(products);
    }
    fetchProducts();
  });

  return (
    <>
      <Text textAlign={'center'} color={'blue.600'} fontSize={'3rem'}>
        Lista de produtos
      </Text>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={'space-evenly'}
        alignItems={'center'}
      >
        {products.map((electronic) => (
          <Card
            maxW={'sm'}
            width={'50rem'}
            height={'40rem'}
            key={electronic.id}
            border={1}
            margin={'1em'}
            padding={'1em'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Image
              src={electronic.imgUrl}
              alt={electronic.name}
              draggable={false}
              width={'100%'}
            />
            <VStack height={'10rem'} overflowX={'auto'}>
              <Text fontSize={'1.2rem'} fontWeight={500} align={'center'}>
                {electronic.name}
              </Text>
              <Text>{electronic.description}</Text>
            </VStack>
            <CardBody alignContent={'end'} maxH={'5rem'} width={'100%'}>
              <Text color={'blue.600'} fontSize={'2xl'}>
                {electronic.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </Text>
              <Divider />
            </CardBody>
            <CardFooter justifyContent={'center'} alignContent={'center'}>
              <Button colorScheme={'blue'} leftIcon={<ShoppingCart />}>
                Comprar agora
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </>
  );
}
