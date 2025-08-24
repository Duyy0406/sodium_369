import { Icon } from "@chakra-ui/react";
import React from "react";

import IconSvg from "ui/shared/IconSvg";

import type { IconButtonProps } from "../../chakra/icon-button";
import { IconButton } from "../../chakra/icon-button";
import type { TooltipProps } from "../../chakra/tooltip";
import { Tooltip } from "../../chakra/tooltip";

interface Props extends IconButtonProps {
  label: string | React.ReactNode;
  tooltipProps?: Partial<TooltipProps>;
  isLoading?: boolean;
  as?: React.ElementType;
}

export const Hint = React.memo(
  ({ label, tooltipProps, isLoading, boxSize = 5, ...rest }: Props) => {
    return (
      <Tooltip
        content={label}
        positioning={{ placement: "top" }}
        {...tooltipProps}
      >
        <IconButton
          aria-label="hint"
          boxSize={boxSize}
          loadingSkeleton={isLoading}
          borderRadius="sm"
          variant="icon_secondary"
          {...rest}
        >
          <IconSvg name="info" boxSize={boxSize} />
        </IconButton>
      </Tooltip>
    );
  }
);
