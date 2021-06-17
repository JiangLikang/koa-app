const transToController = data => async ctx => {
  // const { name, age } = ctx.request.query;
  ctx.body = data
}


module.exports = transToController
