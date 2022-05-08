import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { NumberFormatValues } from "react-number-format";
import { HeaderBar } from "../../shared/components/header-bar/header-bar";
import useIsMobile from "../../shared/hooks/isMobile";
import { PageTitle } from "../../shared/models/enums";
import { saveItemInStorage } from "../../shared/services/local-storage-service";
import { BitcoinInput } from "./components/bitcoin-input/BitcoinInput";

export const WalletPage = () => {
  const pageTitle = PageTitle.WALLET;
  const isMobile = useIsMobile();
  const [btcAmount, setBtcAmount] = useState("");

  const handleInput = async (values: NumberFormatValues) => {
    const { formattedValue, value } = values;
    setBtcAmount(formattedValue);
  };

  const onSave = (amount: string) => {
    saveItemInStorage('mybtc', amount);
    setBtcAmount("");
  };

  return (
    <>
      <HeaderBar title={pageTitle} />
      <Container sx={{ overflow: "auto", height: "100%" }}>
        <Card
          sx={{
            width: "fit-content",
            marginTop: 5,
            borderRadius: 5,
            padding: 2,
          }}
        >
          <CardContent>
            <Typography fontSize={isMobile ? 16 : 18} fontWeight={500}>
              Enter your Bitcoin amount:
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={
                  isMobile
                    ? { display: "flex", flexDirection: "column", marginTop: 4 }
                    : { display: "flex", marginTop: 2 }
                }
              >
                <BitcoinInput handleInput={handleInput} btcAmount={btcAmount} />
                <Button onClick={() => onSave(btcAmount)}>Save</Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};
