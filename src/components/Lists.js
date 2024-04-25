import React, { useEffect, useState } from "react";
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
  Alert,
} from "reactstrap";
import shortid from "shortid";
import DownChevronIcon from "./Icons/DownChevronIcon";
import UpChevronIcon from "./Icons/UpChevronIcon";
import "./Lists.css";

const Lists = (props) => {
  const [inventoryData, setInventoryData] = useState(JSON.parse(window.localStorage.getItem('data')) ?? []);
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [showError, setShowError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(()=>{
    window.localStorage.setItem('data', JSON.stringify(inventoryData));
  }, [inventoryData]);

  const onAddClick = () => {
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
  }

  const onUpChevronClick = (item) => {
    const newQuantity = Number(item.quantity) + 1;
    setInventoryData((prev) => prev.map((i) => i.id === item.id ? { ...i, quantity: newQuantity } : i));
  }

  const onDownChevronClick = (item) => {
    const newQuantity = Number(item.quantity) - 1;
    if (newQuantity >= 0) setInventoryData((prev) => prev.map((i) => i.id === item.id ? { ...i, quantity: newQuantity } : i));
    else setShowAlert(true)
  }

  return (
    <div>
      <Alert color="danger" isOpen={showAlert} toggle={() => setShowAlert(false)}>
        Quantity can not be less than zero
      </Alert>
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
                    onClick={onAddClick}
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
                      <td>
                        <div className="quantityContainer">
                          <span>Quantity: {item.quantity}</span>
                          <div className="upDownChevronContainer">
                            <UpChevronIcon style={{ cursor: 'pointer' }} width="14" height="14" onClick={() => onUpChevronClick(item)} />
                            <DownChevronIcon style={{ cursor: 'pointer' }} width="10" height="10" onClick={() => onDownChevronClick(item)} />
                          </div>
                        </div>
                      </td>
                      <td className="flexEndContainer">
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
            <div className="flexEndContainer">
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
