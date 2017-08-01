const table = {
  // SDK包管理表
  packagemanager: {
    type: 'map',
    unikey: 'name',
    sql: 'select * from backend_packagemanager;'
  },
  // 官网导航banner
  bannermanager: {
    type: 'list',
    sql: 'select * from backend_bannermanager where is_shown > 0 order by show_order asc;'
  },
  seomanager: {
    type: 'map',
    unikey: 'name',
    sql: 'select * from backend_seomanager;'
  },
  casetop: {
    type: 'list',
    sql: 'select * from backend_casetop where is_shown > 0 order by show_order asc;'
  },
  casetype: {
    type: 'list',
    sql: 'select * from backend_casetype where is_shown > 0 order by show_order asc;'
  },
  casecontent: {
    type: 'list',
    sql: 'select * from backend_casecontent where is_shown > 0 order by show_order asc;'
  },
  casetopdetail: {
    type: 'map',
    unikey: 'case_name',
    sql: 'select * from backend_casetopdetail where is_shown > 0;'
  },
}

module.exports = table