const test = require('tape')
const request = require("supertest")

const server = require("../server")

test('tests are working', t => {
  t.pass()
  t.end()
})

test('/save redirects to /myunicorn', t => {
  const expected = 302
  request(server)
    .get('/')
    .expect(302)
    .end((err, res) => {
      t.error(err)
      t.equals(res.statusCode, expected)
      t.end()
    })
})
