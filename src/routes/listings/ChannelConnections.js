import React from "react";
import { bindActionCreators } from "redux";
import { Switch } from "../../components";
import { connectAndLoad } from "../../components/connectAndLoad";
import { listChannels, toggleChannel } from "../../reducers/channels.actions";
import { CONNECTED } from "../../reducers/listings.actions";

const ChannelConnections = ({ channels: { booking, airBnB, avito }, toggleChannel }) => (
  <section className="section">
    <div className="container">
      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <h1 className="heading">Channel</h1>
            <h2 className="title">Status</h2>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <h1 className="heading">AirBnB</h1>
            <Switch
              checked={airBnB.status === CONNECTED}
              onClick={() => toggleChannel("airBnB", airBnB.status)}/>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <h1 className="heading">Booking</h1>
            <Switch
              checked={booking.status === CONNECTED}
              onClick={() => toggleChannel("booking", booking.status)}/>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <h1 className="heading">Avito</h1>
            <Switch
              checked={avito.status === CONNECTED}
              onClick={() => toggleChannel("avito", avito.status)}
            />
          </div>
        </div>
      </nav>
    </div>
  </section>
);

const mapStateToProps = ({ channels }) => ({ channels });
const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    listChannels,
    toggleChannel
  },
  dispatch
);

export default connectAndLoad(mapStateToProps, mapDispatchToProps)({ listChannels }, ChannelConnections);