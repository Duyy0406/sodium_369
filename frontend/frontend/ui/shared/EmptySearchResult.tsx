import { Box, Icon } from '@chakra-ui/react';
import React from 'react';

import IconSvg from 'ui/shared/IconSvg';
import { Heading } from 'toolkit/chakra/heading';

interface Props {
  text: string | React.JSX.Element;
}

const EmptySearchResult = ({ text }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt="50px"
    >
      <IconSvg
        name="empty_search_result"
        w={{ base: '160px', sm: '240px' }}
        h="auto"
        mb={{ base: 4, sm: 6 }}
      />

      <Heading level="3" mb={ 2 }>
        No results
      </Heading>

      <Box fontSize={{ base: 'sm', sm: 'md' }} textAlign="center">
        { text }
      </Box>
    </Box>
  );
};

export default EmptySearchResult;
