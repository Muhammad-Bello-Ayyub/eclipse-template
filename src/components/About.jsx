import { Box, Flex, Image, Spacer, Text } from '@chakra-ui/react'

function About() {

    // const imgOne = {
        // <img src="/assets/circle-img/circleone.png" alt="" />
        // src:'/assets/circle-img/circleone.png',
        // boxSize:'full',
        // alt:'img icon',
        // cursor:'pointer,'
    // }
    // const imgTwo = {
        // src:'/assets/circle-img/circletwo.png',
        // boxSize:'full',
        // alt:'img icon',
        // cursor:'pointer,'
    // }

    return (
        <div 
            style={{ 
                top: 0,
                zIndex: 1,
                width:'100vw',
                height:'100vh',
                display:'flex',
                position:'relative',
                justifyContent:'center' 
            }}
        >
            <Flex width='100vw' bg='gray.100' py={10} px={10} h={'100vh'} flexDir='column' gap='space-between'>
                <Box maxW={'40em'} h='fit-content'>
                    <Text fontSize={'3.5em'} lineHeight={'0.95em'} fontWeight='700'>
                        Eclipse is a<br/>
                        <span style={{ color:'#ff4301', cursor:'pointer' }}>customizable rollup</span><br/>
                        provider for developers building decentralized applications
                    </Text>
                </Box>
                <Spacer />
                <Box display='flex' flexDir='row' justifyContent='space-between'>
                    <Box display='flex' flexDir='column' w='fit-content'>
                        <Spacer />
                        <Box>
                            <Text color='#ff4301' fontSize={'1.5em'} maxW='fit-content' fontWeight='1000'> 
                                Eclipse is a new kind of architecture built to<br />
                                power the next generation of decentralized<br /> 
                                applications we’ve all been dreaming about.
                            </Text>
                        </Box>
                    </Box>
                    <Box w={300} h={300}>
                        <Image 
                            src='/assets/circle-img/circletwo.png'
                            boxSize='full'
                            alt='img icon'
                            cursor='pointer'
                            // _hover={{
                            //     style:`${ < imgTwo /> ? < imgOne />  : < imgTwo /> }`
                            // }}
                        /> 
                    </Box>
                </Box>
            </Flex> 
        </div>
    )
}

export default About