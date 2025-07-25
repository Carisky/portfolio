import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { HashLink } from "react-router-hash-link";

export default function PreviewCard({
  title,
  description,
  imgSrc,
  altTxt,
  learnMore,
  options,
}) {
  return (
    <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
      <CardMedia sx={{ height: 220 }} image={imgSrc} title={altTxt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <HashLink smooth to={learnMore}>
          <Button variant="outlined" size="small">
            Learn More
          </Button>
        </HashLink>
        <HashLink smooth to={options}>
          <Button variant="outlined" size="small">Options</Button>
        </HashLink>
      </CardActions>
    </Card>
  );
}
