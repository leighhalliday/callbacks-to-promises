import React from "react";

const getCurrentPosition = (options = {}) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

export default class YourLocation extends React.Component {
  state = {
    locationState: "LOADING",
    error: null,
    coords: null
  };

  componentDidMount() {
    this.loadLocation();
  }

  loadLocation = async () => {
    try {
      const position = await getCurrentPosition();
      this.setState({ locationState: "SUCCESS", coords: position.coords });
    } catch (e) {
      this.setState({ locationState: "ERROR", error: e.message });
    }
  };

  render() {
    const { locationState, error, coords } = this.state;

    if (locationState === "LOADING") {
      return <div>Loading...</div>;
    }
    if (locationState === "ERROR") {
      return <div>{error}</div>;
    }

    return (
      <div>
        Latitude: {coords.latitude}, Longitude: {coords.longitude}
      </div>
    );
  }
}
