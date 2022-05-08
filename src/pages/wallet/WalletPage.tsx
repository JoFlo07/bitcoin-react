import { Container } from "@mui/material";
import { HeaderBar } from "../../shared/components/header-bar/header-bar";
import { PageTitle } from "../../shared/models/enums";

export const WalletPage = () => {
  const pageTitle = PageTitle.WALLET;

  return (
    <>
      <HeaderBar title={pageTitle} />
      <Container sx={{ overflow: "auto", height: "100%" }}>
      </Container>
    </>
  );
};
