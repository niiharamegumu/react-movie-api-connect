import { Select } from "@chakra-ui/react";
import { memo, VFC, ChangeEvent } from "react";

type Props = {
  options: Array<{
    value: string;
    label: string;
  }>;
  size?: "sm" | "md" | "lg" | "xl";
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const SelectField: VFC<Props> = memo((props) => {
  const { options, size = "md", onChange } = props;
  return (
    <Select size={size} variant="flushed" onChange={onChange} w="100%">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
});
