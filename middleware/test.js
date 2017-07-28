import conn from '../server/dao/connection.js'

export default async function (context) {
  const urlPath = context.req.path
  let pageData = {}
  switch (urlPath) {
    case '/solution':
      pageData = await conn.query('select * from backend_casetype;')
  }
  context.store.commit('updateData', {
    pageData
  })
}
