import React from 'react';
import detailItem from './DetailItem.module.scss'

export default function DetailItem({snippet}) {
  return (
    <div className={detailItem.wrapper}>
      <img src={snippet.thumbnails.high.url} alt="thumbnails"/>
      <div>
        <div className={detailItem.title}>{snippet.title}</div>
        <div className={detailItem.description}>{snippet.description}</div>
      </div>
    </div>
  );
}
