import React from 'react';
import detailItem from './DetailItem.module.scss'

export default function DetailItem({detail}) {
  return (
    <div className={detailItem.wrapper}>
      <div>
        <img src={detail.thumbnails.high.url} alt=""/>
        <div className={detailItem.title}>{detail.title}</div>
        <div className={detailItem.description}>{detail.description}</div>
      </div>
    </div>
  );
}
