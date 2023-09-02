import { Container, Grid } from "@mui/material";

interface Image {
  secure_url: string;
  public_id: string;
}

interface ImageListProps {
  images?: Image[];
}

const ImageList = ({ images = [] }: ImageListProps) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {images?.map((image) => (
          <Grid key={image.public_id} item xs={12} sm={6} md={4}>
            <img
              src={image.secure_url}
              alt={image.public_id}
              style={{ width: "100%" }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ImageList;
