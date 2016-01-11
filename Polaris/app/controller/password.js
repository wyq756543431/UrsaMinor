var passportModel = require('../model/passport.js');
var captchaModel = require('../model/captcha.js');
var tclog = require('../libs/tclog.js');
var tokenModel = require('../model/token.js');
var _ = require('underscore');


module.exports = {


  /**
   * 重置密码
   */
  reset: function* () {
    var postBody = this.request.body;
    var headerBody = this.header;
    var traceNo = this.req.traceNo+"";
    var mobile = postBody.mobile;
    var smsCaptcha = postBody.smsCaptcha; //短信验证码(语音)
    try {
      var flag = yield captchaModel.validate4ResetPassword(traceNo, mobile, smsCaptcha);
      tclog.notice({api:'/api/password/reset', traceNo:traceNo, validate_flag:flag});
      var resetInfo = { //登录信息
        source: headerBody.source,
        sysCode: headerBody.syscode,
        traceNo: traceNo,
        mobile: mobile
      };
      var result = yield passportModel.resetPassword(resetInfo);
      tclog.notice({api:'/api/password/reset', traceNo:traceNo, result:result});
      yield this.api({mobile:mobile, msg:'密码已发送'});
    } catch (err) {
      tclog.error({api:'/api/password/reset', traceNo:traceNo, err:err});
      yield this.api_err({error_code : err.err_code, error_msg : err.err_msg});
    }
  },


  /**
   * 修改密码
   */
  change: function* () {
    //TODO 图片验证码
    var postBody = this.request.body;
    var headerBody = this.header;
    var traceNo = this.req.traceNo+"";
    var tokenNo = postBody.access_token;
    tclog.notice({api:'api/logout', traceNo:traceNo, source:headerBody.source, sysCode:headerBody.syscode, tokenNo: tokenNo});
    try {
      var token = yield tokenModel.getToken(traceNo, tokenNo);
      var changeInfo = { //登录信息
        source: headerBody.source,
        sysCode: headerBody.syscode,
        traceNo: traceNo,
        userId: token.uid,
        oldPassword: postBody.oldPassword,
        password: postBody.password
      };
      var result = yield passportModel.changePassword(changeInfo);
      tclog.error({api:'/api/password/change', traceNo:traceNo, result:result});
      yield this.api({access_token:tokenNo, msg:'修改成功'});
    } catch (err) {
      tclog.error({api:'/api/password/change', traceNo:traceNo, err:err});
      yield this.api_err({error_code : err.err_code, error_msg : err.err_msg});
    }
  }
};