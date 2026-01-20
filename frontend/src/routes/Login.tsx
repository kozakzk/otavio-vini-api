import {
  Button,
  Link as ChakraLink,
  Checkbox,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AtSign, Lock } from 'lucide-react';
import { Link as RouterLink, useNavigate } from 'react-router';

export function Login() {
  const navigate = useNavigate();

  return (
    <>
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        height={'100svh'}
        padding={{ base: '2em', md: '0' }}
      >
        <VStack spacing={10}>
          <Text fontSize={'5xl'} color={'gray.600'} align={'center'}>
            Bem-vindo de Volta!
          </Text>
          <VStack spacing={2} width={'100%'}>
            <InputGroup>
              <Input placeholder={'Email'} type={'email'} />
              <InputRightElement>
                <AtSign color={'gray'} />
              </InputRightElement>
            </InputGroup>
            <InputGroup>
              <Input placeholder={'Senha'} type={'password'} />
              <InputRightElement>
                <Lock color={'gray'} />
              </InputRightElement>
            </InputGroup>
          </VStack>
          <Flex
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent={'space-between'}
            width={'100%'}
            align={'center'}
            textAlign={'center'}
          >
            <Checkbox>Lembre-se de Mim</Checkbox>
            <Link color={'blue'}>Recuperar Senha</Link>
          </Flex>
          <Button
            colorScheme={'blue'}
            width={'100%'}
            onClick={() => navigate('/list')}
          >
            Login
          </Button>
          <Text align={'center'}>
            Não tem uma conta?{' '}
            <ChakraLink as={RouterLink} to={'/register'} color={'blue'}>
              Cadastrar
            </ChakraLink>
          </Text>
        </VStack>
      </Flex>
    </>
  );
}
