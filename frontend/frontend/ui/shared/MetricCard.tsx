// ui/shared/MetricCard.tsx
import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Text,
  useToken,
  Icon,
} from '@chakra-ui/react';

export type GpuBreakdownItem = { model: string; count: number };
export type GpuValue =
  | number
  | GpuBreakdownItem[]
  | { total: number; breakdown?: GpuBreakdownItem[] };

type Props = {
  label: string;
  value: GpuValue;
  sublabel?: string;
  tooltip?: string; // ✅ declare prop here
  rightSlot?: React.ReactNode;
};

const InfoOutlineIcon = (props: React.ComponentProps<typeof Icon>) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
    />
    <path fill="currentColor" d="M11 10h2v6h-2z" />
    <path fill="currentColor" d="M11 7h2v2h-2z" />
  </Icon>
);

export default function MetricCard({ label, value, sublabel, tooltip, rightSlot }: Props) {
  const [borderColor, subtleBg] = useToken('colors', ['gray.200', 'gray.50']);

  const isBreakdown = Array.isArray(value);
  const total = isBreakdown
    ? value.reduce((sum, b) => sum + (b.count ?? 0), 0)
    : typeof value === 'number'
    ? value
    : value.total ?? 0;

  const breakdown =
    isBreakdown 
      ? value 
      : typeof value === 'object' && value !== null && 'breakdown' in value && Array.isArray(value.breakdown) 
        ? value.breakdown 
        : [];

  return (
    <Flex
      direction="column"
      p={5}
      rounded="2xl"
      border="1px solid"
      borderColor={borderColor}
      bg="white"
      boxShadow="sm"
      _hover={{ boxShadow: 'md' }}
    >
      {/* Header */}
      <Flex align="center" justify="space-between" mb={3}>
        <HStack gap={2}>
          <Text fontSize="sm" fontWeight="medium" color="gray.600">
            {label}
          </Text>
          {tooltip && (
            <Box
              as="span"
              title={tooltip}
              cursor="help"
              display="inline-flex"
              alignItems="center"
            >
              <InfoOutlineIcon color="gray.400" boxSize="14px" />
            </Box>
          )}
        </HStack>
        {rightSlot ?? null}
      </Flex>

      {/* Main value */}
      <Box>
        <Text
          fontWeight="semibold"
          color="gray.900"
          style={{
            fontVariantNumeric: 'tabular-nums',
            fontSize: 'clamp(1.25rem, 6vw, 2.5rem)',
            lineHeight: 1.1,
            wordBreak: 'break-word',
          }}
        >
          {new Intl.NumberFormat().format(total)}
        </Text>

        {sublabel && (
          <Text mt={1} fontSize="xs" color="gray.500">
            {sublabel}
          </Text>
        )}

        {breakdown.length > 0 && (
          <HStack mt={3} gap={2} wrap="wrap">
            {breakdown.map((b) => (
              <Box
                key={b.model}
                px={2}
                py={1}
                fontSize="sm"
                fontWeight="medium"
                bg={subtleBg}
                color="gray.700"
                border="1px solid"
                borderColor={borderColor}
                borderRadius="md"
              >
                <Text as="span" fontWeight="medium" mr={1}>
                  {b.model}
                </Text>
                × {b.count}
              </Box>
            ))}
          </HStack>
        )}
      </Box>
    </Flex>
  );
}