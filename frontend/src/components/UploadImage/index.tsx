import { Button, Box, Typography, CircularProgress } from "@mui/material";
import { Upload } from "@mui/icons-material";

interface UploadImageProps {
  file?: File | null;
  sending?: boolean;
  onSelectFile?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSendFile?: () => void;
}

const UploadImage = ({
  file = null,
  sending = false,
  onSelectFile = () => {},
  onSendFile = () => {},
}: UploadImageProps) => {
  const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectFile(event);
  };

  const handleSendFile = () => {
    onSendFile();
  };

  return (
    <>
      <Box display="flex" justifyContent="center" mt={4}>
        <input
          id="upload-image"
          type="file"
          accept="image/*"
          onChange={handleSelectFile}
          style={{ display: "none" }}
        />
        <label htmlFor="upload-image">
          <Button variant="contained" component="span">
            Select image
          </Button>
        </label>
        <Button
          disabled={!file}
          variant="contained"
          color="success"
          startIcon={<Upload />}
          onClick={handleSendFile}
          sx={{ ml: 1 }}
        >
          Submit {sending && <CircularProgress size={20} sx={{ ml: 1 }} />}
        </Button>
      </Box>
      {file && (
        <Typography component="p" variant="caption" textAlign="center" mt={2}>
          Selected file: {file?.name}
        </Typography>
      )}
    </>
  );
};

export default UploadImage;
