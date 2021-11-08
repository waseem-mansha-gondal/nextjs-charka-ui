import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    customBtn: "#BE4444",
    input: "rgba(95, 116, 149, 0.2) ",
  },
  textStyles:{
      description:{
        mt:4,                            
        opacity:"0.8",
        fontFamily:"Lato",
        fontSize:"18px",
        fontWeight:"normal",
        fontStyle:"normal",
        lineHeight:"140%",
        color:"#FFFFFF"
      }  
        
  },
  layerStyles: {
    card: {
      bg: "#272B35",
      color: "#fff",
      borderRadius: "10px",
    },
    requestCard: {
      bg: "rgba(95, 116, 149, 0.102)",
      color: "#fff",
      borderRadius: "10px",
    },
  },
});
