import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadPlayers } from '../action';
import { selectPlayers } from '../selector';

const Users = (props) => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (!rendered) {
      props.onLoadPlayers();
      setRendered(true);
    }
  }, [props.player]);


  // const showAddPopup = () => {
  //   console.log('props', props)
  //   props.history.push("add-user")
  // }

  return <div>
    <a href="/add-user" className="btn btn-sm btn-primary">New Player</a>
    <button onClick={(e) => { e.preventDefault(); console.log('innnn') }}>New Player12</button>
    <table className="table table-hovered">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Image</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Position</th>
          <th scope="col">Number</th>
          <th scope="col">Username</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {(props.playerList || []).map((player, index) => (
          <tr key={index}>
            <th scope="row">{player.id}</th>
            <td><img src={`http://localhost:5000/assets/img/${player.image}`} className="rounded-circle player-img" alt="" /></td>
            <td>{player.first_name}</td>
            <td>{player.last_name}</td>
            <td>{player.position}</td>
            <td>{player.number}</td>
            <td>@{player.user_name}</td>
            <td>
              <a href="/edit/{player.id}" target="_blank" rel="noopener" className="btn btn-sm btn-success">Edit</a>
              <a href="/delete/{player.id}" className="btn btn-sm btn-danger">Delete</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}

const mapStateToProps = createStructuredSelector({
  playerList: selectPlayers(),
})

const mapDispatchToProps = dispatch => {
  return {
    onLoadPlayers: () => dispatch(loadPlayers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);