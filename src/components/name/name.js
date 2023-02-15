import React from 'react';
import styles from './name.module.css';
import Box from '@mui/material/Box';

export default function Name () {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
    });
  };
return (
  <div className={styles.contentWrapper}>
      <div className={styles.container}>
        <forms>
          <h3>Enter To Enter</h3>
          <input id="name" type="name" placeholder="Enter your name to enter"/>
          <Box component="forms" noValidate onSubmit={handleSubmit}>
          <button> Save </button>
          <div className={styles.__container}>
            <a href="./Search">Next</a>
          </div>
          </Box>
        </forms>
      </div>
    </div>
);
};
