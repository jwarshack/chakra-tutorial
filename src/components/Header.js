import { useColorMode } from '@chakra-ui/color-mode'
import { Circle, Stack, Flex, Box, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'
import { useMediaQuery } from '@chakra-ui/media-query'
import React from 'react'

function Header() {
    const { colorMode } = useColorMode()
    const isDark = colorMode === "dark"

    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)")
    return (
        <div>
            <Stack>
                <Circle position='absolute' bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"></Circle>
                <Flex direction={isNotSmallerScreen ? "row" : "column"}
                    spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                    alignSelf="flex-start">
                        <Box mt={isNotSmallerScreen ? "0" : "16"}  alignSelf="flex-start">
                            <Text fontsize="5xl" fontWeight="semibold">Hi, I am</Text>
                            <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Jake Warren</Text>
                            <Text color={isDark ? "gray.200" : "gray.500"}>Fullstack Web3 developer. Solidity, React, Next.js</Text>
                            <Button mt={8} colorScheme="blue">Hire Me</Button>

                        </Box>
                        <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12" }
                        src="https://avatars.githubusercontent.com/u/54959624"
                        mb={isNotSmallerScreen ? "0" : "12" } borderRadius="full"
                        backgroundColor="transparent" boxShadow="lg" boxSize="300px"
                        />

                    </Flex>
            </Stack>
            
        </div>
    )
}

export default Header
