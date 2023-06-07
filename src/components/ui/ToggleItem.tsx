import { ReactNode, useState } from 'react';
import { Box } from '@mui/material';

interface Props {
  id: number;
  title: string;
  desc: ReactNode;
}

const ToggleItem = ({ title, desc, id }: Props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Box sx={{}} key={id}>
      <button
        className="h-head"
        onClick={() => setToggle((prev) => !prev)}
      >
        click this btn for toggle h-info block {id}
      </button>

      {toggle ? (
        <Box sx={{ bgcolor: 'green' }}>{title}</Box>
      ) : (
        <Box sx={{ bgcolor: 'red' }}>{desc}</Box>
      )}
    </Box>
  );
};

export default ToggleItem;
