import React, { Fragment, Component } from "react";
import cx from "classnames";

const range = (n) => [...Array(n).keys()];

const ListingPhoto = ({ link, type }) => (
  <div className="column">
    <img className="is-3by2" src={link} alt={type}/>
  </div>
);

const ListingPhotoPagination = ({ position, total, onSelect }) => (
  <div className="tabs is-toggle is-small">
    <ul>
      {range(total).map((some, i) => (
        <li key={i} className={cx({ "is-active": i === position })} onClick={() => onSelect(i)}>
          <a>{i + 1}</a>
        </li>
      ))}
    </ul>
  </div>
);

class ListingPhotos extends Component {
  state = { position: 0 };

  handlePositionChange = (position) => {
    this.setState({ position })
  };

  render() {
    const { photos } = this.props;
    const { position } = this.state;
    return (
      <Fragment>
        <div className="columns">
          {range(3).map((i) => (<ListingPhoto key={i + position} {...photos[i + position]}/>))}
        </div>
        <ListingPhotoPagination position={position} total={photos.length} onSelect={this.handlePositionChange}/>
      </Fragment>
    );
  }
}

export default ListingPhotos;