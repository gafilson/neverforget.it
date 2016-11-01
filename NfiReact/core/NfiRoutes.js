export class NfiRoute {
  constructor(nameString:string, renderSceneFunction:Function) {
    this.name = nameString
    this.renderScene = renderSceneFunction
  }
}

export class NfiRoutes {

  static DEFAULT_RENDER_SCENE = (route:NfiRoute, navigator) => {
    return route.renderScene(route, navigator)
  }

  constructor() {
    this.routes = {}
    this.routeStack = []
  }

  addRoute(routeName:string, renderSceneFunction:Function) {
    var route = new NfiRoute(routeName, renderSceneFunction)
    this.routes[routeName] = route
    this.routeStack.push(route)
  }

  getRoute(routeName:string):NfiRoute {
    return this.routes[routeName]
  }
}