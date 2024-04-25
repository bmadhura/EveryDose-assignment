import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Card, CardBody } from "reactstrap";

const Home = (props) => {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    setInventoryData(JSON.parse(window.localStorage.getItem('data')));
  }, []);

  return (
    <div>
      <h2 className="App-header mb-3">Inventory List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardBody>
            <Table striped className="">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
              {inventoryData?.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <button className="btn btn-primary">
              <Link className="nav-link" to="/lists">
                Edit List
              </Link>
            </button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export { Home };
