import { combineEpics } from 'redux-observable'
import { connectAnalyticsServiceToOpenFinEpic } from './analyticsServiceEpic'
import { analyticsServiceEpic } from './epics'

const epics = [analyticsServiceEpic]

if (typeof fin) {
  epics.push(connectAnalyticsServiceToOpenFinEpic)
}

export default combineEpics(...epics)
