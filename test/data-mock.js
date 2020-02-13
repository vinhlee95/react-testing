import faker from 'faker'

export const mockUser = () => ({
  id: faker.random.uuid()
})

export const mockPost = () => ({
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraph()
})