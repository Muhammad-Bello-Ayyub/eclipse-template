import ReactPlayer from 'react-player';
import { Flex } from '@chakra-ui/react';

function Video() {

  const vidUrl = "https://youtu.be/Y8MKq7IuOn0"
  return (
    <Flex w='100vw' h='100vh'>
      <ReactPlayer 
        url={vidUrl}
        playing={false}
        volume={0.5}
        width={'100vw'}
        height='100vh'
      />
    </Flex>
  )
}

export default Video