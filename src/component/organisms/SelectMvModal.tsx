import {
  Badge,
  Text,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Box,
  Image,
  ModalOverlay,
} from "@chakra-ui/react";
import { VFC } from "react";

import { ImageBaseUrl } from "../../config/mv-api/settings";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { Movie } from "../../type/movie";

type Props = {
  isOpen: boolean;
  movie: Movie;
  onClose: () => void;
};

export const SelectMvModal: VFC<Props> = (props) => {
  const { isOpen, movie, onClose } = props;
  const { width, height } = useWindowDimensions();
  const modalSize = width <= 500 ? "full" : "3xl";

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={modalSize} isCentered={true}>
      <ModalOverlay bgColor="rgba(0,0,0,.6)" />
      <ModalContent
        borderRadius={{ base: 0, lg: 30 }}
        backdropFilter="blur(9px)"
        bgColor="rgba(255,255,255,0.3)"
      >
        <Box>
          <Image
            src={`${ImageBaseUrl}${movie.backdrop_path}`}
            borderTopLeftRadius={{ base: 0, lg: 30 }}
            borderTopRightRadius={{ base: 0, lg: 30 }}
          />
        </Box>
        <ModalHeader>
          <Heading as="h2" fontSize={{ base: "sm", sm: "lg" }}>
            {movie.title || movie.name}
          </Heading>
          <Text fontSize="sm">
            {movie.original_title || movie.original_name}
          </Text>
          <Badge colorScheme="teal">{movie.media_type}</Badge>
          <Text fontSize="sm" mb={2}>
            Release : {movie.release_date || "Not Data ..."}
          </Text>
        </ModalHeader>
        <ModalBody fontSize={{ base: "sm", md: "lg" }}>
          {movie.overview || "Not Description ..."}
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blackAlpha"
            mr={3}
            onClick={onClose}
            bgColor="rgba(0,0,0,0)"
            _hover={{ bgColor: "rgba(255,255,255)", color: "black" }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
