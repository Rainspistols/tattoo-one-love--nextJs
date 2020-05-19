class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>somethins went wrong!</h1>;
    }

    return this.props.children;
  }
}
