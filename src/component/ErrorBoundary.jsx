import React from "react"

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen gap-4 bg-red-50 text-red-700">
          <h1 className="text-3xl font-bold">오류가 발생했습니다 😵</h1>
          <p>{this.state.error?.message}</p>
        </div>
      )
    }

    return this.props.children
  }
}
