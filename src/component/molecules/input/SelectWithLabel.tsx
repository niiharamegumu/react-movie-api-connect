import { Box, Text } from "@chakra-ui/react";
import { memo, VFC, ChangeEvent } from "react";

import { SelectField } from "../../atoms/input/SelectField";

type Props = {
  labelText: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  size?: "sm" | "md" | "lg" | "xl";
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const SelectWithLabel: VFC<Props> = memo((props) => {
  const { options, size = "md", labelText, onChange } = props;
  return (
    <Box>
      <Text fontSize="sm">{labelText}</Text>
      <SelectField options={options} size={size} onChange={onChange} />
    </Box>
  );
});
