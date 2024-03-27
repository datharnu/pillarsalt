type handleErr = {
  id: number;
  error1: string;
  error2: string;
  error3: string;
  error4: string;
};

export const handleError: handleErr[] = [
  {
    id: 1,
    error1: "Your password must contain at least 8 characters",
    error2: "at least 1 Uppercase character (A-Z)",
    error3: "at least 1 Digit (0-9)",
    error4: "at least 1 Special characters (~!@#$...)",
  },
];
