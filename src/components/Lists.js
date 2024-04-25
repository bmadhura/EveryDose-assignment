import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CloseButton,
  Input,
  Label,
  Table,
  Row,
  Col,
  Button,
  InputGroup,
} from "reactstrap";
import shortid from "shortid";
import DownChevronIcon from "./Icons/DownChevronIcon";
import UpChevronIcon from "./Icons/UpChevronIcon";

const Lists = (props) => {
  const [inventoryData, setInventoryData] = useState([
    {
      id: "7WegsS6B5",
      name: "Item 1",
      quantity: 2,
    },
  ]);
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [showError, setShowError] = useState(false);

  return (
    <div>
      <h2 className="App-header">Edit List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardHeader>
            <Row>
              <Col md={8}>
                <Label for="itemName">Item Name*</Label>
                <Input
                  value={itemName}
                  id="itemName"
                  onChange={(e) => setItemName(e.target.value)}
                />
                <span>To get started, add 1 or more items</span>
              </Col>
              <Col md={4}>
                <Label for="quantity">Quantity*</Label>
                <InputGroup>
                  <Input
                    value={quantity}
                    id="quantity"
                    type="number"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <Button
                    onClick={() => {
                      const newItem = {
                        id: shortid.generate(),
                        name: itemName,
                        quantity: quantity,
                      };
                      if (itemName.length > 0 && quantity > 0) {
                        setInventoryData((prev) => [...prev, newItem]);
                        setShowError(false);
                      } else {
                        setShowError(true);
                      }
                      setItemName("");
                      setQuantity(0);
                    }}
                    color="primary"
                  >
                    Add
                  </Button>
                </InputGroup>
              </Col>
              {showError && (
                <span style={{ color: "red" }}>Enter Valid values</span>
              )}
            </Row>
          </CardHeader>
          <CardBody>
            <Table striped className="">
              <thead>
                <th>Inventory</th>
              </thead>
              <tbody>
                {inventoryData?.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td style={{ display: "flex", columnGap: "8px" }}>
                        <span>Quantity: {item.quantity}</span>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                          <UpChevronIcon width="14" height="14" />
                          <DownChevronIcon width="10" height="10" />
                        </div>
                      </td>
                      <td
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <CloseButton
                          onClick={() => {
                            setInventoryData(
                              inventoryData.filter(({ id }) => id !== item.id)
                            );
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                disabled={inventoryData.length === 0}
                onClick={() => setInventoryData([])}
                outline
              >
                Clear All
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export { Lists };
