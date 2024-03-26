import { TextField, Button, Box, Alert, Typography, CircularProgress} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../services/userAuthApi'
import { storeToken } from '../services/LocalStorageService';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';


const Registration = () => {
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      full_name: data.get('fullname'),
      username: data.get('username'),
      religion: data.get('religion'),
      gender: data.get('gender'),
      date_of_birth: data.get('date_of_birth'),
      password: data.get('password'),
      password2: data.get('password2'), 
    }

    const res = await registerUser(actualData)

    if (res.error) {
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      storeToken(res.data.token)
      navigate('/fam')
    }
  }
  return <>
    <Box component='form' noValidate sx={{ mt: 1, maxHeight: 400, overflow: 'auto' }} id='registration-form' onSubmit={handleSubmit}>
      
      <TextField margin='normal' required fullWidth id='fullname' name='fullname' label='Full name' />
      {server_error.full_name ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.full_name[0]}</Typography> : ""}

      <TextField margin='normal' required fullWidth id='username' name='username' label='username' />
      {server_error.username ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.username[0]}</Typography> : ""}

      <TextField margin='normal' required fullWidth id='religion' name='religion' label='Religion' />
      {server_error.religion ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.religion[0]}</Typography> : ""}

      <RadioGroup
          row
          aria-labelledby="gender"
          name="gender"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker format="YYYY-MM-DD" label="Birthday" id="date_of_birth" name="date_of_birth" />
        </DemoContainer>
      </LocalizationProvider>
      {server_error.date_of_birth ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.date_of_birth[0]}</Typography> : ""}

      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
      
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
      
      <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm Password' type='password' />
      {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""}
      
      
      <Box textAlign='center'>
        {isLoading ? <CircularProgress /> : <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Register</Button>}
      </Box>

      {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
    </Box>
  </>;
};

export default Registration;
