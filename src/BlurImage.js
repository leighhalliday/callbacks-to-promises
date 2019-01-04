import React from "react";

// const loadImageWithPromise = src =>
//   new Promise(resolve => {
//     const image = new Image();
//     image.onload = resolve;
//     image.src = src;
//   });

const loadImageWithPromiseTimeout = src =>
  new Promise((resolve, reject) => {
    const image = new Image();

    const timeout = setTimeout(() => {
      image.onload = null;
      reject();
    }, 1000);

    image.onload = () => {
      clearTimeout(timeout);
      resolve();
    };

    image.src = src;
  });

export default class BlurImage extends React.Component {
  state = {
    loaded: false
  };

  componentDidMount() {
    this.awaitImage();
  }

  awaitImage = async () => {
    try {
      await loadImageWithPromiseTimeout(this.props.src);
      this.setState({ loaded: true });
    } catch {
      console.error(`Unable to load ${this.props.src} in 1s`);
    }
  };

  render() {
    const { loaded } = this.state;
    const { src, base64, alt } = this.props;
    const currentSrc = loaded ? src : base64;

    return <img {...this.props} alt={alt} src={currentSrc} />;
  }
}
