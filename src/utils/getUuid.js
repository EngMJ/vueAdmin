import UUID from 'uuidjs'

export function getID() {
  return UUID.genV4().toString()
}
