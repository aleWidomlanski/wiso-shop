import { FC } from "react";
import { Box, Button } from "@mui/material";
import { ISize } from "../../../interfaces";

interface Props {
    selectedSize?: ISize;
    sizes: ISize[]
}

export const ProducSizeSelector: FC<Props> = ({selectedSize, sizes}) => {
  return (
    <Box>
        {sizes.map((size)=> (
            <Button key={size} size={'small'} color={selectedSize === size ? 'secondary' : 'primary'}>
                {size}
            </Button>
        ))}
    </Box>
  )
}
