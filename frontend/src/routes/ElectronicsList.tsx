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
import { PrivateRoute } from '../components/PrivateRoute';
import { useNavigate } from 'react-router';
import { useToast } from '@chakra-ui/react';

type ElectronicProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export function ElectronicsList() {
  const [products, setProducts] = useState<ElectronicProduct[]>([]);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/products`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
          },
        },
      );
      if (!response.ok) {
        navigate('/login');
        toast({
          title: 'Token incorreto ou expirado!',
          description: 'Redirecionando...',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
      const products: ElectronicProduct[] = await response.json();

      setProducts(products);
    }
    fetchProducts();
  });

  function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem('auth_token');
      navigate('/login');
    };

    return (
      <Button colorScheme={'blue'} onClick={handleLogout}>
        Sair
      </Button>
    );
  }

  return (
    <>
      <PrivateRoute to="/list" />
      <Text textAlign={'center'} color={'blue.600'} fontSize={'3rem'}>
        Lista de produtos
      </Text>
      <Logout />
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
              src={electronic.imageUrl}
              alt={electronic.name}
              draggable={false}
              width={'100%'}
              height={'40%'}
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
