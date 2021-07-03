import React from 'react';
import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa';

const Icon = ({player})=> {
  switch (player) {
    case "X":
      return <FaTimes className="icon" />
    case "O":
      return <FaRegCircle className="icon" />
    default:
      return <FaPen className="icon" />
  }
}
export default Icon;