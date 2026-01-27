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
  useToast,
} from '@chakra-ui/react';
import { AtSign, Lock } from 'lucide-react';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Link as RouterLink, useNavigate } from 'react-router';
import { apiRequest } from '../services/api';

export function Login() {
  const navigate = useNavigate();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  async function handleUserLogin(formData: FormData) {
    setIsLoading(true);

    const user = {
      password: formData.get('password') as string,
      email: formData.get('email') as string,
    };

    try {
      const data = await apiRequest('/auth/login', 'POST', user);

      if (data.access_token) {
        localStorage.setItem('auth_token', data.access_token);

        toast({
          title: 'Login realizado!',
          description: 'Redirecionando...',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });

        navigate('/list');
      }
    } catch (error) {
      toast({
        title: 'Falha no login',
        description: 'Verifique seu email e senha.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
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
          <form action={handleUserLogin}>
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
                type={'submit'}
                isLoading={isLoading}
                loadingText="Entrando..."
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
