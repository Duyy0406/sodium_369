import { Box, Flex, Icon, Text, chakra } from "@chakra-ui/react";
import React from "react";

import IconSvg from "ui/shared/IconSvg";

import { CloseButton } from "../../../../chakra/close-button";
import { Hint } from "../../../../components/Hint/Hint";

const FILE_ICONS: Record<string, React.ReactNode> = {
  ".json": <IconSvg name="files/json" boxSize="48px" />,
  ".sol": <IconSvg name="files/sol" boxSize="48px" />,
  ".yul": <IconSvg name="files/yul" boxSize="48px" />,
};

function getFileExtension(fileName: string) {
  const chunks = fileName.split(".");
  if (chunks.length === 1) {
    return "";
  }

  return "." + chunks[chunks.length - 1];
}

interface Props {
  file: File;
  className?: string;
  index?: number;
  onRemove?: (index?: number) => void;
  isDisabled?: boolean;
  error?: string;
}

export const FileSnippet = chakra(
  ({ file, className, index, onRemove, isDisabled, error }: Props) => {
    const handleRemove = React.useCallback(
      (event: React.MouseEvent) => {
        event.stopPropagation();
        onRemove?.(index);
      },
      [index, onRemove]
    );

    const fileExtension = getFileExtension(file.name);
    const fileIcon = FILE_ICONS[fileExtension] || (
      <IconSvg name="files/placeholder" boxSize="48px" />
    );

    return (
      <Flex
        maxW="300px"
        overflow="hidden"
        className={className}
        alignItems="center"
        textAlign="left"
        columnGap={2}
      >
        <Box color={error ? "text.error" : "initial"}>
          {fileIcon}
        </Box>
        <Box maxW="calc(100% - 58px - 24px)">
          <Flex alignItems="center">
            <Text
              fontWeight={600}
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              color={error ? "text.error" : "initial"}
            >
              {file.name}
            </Text>
            {Boolean(error) && <Hint label={error} ml={1} color="text.error" />}
            <CloseButton
              aria-label="Remove"
              ml={2}
              onClick={handleRemove}
              disabled={isDisabled}
            />
          </Flex>
          <Text color="text.secondary" textStyle="sm" mt={1}>
            {file.size.toLocaleString(undefined, {
              notation: "compact",
              maximumFractionDigits: 2,
              unit: "byte",
              unitDisplay: "narrow",
              style: "unit",
            })}
          </Text>
        </Box>
      </Flex>
    );
  }
);
