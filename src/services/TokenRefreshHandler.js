import React, { useEffect } from 'react';
import { handleTokenRefresh } from './LocalStorageService';

const TokenRefreshHandler = () => {
  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        await handleTokenRefresh();
      } catch (error) {
        console.error('Failed to refresh access token:', error);
      }
    };

    refreshAccessToken();
  }, []);

  return null; // Since this is a utility component, it doesn't render anything
};

export default TokenRefreshHandler;