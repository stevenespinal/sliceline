import React from "react";
import {Dialog, DialogShadow, Content, Footer, ConfirmButton} from "../FoodDIalog/FoodDialog";

export function OrderDialog({openOrderDialog, setOpenOrderDialog, setOrders}) {
  return openOrderDialog ? (
    <>
      <DialogShadow/>
      <Dialog>
        <Content>
          <h2><span role="img" aria-label="truck">🚚</span> Your order is on the way</h2>
          <p>You have been emailed a confirmation of your order, thanks for choosing Slice Line</p>
        </Content>
        <Footer>
          <ConfirmButton onClick={() => {
            setOrders([]);
            setOpenOrderDialog();
          }}>I'm Still Hungry</ConfirmButton>
        </Footer>
      </Dialog>
    </>
  ) : <div/>
}