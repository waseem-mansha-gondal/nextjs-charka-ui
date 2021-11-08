import { Box } from "@chakra-ui/react";
import CardHeader from "./header";
import CardContent from "./content";
import CardFooter from "./footer";

function Card({ post, ...rest }) {
  return (
    <Box
      width={["100%", "100%", "100%", "640px"]}
      shadow="md"
      {...rest}
      layerStyle="card"
    >
      <Box p={"24px"}>
        <CardHeader post={post} />
        <CardContent post={post} />
      </Box>
      <Box>
        <CardFooter />
      </Box>
    </Box>
  );
}
export default Card;
