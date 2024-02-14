import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getToken, removeToken } from '../../services/LocalStorageService';
import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../../features/userSlice';
import { useGetFamListQuery } from '../../services/famApis';

const FAMHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { access_token } = getToken();

  const { data, isSuccess } = useGetFamListQuery(access_token);

  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
          <h1>Fam Objects</h1>
          {/* Check if data is fetched successfully */}
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

export default FAMHome;
