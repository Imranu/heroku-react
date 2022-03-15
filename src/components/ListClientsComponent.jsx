import React, { useState, useEffect } from "react";
import ClientService from "../services/ClientService";
import { Link } from "react-router-dom";

const ListClientsComponent = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getAllClients();
  }, []);

  const getAllClients = () => {
    ClientService.getAllClients().then((response) => {
      setClients(response.data);
      console.log(response.data);
    }).catch(error =>{
      console.log(error);
    })
  }

  const deleteClientById = (clientId) => {
    ClientService.deleteClientById(clientId).then((response) => {
      getAllClients();
    }).catch(error =>{
      console.log(error)
    })
  }

  return (
    <div className="container">
      <h2 className="text-center">Clients List</h2>
      <Link to="/add-client" className="btn btn-primary mb-2">
        {" "}
        Add Client{" "}
      </Link>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Client ID</th>
            <th>Client First Name</th>
            <th>Client Last Name</th>
            <th>Client Email</th>
            <th >Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td> {client.id} </td>
              <td> {client.firstName} </td>
              <td> {client.lastName} </td>
              <td> {client.email} </td>
              <td>
                <Link className="btn btn-info" to={`/edit-client/${client.id}`}>
                  {" "}
                  Update{" "}
                </Link>
                <div className="divider" />
                <button className="btn btn-danger" onClick={() => deleteClientById(client.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListClientsComponent;
