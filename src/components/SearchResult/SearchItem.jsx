import React from 'react';
import searchItem from './SearchItem.module.scss'

export default function SearchItem({snippet, onClick}) {
  return (
    <div className={searchItem.wrapper} onClick={onClick}>
      <img src={snippet.thumbnails.medium.url} alt="thumbnail"/>
      <div>
        <div className={searchItem.title}>{snippet.title}</div>
        <div className={searchItem.date}>{snippet.publishedAt}</div>
        <div className={searchItem.channelTitle}>{snippet.channelTitle}</div>
        <div className={searchItem.description}>{snippet.description}</div>
      </div>
    </div>
  );
}
