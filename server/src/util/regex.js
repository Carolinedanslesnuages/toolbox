// eslint-disable-next-line no-useless-escape
export const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// eslint-disable-next-line no-useless-escape
export const emailMI = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@interieur.gouv.fr$/
// eslint-disable-next-line no-useless-escape
export const matricule = /^[0-9]{6,7}$/
//
export const strongPassword = [
  /^.{8,}$/,
  /.*[0-9]+/,
  /.*[A-Z]+/,
  /.*[a-z]+/,
  /.*\W+/,
]
