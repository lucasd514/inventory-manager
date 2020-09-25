import React from "react";
import styled from "styled-components";
import ItemModifier from "./managerComponents/ItemModifier";
function InventoryManager() {
  return (
    <>
      <Box>
        {" "}
        <InsertInto>
          <ItemModifier />
        </InsertInto>
        <div>inventry box</div>
      </Box>
    </>
  );
}

const Box = styled.div`
  display: flex;
`;

const InsertInto = styled.div`
  background-color: rgb(47, 56, 255, 0.5);
  height: 100vh;
  width: 25vw;
  margin-right: 20px;
  border-right: 3px dashed black;
`;
export default InventoryManager;
