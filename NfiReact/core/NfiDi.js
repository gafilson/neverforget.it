import * as di4js from 'di4js'

// set the store to autowired
di4js.autowired()

export function get(dependencyName:string) {
  return di4js.resolve(dependencyName)
}

export function register(dependencyName:string, dependencyInstance:any) {
  return di4js.register(dependencyName)
      .instance(dependencyInstance)
      .asSingleton()
}