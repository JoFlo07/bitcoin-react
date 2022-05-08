import { Alert, AlertColor, Snackbar } from "@mui/material";

interface CustomSnackbarProps {
  snackBarInfo: { msg: string; severity: AlertColor };
  snackBarOpen: boolean;
  onClose: () => void;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  snackBarInfo,
  snackBarOpen,
  onClose,
}) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={snackBarOpen}
      onClose={onClose}
      autoHideDuration={2000}
    >
      <Alert
        severity={snackBarInfo.severity}
        sx={{
          width: "100%",
          cursor: "pointer",
        }}
      >
        {snackBarInfo.msg}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
