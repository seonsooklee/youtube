import React from 'react';
import BaseHeader from "../components/BaseHeader/BaseHeader";
import {Outlet} from "react-router-dom";

export default function Root(props) {
  return (
    <div className={'page'}>
      <BaseHeader/>
      <Outlet />
    </div>
  );
}

