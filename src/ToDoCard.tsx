import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import axios from 'axios';

interface CardProps {
  content: string,
  isComplete: boolean,
  id: number,
  handleDelete: (id: number) => {}
}

export default function OutlinedCard({content, isComplete, id, handleDelete}: CardProps) {

  const [inputValue, setInputValue] = React.useState(content);
  const [isComp, setIsComp] = React.useState(false);
  const textFieldRef = React.useRef(null);

  const handleUpdate = async () => {
   try {
     const reponse = await axios({
      method: 'put',
      url: 'http://localhost:5039/api/ToDoItems',
      headers: {},
      data: {
        "id": id,
        "content": inputValue,
        "isComplete": isComplete
      }})
   } catch (error) {
     console.log('Error:', error);
   }
  }
  
  const handleComplete = async () => {
    try {
      const reponse = await axios({
       method: 'put',
       url: 'http://localhost:5039/api/ToDoItems',
       headers: {},
       data: {
         "id": id,
         "content": inputValue,
         "isComplete": isComp
       }})
       setIsComp(true);
    } catch (error) {
      console.log('Error:', error);
    }
   }


  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{ bgcolor: isComp ? 'grey' : 'white' }}>
      <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        ToDo
      </Typography>
      <TextField
          ref={textFieldRef}
          id="standard-multiline-static"
          multiline
          rows={4}
          variant="standard"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
    </CardContent>
    <CardActions>
      <Button variant='outlined' size='small' onClick={handleUpdate}>Update</Button>
      <Button variant='outlined' size='small' onClick={handleComplete} style={{ backgroundColor: isComp ? 'green' : 'inherit'}}>Complete</Button>
      <Button variant='outlined' size='small' onClick={() => handleDelete(id)}>Delete</Button>
    </CardActions>
  </React.Fragment>
      </Card>
    </Box>
  );
}