import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // log to console (or send to an error service)
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-start justify-center bg-neutral-50 p-8">
          <div className="w-full max-w-3xl rounded-lg border bg-white p-6 shadow">
            <h1 className="text-xl font-semibold text-red-600">
              Something went wrong
            </h1>
            <p className="mt-2 text-sm text-neutral-700">
              An error occurred while rendering the app. Check the console for
              details.
            </p>

            <details className="mt-4 text-xs whitespace-pre-wrap text-neutral-600">
              {this.state.error && String(this.state.error)}
              {"\n"}
              {this.state.errorInfo?.componentStack}
            </details>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => window.location.reload()}
                className="rounded bg-orange-500 px-4 py-2 text-white"
              >
                Reload
              </button>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(
                    `${this.state.error}\n\n${this.state.errorInfo?.componentStack || ""}`,
                  );
                }}
                className="rounded border px-4 py-2"
              >
                Copy error
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
