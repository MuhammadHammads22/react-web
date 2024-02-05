import { TextField, FormControlLabel, Button, Box, Alert, Typography, FormLabel, RadioGroup } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../services/userAuthApi'
import { storeToken } from '../../services/LocalStorageService';

const Registration = () => {
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('fullname'),
      username: data.get('username'),
      email: data.get('email'),
      gender: data.get('gender'),
      date_of_birth: data.get('date_of_birth'),
      religion: data.get('religion'),
      password: data.get('password'),
      password2: data.get('password2'),
    }
    console.log(actualData)
    
    try {
      const res = await registerUser(actualData);
    
      if (res.error) {
        // Handle the error
        console.error('Error:', res.error.error);
        if (res.error.data) {
          setServerError(res.error.data.errors);
        } else {
          // Handle other types of errors if needed
        }
      }
    
      if (res.data) {
        console.log(typeof res.data);
        console.log(res.data);
        storeToken(res.data.token);
        navigate('/dashboard');
      }
    } catch (error) {
      // Handle the network error
      console.error('Network Error:', error.message);
      // You can set a state to display a user-friendly message or perform other actions
    }
  }
  return <>
    <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
      
      <TextField margin='normal' required fullWidth id='fullname' name='fullname' label='Full name' />
      {server_error.fullname ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.fullname[0]}</Typography> : ""}

      <TextField margin='normal' required fullWidth id='username' name='username' label='username' />
      {server_error.username ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.username[0]}</Typography> : ""}

      <TextField margin='normal' required fullWidth id='religion' name='religion' label='Religion' />
      {server_error.religion ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.religion[0]}</Typography> : ""}

      <label htmlFor="gender">Gender</label>
      <select name="gender" id="gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <label htmlFor="date_of_birth">Birthday:</label>
      <input type="date" id="date_of_birth" name="date_of_birth" /> 
      {server_error.date_of_birth ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.date_of_birth[0]}</Typography> : ""}


      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
      
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
      
      <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm Password' type='password' />
      {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""}
      
      
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Join</Button>
      </Box>
      {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
    </Box>
  </>;
};

export default Registration;
