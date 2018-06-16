import React from "react";
import { faCheckCircle } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export const SystemStatusIcon = ({ size }) => (<span className="icon"><FontAwesomeIcon icon={faCheckCircle} size={size}/></span>);