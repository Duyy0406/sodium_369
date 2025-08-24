import { Icon, chakra } from '@chakra-ui/react';
import React from 'react';

import IconSvg from 'ui/shared/IconSvg';

type Props = {
  className?: string;
};

const MeritsIcon = ({ className }: Props) => {
  return (
    <IconSvg 
      name="merits_colored" 
      className={ className } 
      filter={{ _light: 'drop-shadow(0px 4px 2px rgba(141, 179, 204, 0.25))', _dark: 'none' }}
    />
  );
};

export default chakra(MeritsIcon);
