import classNames from 'classnames';
import React from 'react';

import './styles.scss';

export interface LoadingProps {
  relative?: boolean;
}
export const Loading: React.FC<LoadingProps> = ({ relative }) => (
  <>
    {!relative && <div className="overlay" />}
    <div className={classNames({ 'loader-ring': true, relative: relative })}>
      <div className="filler">
        <div className="rotate rotate-1" />
        <div className="rotate rotate-2" />
        <div className="rotate-shadow" />
        <div className="scale" />
      </div>
    </div>
  </>
);
