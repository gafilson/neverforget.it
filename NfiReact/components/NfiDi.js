import * as di from 'di4js'

// set the store to autowired
di.autowired()

export function get(dependencyName:string) {
  return di.resolve(dependencyName)
}

export function register(dependencyName:string, dependencyInstance:any) {
  return di.register(dependencyName).instance(dependencyInstance)
}