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
        <Button size="small">
          <HashLink smooth to={learnMore} >
            Learn More
          </HashLink>
        </Button>
        <Button size="small">
          <HashLink smooth to={options} >
            Options
          </HashLink>
        </Button>
      </CardActions>
    </Card>
  );
}
