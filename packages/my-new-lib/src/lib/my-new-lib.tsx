import { Button } from '@mui/material';

/* eslint-disable-next-line */
export interface MyNewLibProps {}

export function MyNewLib(props: MyNewLibProps) {
  return (
    <div>
      <h1>Welcome to MyNewLib!</h1>
      <Button>Hello</Button>
    </div>
  );
}

export default MyNewLib;
