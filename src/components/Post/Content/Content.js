// @flow strict
import React from 'react';
import ShareButtons from '../../Layout/ShareButtons';
import styles from './Content.module.scss';
import './Content.css';

type Props = {
  body: string,
  title: string,
  url: string,
  desc: string,
};

const Content = ({ body, title, url, desc, slug }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>

    <ShareButtons url={url + slug} title={title} description={desc} />

    <div
      className={styles['content__body']}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </div>
);

export default Content;
