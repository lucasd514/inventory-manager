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
  margin-right: 20px;
`;
export default InventoryManager;
