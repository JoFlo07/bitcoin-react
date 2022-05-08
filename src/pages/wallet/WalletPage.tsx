import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  AlertColor,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { NumberFormatValues } from "react-number-format";
import CustomSnackbar from "../../shared/components/custom-snackbar/CustomSnackbar";
import { HeaderBar } from "../../shared/components/header-bar/header-bar";
import useIsMobile from "../../shared/hooks/isMobile";
import { PageTitle, StorageKey } from "../../shared/models/enums";
import { saveItemInStorage } from "../../shared/services/local-storage-service";
import { BitcoinInput } from "./components/bitcoin-input/BitcoinInput";

export const WalletPage = () => {
  const pageTitle = PageTitle.WALLET;
  const isMobile = useIsMobile();
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarInfo, setSnackBarInfo] = useState({
    msg: "BTC saved",
    severity: "success" as AlertColor,
  });
  const [btcAmount, setBtcAmount] = useState("");

  const handleInput = async (values: NumberFormatValues) => {
    const { formattedValue } = values;
    setBtcAmount(formattedValue);
  };

  const onSave = (amount: string) => {
    try {
      saveItemInStorage(StorageKey.MY_BTC, amount);
      setBtcAmount("");
      setSnackBarOpen(true);
    } catch (error) {
      console.error(error);
      setSnackBarOpen(true);
      setSnackBarInfo({
        msg: "Error Saving BTC",
        severity: "error" as AlertColor,
      });
    }
  };

  const onCloseSnackBar = () => setSnackBarOpen(false);

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
        <CustomSnackbar
          onClose={onCloseSnackBar}
          snackBarInfo={snackBarInfo}
          snackBarOpen={snackBarOpen}
        />
      </Container>
    </>
  );
};
