import { Container } from "@mui/material";
import { ReactNode } from "react";

export default function MainContainer({ children }: { children: ReactNode }) {
  return <Container maxWidth="lg">{children}</Container>;
}
