import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactMap extends Component {
  static defaultProps = {
    center: {
        lat:12.9716,
        lng:77.5946
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh' }}>
        <GoogleMapReact
       //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={12.9716}
            lng={77.5946}
            text={<i className="zmdi zmdi-pin zmdi-hc-fw" />}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default ContactMap;