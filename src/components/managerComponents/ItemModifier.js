import React from "react";
import styled from "styled-components";
function ItemModifier() {
  function captureInfo() {
    console.log("click");
  }

  return (
    <Container>
      <div>Insert Item here</div>
      <InsertBox>
        <form id="inventoryMod" class="form-container" />
        <header class="form-header">Modify Inventory </header>
        <fieldset class="form-fieldset">
          <section class="product">
            <label class="form-label">Product:</label>
            <label class="input-label">
              <input type="text" placeholder="item" />
            </label>
          </section>
          <section class="quantity">
            <label for="form-label">
              Quantity:
              <input id="qty" type="number" placeholder="how many?" />
            </label>
          </section>
          <section class="quantity">
            <label for="form-label">
              Total Cost$:
              <input id="cost" type="number" placeholder="how much?" />
            </label>
          </section>
          <input type="submit" onClick={captureInfo} />
        </fieldset>
      </InsertBox>
    </Container>
  );
}

const Container = styled.div`
  border: 2px black solid;
  border-radius: 4px;
`;
const InsertBox = styled.div`
  border: 1px gold solid;
`;
export default ItemModifier;
