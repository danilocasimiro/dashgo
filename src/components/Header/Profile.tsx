import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean,
}

export function Profile( { showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Danilo casimiro</Text>
          <Text color="gray.300" fontSize="small">
            dan_casimiro@hotmail.com
          </Text>
        </Box>
      )}
    <Avatar size="md" name="Danilo Casimiro" src="https://github.com/danilocasimiro.png"/>
  </Flex>
  );
}