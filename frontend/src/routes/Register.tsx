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
import { AtSign, Lock, LockKeyhole } from 'lucide-react';
import { Link as RouterLink, useNavigate } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';

export function Register() {
  const navigate = useNavigate();

  async function handleRegisterUser(formData: FormData) {
    const newUser = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(newUser),
    });
    navigate('/login');
  }

  return (
    <>
      <ErrorBoundary fallback={<p>Falha ao cadastrar.</p>}>
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          height={'100svh'}
          padding={{ base: '2em', md: '0' }}
        >
          <form>
            <VStack spacing={10} width={'30svw'}>
              <Text fontSize={'5xl'} color={'gray.600'} align={'center'}>
                Cadastrar
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
                <InputGroup>
                  <Input
                    variant={'filled'}
                    placeholder={'Repita sua senha'}
                    type={'password'}
                    name={'repeat-password'}
                    required
                  />
                  <InputRightElement>
                    <LockKeyhole color={'gray'} />
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
                formAction={handleRegisterUser}
                type={'submit'}
              >
                Cadastrar
              </Button>
              <Text align={'center'}>
                Já possui uma conta?{' '}
                <ChakraLink as={RouterLink} to={'/login'} color={'blue'}>
                  Entrar
                </ChakraLink>
              </Text>
            </VStack>
          </form>
        </Flex>
      </ErrorBoundary>
    </>
  );
}
