import {
    Box,
    Flex,
    Grid,
    Spacer,
    Center,
    HStack,
    Divider,
    GridItem,
    Heading,
    Text,
} from '@chakra-ui/react';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';

function Nav() {
    return (
        <header style={{ 
            top: 0,
            width:'100vw',
            height:'100vh',
            display:'flex',
            position:'sticky',
            justifyContent:'center' }}
        >
            <Flex w='100vw' flexDir='column' px={10} py={10} bg='#ff4301' >
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Box maxW={20} maxH={20}>
                        <Center>
                            <NavLink to="/">
                                <Logo />
                            </NavLink>
                        </Center>
                    </Box>

                    <Flex alignItems={'center'}>
                        <HStack>
                            <Grid color='black' fontWeight={'bold'} templateColumns='repeat(9, 1fr)' gap={5} alignItems={'center'}>
                                <GridItem colSpan={3}>
                                    <Box gap={5}  w='10em'  h={'full'}>
                                        <Divider/>
                                        <Box>
                                            <NavLink _hover={{textDecoration:"none"}} to="/features">How it works</NavLink>
                                        </Box>
                                        <Divider />
                                        <Box>
                                            <NavLink _hover={{textDecoration:"none"}} to="/partners">Partners</NavLink>
                                        </Box>
                                    </Box>
                                </GridItem>

                                <GridItem colSpan={3}>
                                    <Box w='10em'>
                                        <Divider />
                                        <NavLink _hover={{textDecoration:"none"}} to="/careers">Careers</NavLink>
                                        <Divider />
                                        <NavLink _hover={{textDecoration:"none"}} to="/news">News</NavLink>
                                    </Box>
                                </GridItem>
                                
                                <GridItem colSpan={3}>
                                    <Box w='10em'>
                                        <Divider />
                                        <NavLink isExternal _hover={{textDecoration:"none"}} to="/docs">
                                            <HStack>
                                                <Box>
                                                    Docs
                                                </Box> 
                                                <Spacer /> 
                                                <Box>
                                                    <ExternalLinkIcon mx='2px' />
                                                </Box>
                                            </HStack>
                                        </NavLink>
                                        <Divider />
                                        <NavLink _hover={{textDecoration:"none"}} to="/blog">Blog</NavLink>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </HStack>
                    </Flex>
                </Flex>
                
                <Box position='relative'>
                    <Heading
                        w='100%' 
                        h="fit-content"
                        pt={"100px"}
                        color={'black'}
                        fontSize='24em'
                        fontWeight='1000'
                        textAlign='center'
                        letterSpacing='tight'
                    >
                        eclipse
                    </Heading>
                    <Text
                        top={180}
                        right={50}
                        color={'black'}
                        w='fit-content'
                        fontSize='2.8em'
                        fontWeight='1000'
                        position='absolute'
                    >Build your own rollup with</Text>
                </Box>
            </Flex>            
        </header>
    )
}

export default Nav