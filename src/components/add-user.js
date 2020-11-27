import React, { useEffect, useState } from 'react';

const AddUser = (props) => {
  const [player, setPlayer] = useState({});

  const onaddPlayer = () => {
    console.log('player >>>', player)
    // const data = {};
    // props.onLoadPlayers(data);
    props.history.push("users")
  }


  const onPlayerChange = (name, value) => {
    console.log('player >>>', player)
    setPlayer({ ...player, [name]: value });
  }

  console.log('player out >>>', player)
  return <div className="container">
    <h1>Add Player</h1>
    <div className="form-row">
      <div className="form-group col-md-4">
        <input type="text" className="form-control" name="first_name" onChange={e => onPlayerChange(e.target.name, e.target.value)} value={player.first_name} placeholder="First Name" required />
      </div>
      <div className="form-group col-md-4">
        <input type="text" className="form-control" name="last_name" onChange={e => onPlayerChange(e.target.name, e.target.value)} value={player.last_name} placeholder="Last Name" required />
      </div>
      <div className="form-group col-md-4">
        <input type="text" className="form-control" name="username" onChange={e => onPlayerChange(e.target.name, e.target.value)} value={player.username} placeholder="Username" required />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <input type="number" className="form-control" name="number" onChange={e => onPlayerChange(e.target.name, e.target.value)} value={player.number} placeholder="Number" required />
      </div>
      <div className="form-group col-md-6">
        <select onChange={e => onPlayerChange(e.target.name, e.target.value)} value={player.position} name="position" className="form-control" required>
          <option selected disabled>Choose position</option>
          <option>Goalkeeper</option>
          <option>Defender</option>
          <option>Midfielder</option>
          <option>Forward</option>
        </select>
      </div>
      <div className="col-md-12">
        <label for="player-img"><b>Player Image</b></label><br />
        <input type="file" name="image" onChange={e => onPlayerChange(e.target.name, e.target.value)} value={player.image_name} className="" required />
      </div>
    </div>
    <button type="button" className="btn btn-success float-right ml-2" onClick={() => onaddPlayer()}>Add Player</button>
    <button type="button" className="btn float-right ml-2" onClick={() => onaddPlayer()}>Cancel</button>
  </div>
}

export default AddUser;