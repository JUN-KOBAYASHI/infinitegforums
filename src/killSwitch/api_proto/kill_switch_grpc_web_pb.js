/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var api_proto_common_pb = require('../api_proto/common_pb.js')

var api_proto_kill_switch_objects_pb = require('../api_proto/kill_switch_objects_pb.js')
const proto = require('./kill_switch_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.KillSwitchServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.KillSwitchServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetKillSwitchStatusRequest,
 *   !proto.GetKillSwitchStatusResponse>}
 */
const methodDescriptor_KillSwitchService_GetKillSwitchStatus = new grpc.web.MethodDescriptor(
  '/KillSwitchService/GetKillSwitchStatus',
  grpc.web.MethodType.UNARY,
  proto.GetKillSwitchStatusRequest,
  proto.GetKillSwitchStatusResponse,
  /**
   * @param {!proto.GetKillSwitchStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetKillSwitchStatusResponse.deserializeBinary
);


/**
 * @param {!proto.GetKillSwitchStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GetKillSwitchStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetKillSwitchStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.KillSwitchServiceClient.prototype.getKillSwitchStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/KillSwitchService/GetKillSwitchStatus',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_GetKillSwitchStatus,
      callback);
};


/**
 * @param {!proto.GetKillSwitchStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetKillSwitchStatusResponse>}
 *     Promise that resolves to the response
 */
proto.KillSwitchServicePromiseClient.prototype.getKillSwitchStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/KillSwitchService/GetKillSwitchStatus',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_GetKillSwitchStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetKillSwitchOverviewRequest,
 *   !proto.GetKillSwitchOverviewResponse>}
 */
const methodDescriptor_KillSwitchService_GetKillSwitchOverview = new grpc.web.MethodDescriptor(
  '/KillSwitchService/GetKillSwitchOverview',
  grpc.web.MethodType.UNARY,
  proto.GetKillSwitchOverviewRequest,
  proto.GetKillSwitchOverviewResponse,
  /**
   * @param {!proto.GetKillSwitchOverviewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetKillSwitchOverviewResponse.deserializeBinary
);


/**
 * @param {!proto.GetKillSwitchOverviewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GetKillSwitchOverviewResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetKillSwitchOverviewResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.KillSwitchServiceClient.prototype.getKillSwitchOverview =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/KillSwitchService/GetKillSwitchOverview',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_GetKillSwitchOverview,
      callback);
};


/**
 * @param {!proto.GetKillSwitchOverviewRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetKillSwitchOverviewResponse>}
 *     Promise that resolves to the response
 */
proto.KillSwitchServicePromiseClient.prototype.getKillSwitchOverview =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/KillSwitchService/GetKillSwitchOverview',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_GetKillSwitchOverview);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ListFeaturesRequest,
 *   !proto.ListFeaturesResponse>}
 */
const methodDescriptor_KillSwitchService_ListFeatures = new grpc.web.MethodDescriptor(
  '/KillSwitchService/ListFeatures',
  grpc.web.MethodType.UNARY,
  proto.ListFeaturesRequest,
  proto.ListFeaturesResponse,
  /**
   * @param {!proto.ListFeaturesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListFeaturesResponse.deserializeBinary
);


/**
 * @param {!proto.ListFeaturesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ListFeaturesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ListFeaturesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.KillSwitchServiceClient.prototype.listFeatures =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/KillSwitchService/ListFeatures',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_ListFeatures,
      callback);
};


/**
 * @param {!proto.ListFeaturesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ListFeaturesResponse>}
 *     Promise that resolves to the response
 */
proto.KillSwitchServicePromiseClient.prototype.listFeatures =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/KillSwitchService/ListFeatures',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_ListFeatures);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SyncFeaturesRequest,
 *   !proto.SyncFeaturesResponse>}
 */
const methodDescriptor_KillSwitchService_SyncFeatures = new grpc.web.MethodDescriptor(
  '/KillSwitchService/SyncFeatures',
  grpc.web.MethodType.UNARY,
  proto.SyncFeaturesRequest,
  proto.SyncFeaturesResponse,
  /**
   * @param {!proto.SyncFeaturesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SyncFeaturesResponse.deserializeBinary
);


/**
 * @param {!proto.SyncFeaturesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SyncFeaturesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SyncFeaturesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.KillSwitchServiceClient.prototype.syncFeatures =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/KillSwitchService/SyncFeatures',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_SyncFeatures,
      callback);
};


/**
 * @param {!proto.SyncFeaturesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SyncFeaturesResponse>}
 *     Promise that resolves to the response
 */
proto.KillSwitchServicePromiseClient.prototype.syncFeatures =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/KillSwitchService/SyncFeatures',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_SyncFeatures);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EnableKillSwitchRequest,
 *   !proto.EnableKillSwitchResponse>}
 */
const methodDescriptor_KillSwitchService_EnableKillSwitch = new grpc.web.MethodDescriptor(
  '/KillSwitchService/EnableKillSwitch',
  grpc.web.MethodType.UNARY,
  proto.EnableKillSwitchRequest,
  proto.EnableKillSwitchResponse,
  /**
   * @param {!proto.EnableKillSwitchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.EnableKillSwitchResponse.deserializeBinary
);


/**
 * @param {!proto.EnableKillSwitchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.EnableKillSwitchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.EnableKillSwitchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.KillSwitchServiceClient.prototype.enableKillSwitch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/KillSwitchService/EnableKillSwitch',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_EnableKillSwitch,
      callback);
};


/**
 * @param {!proto.EnableKillSwitchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.EnableKillSwitchResponse>}
 *     Promise that resolves to the response
 */
proto.KillSwitchServicePromiseClient.prototype.enableKillSwitch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/KillSwitchService/EnableKillSwitch',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_EnableKillSwitch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DisableKillSwitchRequest,
 *   !proto.DisableKillSwitchResponse>}
 */
const methodDescriptor_KillSwitchService_DisableKillSwitch = new grpc.web.MethodDescriptor(
  '/KillSwitchService/DisableKillSwitch',
  grpc.web.MethodType.UNARY,
  proto.DisableKillSwitchRequest,
  proto.DisableKillSwitchResponse,
  /**
   * @param {!proto.DisableKillSwitchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DisableKillSwitchResponse.deserializeBinary
);


/**
 * @param {!proto.DisableKillSwitchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.DisableKillSwitchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DisableKillSwitchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.KillSwitchServiceClient.prototype.disableKillSwitch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/KillSwitchService/DisableKillSwitch',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_DisableKillSwitch,
      callback);
};


/**
 * @param {!proto.DisableKillSwitchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DisableKillSwitchResponse>}
 *     Promise that resolves to the response
 */
proto.KillSwitchServicePromiseClient.prototype.disableKillSwitch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/KillSwitchService/DisableKillSwitch',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_DisableKillSwitch);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ListAuthorizedUsersRequest,
 *   !proto.ListAuthorizedUsersResponse>}
 */
const methodDescriptor_KillSwitchService_ListAuthorizedUsers = new grpc.web.MethodDescriptor(
  '/KillSwitchService/ListAuthorizedUsers',
  grpc.web.MethodType.UNARY,
  proto.ListAuthorizedUsersRequest,
  proto.ListAuthorizedUsersResponse,
  /**
   * @param {!proto.ListAuthorizedUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListAuthorizedUsersResponse.deserializeBinary
);


/**
 * @param {!proto.ListAuthorizedUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ListAuthorizedUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ListAuthorizedUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.KillSwitchServiceClient.prototype.listAuthorizedUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/KillSwitchService/ListAuthorizedUsers',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_ListAuthorizedUsers,
      callback);
};


/**
 * @param {!proto.ListAuthorizedUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ListAuthorizedUsersResponse>}
 *     Promise that resolves to the response
 */
proto.KillSwitchServicePromiseClient.prototype.listAuthorizedUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/KillSwitchService/ListAuthorizedUsers',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_ListAuthorizedUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddAuthorizedUserRequest,
 *   !proto.AddAuthorizedUserResponse>}
 */
const methodDescriptor_KillSwitchService_AddAuthorizedUser = new grpc.web.MethodDescriptor(
  '/KillSwitchService/AddAuthorizedUser',
  grpc.web.MethodType.UNARY,
  proto.AddAuthorizedUserRequest,
  proto.AddAuthorizedUserResponse,
  /**
   * @param {!proto.AddAuthorizedUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AddAuthorizedUserResponse.deserializeBinary
);


/**
 * @param {!proto.AddAuthorizedUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.AddAuthorizedUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AddAuthorizedUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.KillSwitchServiceClient.prototype.addAuthorizedUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/KillSwitchService/AddAuthorizedUser',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_AddAuthorizedUser,
      callback);
};


/**
 * @param {!proto.AddAuthorizedUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AddAuthorizedUserResponse>}
 *     Promise that resolves to the response
 */
proto.KillSwitchServicePromiseClient.prototype.addAuthorizedUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/KillSwitchService/AddAuthorizedUser',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_AddAuthorizedUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateAuthorizedUserRequest,
 *   !proto.UpdateAuthorizedUserResponse>}
 */
const methodDescriptor_KillSwitchService_UpdateAuthorizedUser = new grpc.web.MethodDescriptor(
  '/KillSwitchService/UpdateAuthorizedUser',
  grpc.web.MethodType.UNARY,
  proto.UpdateAuthorizedUserRequest,
  proto.UpdateAuthorizedUserResponse,
  /**
   * @param {!proto.UpdateAuthorizedUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateAuthorizedUserResponse.deserializeBinary
);


/**
 * @param {!proto.UpdateAuthorizedUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.UpdateAuthorizedUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UpdateAuthorizedUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.KillSwitchServiceClient.prototype.updateAuthorizedUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/KillSwitchService/UpdateAuthorizedUser',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_UpdateAuthorizedUser,
      callback);
};


/**
 * @param {!proto.UpdateAuthorizedUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UpdateAuthorizedUserResponse>}
 *     Promise that resolves to the response
 */
proto.KillSwitchServicePromiseClient.prototype.updateAuthorizedUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/KillSwitchService/UpdateAuthorizedUser',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_UpdateAuthorizedUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DeleteAuthorizedUserRequest,
 *   !proto.DeleteAuthorizedUserResponse>}
 */
const methodDescriptor_KillSwitchService_DeleteAuthorizedUser = new grpc.web.MethodDescriptor(
  '/KillSwitchService/DeleteAuthorizedUser',
  grpc.web.MethodType.UNARY,
  proto.DeleteAuthorizedUserRequest,
  proto.DeleteAuthorizedUserResponse,
  /**
   * @param {!proto.DeleteAuthorizedUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DeleteAuthorizedUserResponse.deserializeBinary
);


/**
 * @param {!proto.DeleteAuthorizedUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.DeleteAuthorizedUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DeleteAuthorizedUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.KillSwitchServiceClient.prototype.deleteAuthorizedUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/KillSwitchService/DeleteAuthorizedUser',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_DeleteAuthorizedUser,
      callback);
};


/**
 * @param {!proto.DeleteAuthorizedUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DeleteAuthorizedUserResponse>}
 *     Promise that resolves to the response
 */
proto.KillSwitchServicePromiseClient.prototype.deleteAuthorizedUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/KillSwitchService/DeleteAuthorizedUser',
      request,
      metadata || {},
      methodDescriptor_KillSwitchService_DeleteAuthorizedUser);
};


module.exports = proto;

