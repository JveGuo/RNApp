/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconSmileFilling from './IconSmileFilling';
import IconPictureFilling from './IconPictureFilling';
import IconUserFilling from './IconUserFilling';
import IconHomeFilling from './IconHomeFilling';

export type IconNames = 'smile-filling' | 'picture-filling' | 'user-filling' | 'home-filling';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'smile-filling':
      return <IconSmileFilling key="1" {...rest} />;
    case 'picture-filling':
      return <IconPictureFilling key="2" {...rest} />;
    case 'user-filling':
      return <IconUserFilling key="3" {...rest} />;
    case 'home-filling':
      return <IconHomeFilling key="4" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
