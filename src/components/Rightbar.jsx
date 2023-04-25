import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant='h5' fontWeight={100} >Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg" />
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg" />
        </AvatarGroup>
        <Typography variant='h5' fontWeight={100} mt={2} mb={2}>Latest Post</Typography>
        <ImageList cols={3} rowHeight={130}>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
              alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
              alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=939&q=80'
              alt='' />
          </ImageListItem>
        </ImageList>
        <Typography variant='h5' fontWeight={100} mt={2}>Latest Conversation</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

