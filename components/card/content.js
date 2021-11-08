import { Box, Text } from '@chakra-ui/react'

function CardContent({ post, ...rest }) {
  return (
    <Box margin="16px 8px 8px 8px">
      <Text textStyle="description">{post.content}</Text>
      <Text textStyle="description">{post.description}</Text>
    </Box>
  )
}
export default CardContent
