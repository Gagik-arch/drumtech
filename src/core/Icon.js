import React, { useMemo } from "react";
import * as Icons from '../../assets/icons';

const Icon = ({type, style = {}, size = 28, ...props}) => {
  if (!type && !Icons.hasOwnProperty(type)) return null;

  const I = Icons[type]

  return <I width={size} height={size} {...props} />;
};

export default Icon;
