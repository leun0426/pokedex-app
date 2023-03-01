import React from "react";
import { Button } from "@chakra-ui/react";

type ButtonComponentProps = {
  buttonName: string;
  params?: string | Object | null;
  handleClick: (query: string |Object | null) => void;
  id: string;
}

export const ButtonComponent: React.FC <ButtonComponentProps> =
  ({buttonName, id, params, handleClick}) => {

    return (
      <Button id={id} onClick={() => handleClick(params || null)}
       >{buttonName}</Button>
    )
}