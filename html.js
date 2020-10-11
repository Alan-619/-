
var app = {
  name: 'ast',
  version: '1.0.0',
  html: function (e) {
    let json = JSON.stringify(e)
    var html = `
    <script>
      let a = ${json}
      console.log(a)
    </script>`
    return html
  }
}
module.exports = app;