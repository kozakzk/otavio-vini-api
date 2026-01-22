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
import { ErrorBoundary } from 'react-error-boundary';
import { Link as RouterLink } from 'react-router';

export function Login() {
  async function handleUserLogin(formData: FormData) {
    const user = {
      password: formData.get('password'),
      email: formData.get('email'),
    };

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(user),
      },
    );
    console.log((await response.json()).access_token);
  }

  return (
    <>
      <ErrorBoundary fallback={<p>Erro ao fazer login.</p>}>
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          height={'100svh'}
          padding={{ base: '2em', md: '0' }}
        >
          <form>
            <VStack spacing={10} width={'30svw'}>
              <Text fontSize={'5xl'} color={'gray.600'} align={'center'}>
                Bem-vindo de Volta!
              </Text>
              <VStack spacing={2} width={'100%'}>
                <InputGroup>
                  <Input
                    placeholder={'Email'}
                    type={'email'}
                    name={'email'}
                    autoComplete={'email'}
                    required
                  />
                  <InputRightElement>
                    <AtSign color={'gray'} />
                  </InputRightElement>
                </InputGroup>
                <InputGroup>
                  <Input
                    placeholder={'Senha'}
                    type={'password'}
                    name={'password'}
                    required
                  />
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
                <Checkbox name={'remember-me'}>Lembre-se de Mim</Checkbox>
                <Link color={'blue'}>Recuperar Senha</Link>
              </Flex>
              <Button
                colorScheme={'blue'}
                width={'100%'}
                formAction={handleUserLogin}
                type={'submit'}
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
          </form>
        </Flex>
      </ErrorBoundary>
    </>
  );
}
