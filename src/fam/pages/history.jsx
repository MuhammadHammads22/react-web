import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getToken, removeToken } from '../../services/LocalStorageService';
import { useGetFamHistoryQuery } from '../../services/famApis';

const FAMHistory = () => {
  const { access_token } = getToken();

  const { data, isSuccess } = useGetFamHistoryQuery(access_token);

  return (
    <>
      <CssBaseline />
      <p>{data}</p>
      <Grid container>
        <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
          <h1>Fam history</h1>
          {isSuccess && data && (
            <>
              {data.map((post) => (
                <div key={post.id}>
                  <Typography variant='h5'>id: {post.id}</Typography>
                  <Typography variant='h6'>Seeker: {post.seeker}</Typography>
                </div>
              ))}
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default FAMHistory;
