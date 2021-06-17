const response = () => {
  return async (ctx, next) => {
    ctx.res.fail = ({ code, data, msg }) => {
      ctx.body = {
        code,
        data,
        msg
      };
    };

    ctx.res.success = msg => {
      ctx.body = {
        // code: 0,
        data: ctx.body,
        // msg: msg || 'success'
        success: true
      };
    };

    await next();
  };
};

module.exports = response;
