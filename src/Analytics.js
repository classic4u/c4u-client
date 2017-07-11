import ReactGA from 'react-ga';

ReactGA.initialize('UA-102077362-1', { debug: true })

function logPageView(component) {
  return () => {
    ReactGA.set({ page: window.location.pathname + window.location.hash })
    ReactGA.pageview(window.location.pathname + window.location.hash)

    return component
  }
}

export { logPageView }
