//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var common_ttypes = require('./common_types')


var ttypes = module.exports = {};
ttypes.GroupType = {
  'NORMAL' : 0,
  'MANAGER' : 1,
  'ALL' : 999
};
ttypes.QueryType = {
  'USER' : 0,
  'GROUP' : 1
};
ttypes.Source = {
  'WEB' : 0,
  'WEB_APP' : 1,
  'APP' : 2,
  'BACK' : 3,
  'IOS' : 4,
  'ANDROID' : 5
};
UserGroup = module.exports.UserGroup = function(args) {
  this.id = null;
  this.name = null;
  this.description = null;
  this.groupType = null;
  this.managerFlag = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.description !== undefined && args.description !== null) {
      this.description = args.description;
    }
    if (args.groupType !== undefined && args.groupType !== null) {
      this.groupType = args.groupType;
    }
    if (args.managerFlag !== undefined && args.managerFlag !== null) {
      this.managerFlag = args.managerFlag;
    }
  }
};
UserGroup.prototype = {};
UserGroup.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.description = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.groupType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.managerFlag = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserGroup.prototype.write = function(output) {
  output.writeStructBegin('UserGroup');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.STRING, 3);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  if (this.groupType !== null && this.groupType !== undefined) {
    output.writeFieldBegin('groupType', Thrift.Type.I32, 4);
    output.writeI32(this.groupType);
    output.writeFieldEnd();
  }
  if (this.managerFlag !== null && this.managerFlag !== undefined) {
    output.writeFieldBegin('managerFlag', Thrift.Type.I32, 5);
    output.writeI32(this.managerFlag);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CorporationUser = module.exports.CorporationUser = function(args) {
  this.userId = null;
  this.loginName = null;
  this.name = null;
  this.shortName = null;
  this.orgCode = null;
  this.busiCode = null;
  this.taxCode = null;
  this.contractSealCode = null;
  this.bankLicense = null;
  this.category = null;
  this.legalPersonId = null;
  this.type = null;
  this.rtpo = null;
  if (args) {
    if (args.userId !== undefined && args.userId !== null) {
      this.userId = args.userId;
    }
    if (args.loginName !== undefined && args.loginName !== null) {
      this.loginName = args.loginName;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.shortName !== undefined && args.shortName !== null) {
      this.shortName = args.shortName;
    }
    if (args.orgCode !== undefined && args.orgCode !== null) {
      this.orgCode = args.orgCode;
    }
    if (args.busiCode !== undefined && args.busiCode !== null) {
      this.busiCode = args.busiCode;
    }
    if (args.taxCode !== undefined && args.taxCode !== null) {
      this.taxCode = args.taxCode;
    }
    if (args.contractSealCode !== undefined && args.contractSealCode !== null) {
      this.contractSealCode = args.contractSealCode;
    }
    if (args.bankLicense !== undefined && args.bankLicense !== null) {
      this.bankLicense = args.bankLicense;
    }
    if (args.category !== undefined && args.category !== null) {
      this.category = args.category;
    }
    if (args.legalPersonId !== undefined && args.legalPersonId !== null) {
      this.legalPersonId = args.legalPersonId;
    }
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.rtpo !== undefined && args.rtpo !== null) {
      this.rtpo = args.rtpo;
    }
  }
};
CorporationUser.prototype = {};
CorporationUser.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.userId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.loginName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.shortName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.orgCode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.busiCode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.taxCode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.contractSealCode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRING) {
        this.bankLicense = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.category = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.legalPersonId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.type = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.BOOL) {
        this.rtpo = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CorporationUser.prototype.write = function(output) {
  output.writeStructBegin('CorporationUser');
  if (this.userId !== null && this.userId !== undefined) {
    output.writeFieldBegin('userId', Thrift.Type.STRING, 1);
    output.writeString(this.userId);
    output.writeFieldEnd();
  }
  if (this.loginName !== null && this.loginName !== undefined) {
    output.writeFieldBegin('loginName', Thrift.Type.STRING, 2);
    output.writeString(this.loginName);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 3);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.shortName !== null && this.shortName !== undefined) {
    output.writeFieldBegin('shortName', Thrift.Type.STRING, 4);
    output.writeString(this.shortName);
    output.writeFieldEnd();
  }
  if (this.orgCode !== null && this.orgCode !== undefined) {
    output.writeFieldBegin('orgCode', Thrift.Type.STRING, 5);
    output.writeString(this.orgCode);
    output.writeFieldEnd();
  }
  if (this.busiCode !== null && this.busiCode !== undefined) {
    output.writeFieldBegin('busiCode', Thrift.Type.STRING, 6);
    output.writeString(this.busiCode);
    output.writeFieldEnd();
  }
  if (this.taxCode !== null && this.taxCode !== undefined) {
    output.writeFieldBegin('taxCode', Thrift.Type.STRING, 7);
    output.writeString(this.taxCode);
    output.writeFieldEnd();
  }
  if (this.contractSealCode !== null && this.contractSealCode !== undefined) {
    output.writeFieldBegin('contractSealCode', Thrift.Type.STRING, 8);
    output.writeString(this.contractSealCode);
    output.writeFieldEnd();
  }
  if (this.bankLicense !== null && this.bankLicense !== undefined) {
    output.writeFieldBegin('bankLicense', Thrift.Type.STRING, 9);
    output.writeString(this.bankLicense);
    output.writeFieldEnd();
  }
  if (this.category !== null && this.category !== undefined) {
    output.writeFieldBegin('category', Thrift.Type.STRING, 10);
    output.writeString(this.category);
    output.writeFieldEnd();
  }
  if (this.legalPersonId !== null && this.legalPersonId !== undefined) {
    output.writeFieldBegin('legalPersonId', Thrift.Type.STRING, 11);
    output.writeString(this.legalPersonId);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.STRING, 12);
    output.writeString(this.type);
    output.writeFieldEnd();
  }
  if (this.rtpo !== null && this.rtpo !== undefined) {
    output.writeFieldBegin('rtpo', Thrift.Type.BOOL, 13);
    output.writeBool(this.rtpo);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

User = module.exports.User = function(args) {
  this.id = null;
  this.mobile = null;
  this.loginName = null;
  this.name = null;
  this.idNumber = null;
  this.group = null;
  this.source = null;
  this.managerFlag = null;
  this.enabled = null;
  this.enterprise = null;
  this.passportId = null;
  this.registerDate = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.mobile !== undefined && args.mobile !== null) {
      this.mobile = args.mobile;
    }
    if (args.loginName !== undefined && args.loginName !== null) {
      this.loginName = args.loginName;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.idNumber !== undefined && args.idNumber !== null) {
      this.idNumber = args.idNumber;
    }
    if (args.group !== undefined && args.group !== null) {
      this.group = new ttypes.UserGroup(args.group);
    }
    if (args.source !== undefined && args.source !== null) {
      this.source = args.source;
    }
    if (args.managerFlag !== undefined && args.managerFlag !== null) {
      this.managerFlag = args.managerFlag;
    }
    if (args.enabled !== undefined && args.enabled !== null) {
      this.enabled = args.enabled;
    }
    if (args.enterprise !== undefined && args.enterprise !== null) {
      this.enterprise = args.enterprise;
    }
    if (args.passportId !== undefined && args.passportId !== null) {
      this.passportId = args.passportId;
    }
    if (args.registerDate !== undefined && args.registerDate !== null) {
      this.registerDate = args.registerDate;
    }
  }
};
User.prototype = {};
User.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.mobile = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.loginName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.idNumber = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRUCT) {
        this.group = new ttypes.UserGroup();
        this.group.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.source = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.BOOL) {
        this.managerFlag = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.BOOL) {
        this.enabled = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.BOOL) {
        this.enterprise = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I64) {
        this.passportId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.I64) {
        this.registerDate = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

User.prototype.write = function(output) {
  output.writeStructBegin('User');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.mobile !== null && this.mobile !== undefined) {
    output.writeFieldBegin('mobile', Thrift.Type.STRING, 2);
    output.writeString(this.mobile);
    output.writeFieldEnd();
  }
  if (this.loginName !== null && this.loginName !== undefined) {
    output.writeFieldBegin('loginName', Thrift.Type.STRING, 3);
    output.writeString(this.loginName);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 4);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.idNumber !== null && this.idNumber !== undefined) {
    output.writeFieldBegin('idNumber', Thrift.Type.STRING, 5);
    output.writeString(this.idNumber);
    output.writeFieldEnd();
  }
  if (this.group !== null && this.group !== undefined) {
    output.writeFieldBegin('group', Thrift.Type.STRUCT, 6);
    this.group.write(output);
    output.writeFieldEnd();
  }
  if (this.source !== null && this.source !== undefined) {
    output.writeFieldBegin('source', Thrift.Type.STRING, 7);
    output.writeString(this.source);
    output.writeFieldEnd();
  }
  if (this.managerFlag !== null && this.managerFlag !== undefined) {
    output.writeFieldBegin('managerFlag', Thrift.Type.BOOL, 8);
    output.writeBool(this.managerFlag);
    output.writeFieldEnd();
  }
  if (this.enabled !== null && this.enabled !== undefined) {
    output.writeFieldBegin('enabled', Thrift.Type.BOOL, 9);
    output.writeBool(this.enabled);
    output.writeFieldEnd();
  }
  if (this.enterprise !== null && this.enterprise !== undefined) {
    output.writeFieldBegin('enterprise', Thrift.Type.BOOL, 10);
    output.writeBool(this.enterprise);
    output.writeFieldEnd();
  }
  if (this.passportId !== null && this.passportId !== undefined) {
    output.writeFieldBegin('passportId', Thrift.Type.I64, 11);
    output.writeI64(this.passportId);
    output.writeFieldEnd();
  }
  if (this.registerDate !== null && this.registerDate !== undefined) {
    output.writeFieldBegin('registerDate', Thrift.Type.I64, 12);
    output.writeI64(this.registerDate);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserInit = module.exports.UserInit = function(args) {
  this.mobile = null;
  this.loginName = null;
  this.passportId = null;
  this.source = null;
  this.registerDate = null;
  if (args) {
    if (args.mobile !== undefined && args.mobile !== null) {
      this.mobile = args.mobile;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field mobile is unset!');
    }
    if (args.loginName !== undefined && args.loginName !== null) {
      this.loginName = args.loginName;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field loginName is unset!');
    }
    if (args.passportId !== undefined && args.passportId !== null) {
      this.passportId = args.passportId;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field passportId is unset!');
    }
    if (args.source !== undefined && args.source !== null) {
      this.source = args.source;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field source is unset!');
    }
    if (args.registerDate !== undefined && args.registerDate !== null) {
      this.registerDate = args.registerDate;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field registerDate is unset!');
    }
  }
};
UserInit.prototype = {};
UserInit.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.mobile = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.loginName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.passportId = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.source = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.registerDate = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserInit.prototype.write = function(output) {
  output.writeStructBegin('UserInit');
  if (this.mobile !== null && this.mobile !== undefined) {
    output.writeFieldBegin('mobile', Thrift.Type.STRING, 1);
    output.writeString(this.mobile);
    output.writeFieldEnd();
  }
  if (this.loginName !== null && this.loginName !== undefined) {
    output.writeFieldBegin('loginName', Thrift.Type.STRING, 2);
    output.writeString(this.loginName);
    output.writeFieldEnd();
  }
  if (this.passportId !== null && this.passportId !== undefined) {
    output.writeFieldBegin('passportId', Thrift.Type.I64, 3);
    output.writeI64(this.passportId);
    output.writeFieldEnd();
  }
  if (this.source !== null && this.source !== undefined) {
    output.writeFieldBegin('source', Thrift.Type.I32, 4);
    output.writeI32(this.source);
    output.writeFieldEnd();
  }
  if (this.registerDate !== null && this.registerDate !== undefined) {
    output.writeFieldBegin('registerDate', Thrift.Type.I64, 5);
    output.writeI64(this.registerDate);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserNameAndIdInfo = module.exports.UserNameAndIdInfo = function(args) {
  this.id = null;
  this.name = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
  }
};
UserNameAndIdInfo.prototype = {};
UserNameAndIdInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserNameAndIdInfo.prototype.write = function(output) {
  output.writeStructBegin('UserNameAndIdInfo');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserPage = module.exports.UserPage = function(args) {
  this.totalCount = null;
  this.userList = null;
  if (args) {
    if (args.totalCount !== undefined && args.totalCount !== null) {
      this.totalCount = args.totalCount;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field totalCount is unset!');
    }
    if (args.userList !== undefined && args.userList !== null) {
      this.userList = Thrift.copyList(args.userList, [ttypes.User]);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field userList is unset!');
    }
  }
};
UserPage.prototype = {};
UserPage.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I64) {
        this.totalCount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.userList = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.User();
          elem6.read(input);
          this.userList.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserPage.prototype.write = function(output) {
  output.writeStructBegin('UserPage');
  if (this.totalCount !== null && this.totalCount !== undefined) {
    output.writeFieldBegin('totalCount', Thrift.Type.I64, 1);
    output.writeI64(this.totalCount);
    output.writeFieldEnd();
  }
  if (this.userList !== null && this.userList !== undefined) {
    output.writeFieldBegin('userList', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.userList.length);
    for (var iter7 in this.userList)
    {
      if (this.userList.hasOwnProperty(iter7))
      {
        iter7 = this.userList[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

