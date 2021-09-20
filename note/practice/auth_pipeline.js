import _ from 'underscore'

/* pipe */
const pipeline = function() {
  const functions = arguments;
  return seed => _.reduce(functions, (l, r) => r(l), seed)
}

const users = []
const companies = []

const joinAt = attrs =>
  _.extend(attrs, { joinAt: new Date() })

const greeting = member =>
  `${member.name} 회원님은 ${member.id}번째 회원이십니다. 환영합니다.`

const join = (pointer, member) => {
  pointer.push(member)
  member.id = users.length;
  return member
}

const joinUser = pipeline(
  joinAt,
  member => join(users, member),
  greeting
)

const joinCompany = pipeline(
  joinAt,
  member => join(companies, member),
  greeting
)

console.log(
  joinUser({ name: 'JK' }),
  '\n',
  joinCompany({ name: 'NHN' })
)