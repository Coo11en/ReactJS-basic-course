import React, { useState, useEffect, useRef } from 'react';
import './style.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';
import { ThemeProvider, createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      text: '#ffffff'
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

function App() {
  const [messageList, setMessageList] = useState(['']);
  const [value, setMessageNew] = useState();
  const [author, setAuthorNew] = useState();
  const [id, setId] = useState(0);
  const [vis, setVis] = useState('hidden');
  const [count, setCount] = useState(0);
  const [open, setOpen] = React.useState(true);
  let name = ''

  const handleClick = () => {
    setOpen(!open);
  };

  const AddsetMessageList = (e) => {

    e.preventDefault()
    let newPost = {
      id,
      author,
      value
    }
    newPost.id = id

    if (value !== undefined && value !== '') {
      setVis('visible')
      setCount(count + 1)
      setMessageList([...messageList, newPost])
    };
    setMessageNew('')
    setAuthorNew('')
    setId(id + 1)

  }

  useEffect(() => {
    if (messageList != undefined && messageList[messageList.length - 1].author !== 'Робот' && count > 0) {
      let AutoMsg = {
        id,
        author: 'Робот',
        value: 'Привет, нужна помощь???'
      }
      setId(id + 1)
      AutoMsg.id = id
      setTimeout(() => setMessageList([...messageList, AutoMsg]), 2000)
    }
  }, [author]);

  console.log(messageList)


  let ArrayChat = {
    id,
    name,
    value
  }

  return (

    <ThemeProvider theme={theme}>
      <div className="App" sx={{ position: 'relative' }}>

        <Box sx={{ m: '0 auto 10px', width: '652px', justifyContent: 'center' }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="secondary"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleClick}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Чат бот
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>

        <div className="conteiner2">
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List dense sx={{ width: '652px', maxWidth: 360, bgcolor: 'secondary.main', position: 'absolute' }}>
              {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                  <ListItem>
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          alt={`Avatar n°${value + 1}`}
                          src={`/static/images/avatar/${value + 1}.jpg`}
                        />
                      </ListItemAvatar>
                      <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>

          <Stack spacing={2} sx={{ maxWidth: 500, minHeight: '30vh', m: '0 0 0 auto', visibility: vis }}>
            {messageList.map((message) => <SnackbarContent key={message.length}
              message={
                message.value
              } action={message.author} />)}
          </Stack>
        </div>

        <div className="conteiner">
          <Box
            sx={{
              '& > :not(style)': { mt: '10px' },
            }}
            component="form"
            noValidate
            autoComplete="on">
            <TextField id="outlined-basic" label="Текст сообщения" variant="outlined" value={value} onChange={e => setMessageNew(e.target.value)} sx={{ width: '59%', m: '0 0.5%' }} inputRef={input => input && input.focus()} />
            <TextField id="outlined-basic" label="Автор" variant="outlined" value={author} onChange={e => setAuthorNew(e.target.value)} sx={{ width: '24%', m: '0 0.5%' }} />
            <Button variant="contained" color="primary" onClick={AddsetMessageList} sx={{ p: '15.25px 14px' }} endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </div>
      </div >
    </ThemeProvider>
  );
}

export default App;