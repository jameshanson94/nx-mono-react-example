import * as React from 'react';

export function Button(props: any) {
  return <button onClick={() => props.onClick()}>V2 {props.children}</button>;
}

export default Button;
