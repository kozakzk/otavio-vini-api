import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import mockedElectronicsList from '../mocks/electronics-list.mock.json';

export function ElectronicsList() {
  return (
    <>
      <Heading textAlign={'center'} color={'blue.600'}>
        Lista de produtos
      </Heading>
      <Flex justifyContent={'space-evenly'}>
        {mockedElectronicsList.map((electronic) => (
          <Card
            maxW={'sm'}
            key={electronic.id}
            border={1}
            margin={'1em'}
            padding={'1em'}
          >
            <Heading height={'20rem'} textOverflow={'ellipsis'}>
              {electronic.name}
            </Heading>
            <CardBody>
              <Image
                src={electronic.imgUrl}
                alt={electronic.name}
                height={'25rem'}
                draggable={false}
              />
              <Text color={'blue.600'} fontSize={'2xl'}>
                {electronic.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </Text>
              <Divider />
            </CardBody>
            <CardFooter justifyContent={'center'}>
              <Button colorScheme={'blue'}>Comprar agora</Button>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </>
  );
}
