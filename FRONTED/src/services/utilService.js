import ShortUniqueId from "short-unique-id"


function generateId(length = 5) {
  const { randomUUID } = new ShortUniqueId()
  return randomUUID(length)
}

export const utilService = { generateId }