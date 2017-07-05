import ReactGA from 'react-ga';

ReactGA.initialize('UA-102077362-1', { debug: true })

function logLinkClick() {
  ReactGA.set({ page: window.location.pathname + window.location.search })
  ReactGA.pageview(window.location.pathname + window.location.search)
}

function logPageView() {

}

export { logLinkClick, logPageView }
