import React from 'react'
import { NfiDi } from './NfiDi.js'
import { NfiReact } from '../components/NfiReact.js'
import {
    CreateMemorization,
    CreateMemorizationFlow
} from '../components/core/'
import {
    NfiRoute,
    NfiRoutes,
} from './NfiRoutes.js'
import * as NfiRedux from './NfiRedux.js'

const mainRoutes = new NfiRoutes()
mainRoutes.addRoute('createMemorizationFlow',  (route, navigator) =>
    <CreateMemorizationFlow navigator={navigator}></CreateMemorizationFlow>
)

NfiDi.register('MainRoutes', mainRoutes)

const createMemorizationRoutes:NfiRoutes = new NfiRoutes()
createMemorizationRoutes.addRoute('createMemorization', (route, navigator) =>
        <CreateMemorization navigator={navigator}></CreateMemorization>
)

NfiDi.register('CreateMemorizationRoutes', createMemorizationRoutes)


export const di = NfiDi
export const MainComponent = NfiReact
export const NfiApp = {
  di: NfiDi,
  MainComponent: NfiReact,
}
