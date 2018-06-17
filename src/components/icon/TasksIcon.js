import React from "react";
import { faTasks } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export const TasksIcon = ({ size }) => (<span className="icon"><FontAwesomeIcon icon={faTasks} size={size}/></span>);