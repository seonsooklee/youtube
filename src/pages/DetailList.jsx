import React from 'react';
import DetailItem from "./DetailItem";
import RelativeList from "../RelativeList/RelativeList";
import detailList from './DetailList.module.scss'

export default function DetailList(props) {
  return (
    <div className={detailList.wrapper}>
      <DetailItem />
      <RelativeList />
    </div>
  );
}
