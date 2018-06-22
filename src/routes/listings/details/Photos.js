import cx from "classnames";
import React, { Component, Fragment } from "react";
import { settingsBlock } from "../../../components";
import { UploadIcon } from "../../../components/icon";

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

class PhotosView extends Component {
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

const PhotoEdit = ({ link, type }) => (
  <div className="column">
    <img className="is-3by2" src={link} alt={type}/>
    <button className="button is-danger is-outlined is-small">Delete</button>
  </div>
);

const AddPhoto = () => (
  <div className="column">
    <div className="file is-boxed is-primary is-outlined">
      <label className="file-label">
        <input className="file-input" type="file" name="resume"/>
        <span className="file-cta">
          <span className="file-icon">
            <UploadIcon/>
          </span>
          <span className="file-label">
            Choose a file…
          </span>
        </span>
      </label>
    </div>
  </div>
);

class PhotosEdit extends Component {
  render() {
    const { photos, switchMode } = this.props;
    const columns = Math.floor(photos.length / 3) + 1;
    return (
      <Fragment>
        {range(columns).map(column => (
          <div className="columns" key={column}>
            {range(3).map((row) => (photos[row + column * 3] ?
              <PhotoEdit key={row + column * 3} {...photos[row + column * 3]}/> : null))}
            {column === columns - 1 ? <AddPhoto/> : null}
          </div>
        ))}
        <div className="buttons">
          <a className="button is-primary is-outlined" onClick={switchMode}>Back</a>
        </div>
      </Fragment>
    );
  }
}

const Photos = settingsBlock(
  "Photos",
  PhotosView,
  PhotosEdit
);

export default Photos;