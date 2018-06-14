import React from "react";
import { faUserCircle } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export const UserIcon = (props) => (<span className="icon"><FontAwesomeIcon icon={faUserCircle} {...props}/></span>);