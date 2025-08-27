"use client";
import React, { Fragment } from 'react';
import Swicther from '@/shared/layout-components/swicther/swicther';

const AuthenticationLayout = ({ children }) => {

  return (
    <Fragment>
      <Swicther />
      <div>
        {children}
      </div>
    </Fragment>
  );
};

export default AuthenticationLayout;
