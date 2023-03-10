import React from 'react';
import styles from './forgot_pass.module.css';

const ForgotPass = () => (
  <div className={styles.contentWrapper}>
      <div className={styles.container}>
        <forms>
          <h1>Forgot Password</h1>
          <input type="E-mail" placeholder="Enter the registered E-Mail Id"/>
          <input type="OTP" placeholder="Enter the OTP sent to your registered E-Mail Id"/>
          <input type="New Password" placeholder="Enter the new Password" />
          <input type="Confirm New Password" placeholder="Re-enter the new password to confirm" />

          <button>Save</button>
          <div className={styles.__container}>
            <a href="./login">Back to login page || Login</a>
          </div>
        </forms>
      </div>
    </div>
);


ForgotPass.defaultProps = {};

export default ForgotPass;
