import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CommonCard(props) {
  return (
    // {sx={{ maxWidth: 300, maxHeight: 300 }} }
    <Card className="shadow-lg rounded-lg overflow-hidden">
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.alt}
          height={props.height}
          image={props.imgUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button onClick={props.onClick} size="small">See More</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
