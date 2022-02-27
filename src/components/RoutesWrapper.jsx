import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function RoutesWrapper(prop) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      h="100%"
    >
      {prop.children}
    </MotionBox>
  );
}
export default RoutesWrapper;
