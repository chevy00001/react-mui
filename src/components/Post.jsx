import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
export const Post = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (

    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{}} aria-label="recipe"
            src='https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg'
          >
            C
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Chevy P. Manguiob"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.unsplash.com/photo-1588276552401-30058a0fe57b"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
          <Checkbox
            {...label}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

      </CardActions>

    </Card>
  )
}
