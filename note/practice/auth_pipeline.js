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

const joinUser = pipeline(
  joinAt,
  member => {
    users.push(member)
    member.id = users.length;
    return member
  },
  greeting
)

const joinCompany = pipeline(
  joinAt,
  member => {
    companies.push(member)
    member.id = companies.length
    return member
  },
  greeting
)

console.log(
  joinUser({ name: 'JK' }),
  '\n',
  joinCompany({ name: 'NHN' })
)