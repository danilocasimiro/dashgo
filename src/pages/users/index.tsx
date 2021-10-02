import { Box, Flex, Heading, Button, Icon, Table, Thead, Th, Tr, Tbody, Checkbox, Td, Text, useBreakpointValue } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import Link from 'next/link';
import { Header }  from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'
import { useEffect } from 'react';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <Box>
      <Header/>

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar/>

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários </Heading>
            <Link href="/users/create" passHref>
              <Button 
                as="a" 
                size="sm" 
                fontSize="sm" 
                colorScheme="pink" 
                leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>
                Criar novo
              </Button>
            </Link>
          </Flex>
        
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th> }
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Danilo Casimiro</Text>
                    <Text fontSize="sm" color="gray.300">dan_casimiro@hotmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>04 de julho, 2021</Td> }
                <Td> 
                  <Button 
                    as="a" 
                    size="sm" 
                    fontSize="sm" 
                    colorScheme="purple" 
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}>
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Jose maria</Text>
                    <Text fontSize="sm" color="gray.300">jose_maria@outlook.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>21 de agosto, 1999</Td> }
                <Td> 
                  <Button 
                    as="a" 
                    size="sm" 
                    fontSize="sm" 
                    colorScheme="purple" 
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}>
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Maria jose</Text>
                    <Text fontSize="sm" color="gray.300">maria_jose@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>17 de janeiro, 2002</Td> }
                <Td> 
                  <Button 
                    as="a" 
                    size="sm" 
                    fontSize="sm" 
                    colorScheme="purple" 
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}>
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination/>
        </Box>
      </Flex>
    </Box>
  )
}