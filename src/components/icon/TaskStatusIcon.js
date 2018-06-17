import React from "react";
import { faCheckCircle, faSync } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { UPDATING_STATUS } from "../../reducers/tasks.actions";

export const TaskStatusIcon = ({ status }) => status === UPDATING_STATUS
  ? (<span className="icon"><FontAwesomeIcon icon={faSync}/></span>)
  : (<span className="icon has-text-success"><FontAwesomeIcon icon={faCheckCircle}/></span>);