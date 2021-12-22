import React from 'react';
import {useModel} from './Splash.hook';
import {Props} from './types';
import {Intro} from './Block/Intro';
import {Landing} from './Block/Landing';

export const Splash: React.FC<Props> = props => {
  const {intro, _introSuccess} = useModel(props);

  return intro ? (
    <Intro {...props} result={_introSuccess} />
  ) : (
    <Landing {...props} />
  );
};
