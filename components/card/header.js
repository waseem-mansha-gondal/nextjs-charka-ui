import {
  Text,
  Heading,
  Icon,
  Button,
  Avatar,
  WrapItem,
  Stack,
  Box,
  HStack,
  IconButton,
  useMediaQuery
} from '@chakra-ui/react'

function CardHeader({ post, ...rest }) {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")

  return (
    <HStack justify="space-between" align="start" margin="8px">
      <Stack direction={['column', 'row']}>
        <Box
          width="94px"
          paddingTop="12px"
          paddingRight="20px"
          paddingLeft="20px"
          paddingBottom="12px"
          bg="#BE4444;"
          borderRadius="100px"
          color="white"
          maxH="94px"
        >
          <Text
            fontFamily="Poppins"
            fontSize="13px"
            fontWeight="600"
            lineHeight="19px"
            color="#FFFFFF"
            fontStyle="normal"
            width="94px"
          >
            Funding
          </Text>
        </Box>

        <HStack align="center">
          <WrapItem>
            <Avatar
              height="44px"
              width="44px"
              name={post.author.name}
              src={post.author.profilePictureUrl}
              ms={1}
            />
          </WrapItem>
          <Heading
            fontFamily="Poppins"
            fontSize="18px"
            fontWeight="600"
            fontStyle="normal"
            lineHeight="27px"
            color="#FFFFFF"
            ms={2}
            ps={1}
          >
            {post.author.name}
          </Heading>
        </HStack>

        <Text
          fontFamily="Poppins"
          fontSize="12px"
          fontWeight="normal"
          fontStyle="normal"
          lineHeight="18px"
          color="#FFFFFF"
          opacity="0.5"
          ps={1}
          display="flex"
          alignItems="center"
        >
          {post.time}
        </Text>
      </Stack>
      <IconButton bg="transparent" _hover="transparent">
        <Icon viewBox="0 0 200 200" opacity="0.5" fontSize="20px">
          <path
            fill="white"
            d="M0,15A15,15,0,1,1,15,30,15,15,0,0,1,0,15Zm92.93,0a15,15,0,1,1,15,15,15,15,0,0,1-15-15ZM46.46,15a15,15,0,1,1,15,15,15,15,0,0,1-15-15Z"
          />
        </Icon>
      </IconButton>
    </HStack>
  )
}
export default CardHeader
