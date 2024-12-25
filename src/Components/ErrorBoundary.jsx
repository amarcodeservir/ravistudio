import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service
    console.error('Error occurred:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // Customize this fallback UI based on the error type
      return <div>Error: {this.state.errorMessage}</div>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
