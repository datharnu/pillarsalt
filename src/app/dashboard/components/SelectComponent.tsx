// import * as React from "react";

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export function SelectComponent() {
//   return (
//     <Select>
//       <SelectTrigger className="w-[180px] bg-[#FFFFFF] rounded-[8px] text-[#959595] border-none shadow ">
//         <SelectValue placeholder="This month" />
//       </SelectTrigger>
//       <SelectContent className="bg-[#FFFFFF] text-[#959595] rounded-[8px] border-none shadow">
//         <SelectGroup>
//           <SelectLabel>This month</SelectLabel>
//           <SelectItem value="apple">This year</SelectItem>
//           <SelectItem value="banana">Last year</SelectItem>
//           <SelectItem value="blueberry">Last 2 months</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   );
// }

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectComponentProps {
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
}

export function SelectComponent({
  label,
  placeholder,
  options,
}: SelectComponentProps) {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-[#FFFFFF] rounded-[8px] text-[#959595] border-none shadow-[#959595] shadow ">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-[#FFFFFF] text-[#959595] rounded-[8px] border-none shadow-[#959595] shadow">
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
