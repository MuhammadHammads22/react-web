import { useState } from 'react';
import Registration from './Registration';
import UserLogin from './Login';
import './assets/css/auth_card.css';

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div className={value === index ? '' : 'hidden'} role='tabpanel'>
      {value === index && <div>{children}</div>}
    </div>
  );
};

const AuthCard = () => {
  
  const [value, setValue] = useState(0);

  return (
    <>
      <div className="flex items-center h-screen mt-10 AuthCard">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="border-b">
            <div className="flex justify-between items-center pb-4">
              <button
                className={`text-lg font-bold focus:outline-none ${value === 0 ? 'text-blue-500' : 'text-gray-500'}`}
                onClick={() => setValue(0)}>
                Login
              </button>
              <button 
                className={`text-lg font-bold focus:outline-none ${value === 1 ? 'text-blue-500' : 'text-gray-500'}`}
                onClick={() => setValue(1)}
              >
                Registration
              </button>
            </div>
          </div>

          <div className="mt-4">
            <TabPanel value={value} index={0}>
              <UserLogin />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Registration />
            </TabPanel>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthCard;
