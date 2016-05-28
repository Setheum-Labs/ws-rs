var searchIndex = {};
searchIndex["ws"] = {"doc":"Usage\n-----","items":[[3,"Error","ws","A struct indicating the kind of error that has occured and any precise details of that error.",null,null],[12,"kind","","",0,null],[12,"details","","",0,null],[3,"Sender","","A representation of the output of the WebSocket connection. Use this to send messages to the\nother endpoint.",null,null],[3,"Frame","","A struct representing a WebSocket frame.",null,null],[3,"Handshake","","A struct representing the two halves of the WebSocket handshake.",null,null],[12,"request","","The HTTP request sent to begin the handshake.",1,null],[12,"response","","The HTTP response from the server confirming the handshake.",1,null],[12,"peer_addr","","The socket address of the other endpoint. This address may\nbe an intermediary such as a proxy server.",1,null],[12,"local_addr","","The socket address of this endpoint.",1,null],[3,"Request","","The handshake request.",null,null],[3,"Response","","The handshake response.",null,null],[3,"Settings","","WebSocket settings",null,null],[12,"max_connections","","The maximum number of connections that this WebSocket will support.\nThe default setting is low and should be increased when expecting more\nconnections because this is a hard limit and no new connections beyond\nthis limit can be made until an old connection is dropped.\nDefault: 100",2,null],[12,"panic_on_new_connection","","Whether to panic when unable to establish a new TCP connection.\nDefault: false",2,null],[12,"panic_on_shutdown","","Whether to panic when a shutdown of the WebSocket is requested.\nDefault: false",2,null],[12,"fragments_capacity","","The maximum number of fragments the connection can handle without reallocating.\nDefault: 10",2,null],[12,"fragments_grow","","Whether to reallocate when `fragments_capacity` is reached. If this is false,\na Capacity error will be triggered instead.\nDefault: true",2,null],[12,"fragment_size","","The maximum length of outgoing frames. Messages longer than this will be fragmented.\nDefault: 65,535",2,null],[12,"in_buffer_capacity","","The size of the incoming buffer. A larger buffer uses more memory but will allow for fewer\nreallocations.\nDefault: 2048",2,null],[12,"in_buffer_grow","","Whether to reallocate the incoming buffer when `in_buffer_capacity` is reached. If this is\nfalse, a Capacity error will be triggered instead.\nDefault: true",2,null],[12,"out_buffer_capacity","","The size of the outgoing buffer. A larger buffer uses more memory but will allow for fewer\nreallocations.\nDefault: 2048",2,null],[12,"out_buffer_grow","","Whether to reallocate the incoming buffer when `out_buffer_capacity` is reached. If this is\nfalse, a Capacity error will be triggered instead.\nDefault: true",2,null],[12,"panic_on_internal","","Whether to panic when an Internal error is encountered. Internal errors should generally\nnot occur, so this setting defaults to true as a debug measure, whereas production\napplications should consider setting it to false.\nDefault: true",2,null],[12,"panic_on_capacity","","Whether to panic when a Capacity error is encountered.\nDefault: false",2,null],[12,"panic_on_protocol","","Whether to panic when a Protocol error is encountered.\nDefault: false",2,null],[12,"panic_on_encoding","","Whether to panic when an Encoding error is encountered.\nDefault: false",2,null],[12,"panic_on_io","","Whether to panic when an Io error is encountered.\nDefault: false",2,null],[12,"panic_on_timeout","","Whether to panic when a Timer error is encountered.\nDefault: false",2,null],[12,"masking_strict","","The WebSocket protocol requires frames sent from client endpoints to be masked as a\nsecurity and sanity precaution. Enforcing this requirement, which may be removed at some\npoint may cause incompatibilities. If you need the extra security, set this to true.\nDefault: false",2,null],[12,"key_strict","","The WebSocket protocol requires clients to verify the key returned by a server to ensure\nthat the server and all intermediaries can perform the protocol. Verifying the key will\nconsume processing time and other resources with the benifit that we can fail the\nconnection early. The default in WS-RS is to accept any key from the server and instead\nfail late if a protocol error occurs. Change this setting to enable key verification.\nDefault: false",2,null],[12,"method_strict","","The WebSocket protocol requires clients to perform an opening handshake using the HTTP\nGET method for the request. However, since only WebSockets are supported on the connection,\nverifying the method of handshake requests is not always necessary. To enforce the\nrequirement that handshakes begin with a GET method, set this to true.\nDefault: false",2,null],[12,"encrypt_server","","Indicate whether server connections should use ssl encryption when accepting connections.\nSetting this to true means that clients should use the `wss` scheme to connect to this\nserver. Note that using this flag will in general necessitate overriding the\n`Handler::build_ssl` method in order to provide the details of the ssl context. It may be\nsimpler for most users to use a reverse proxy such as nginx to provide server side\nencryption.",2,null],[3,"WebSocket","","The WebSocket struct. A WebSocket can support multiple incoming and outgoing connections.",null,null],[3,"Builder","","Utility for constructing a WebSocket from various settings.",null,null],[4,"ErrorKind","","The type of an error, which may indicate other kinds of errors as the underlying cause.",null,null],[13,"Internal","","Indicates an internal application error.\nThe WebSocket will automatically attempt to send an Error (1011) close code.",3,null],[13,"Capacity","","Indicates a state where some size limit has been exceeded, such as an inability to accept\nany more new connections.\nIf a Connection is active, the WebSocket will automatically attempt to send\na Size (1009) close code.",3,null],[13,"Protocol","","Indicates a violation of the WebSocket protocol.\nThe WebSocket will automatically attempt to send a Protocol (1002) close code, or if\nthis error occurs during a handshake, an HTTP 400 reponse will be generated.",3,null],[13,"Encoding","","Indicates that the WebSocket received data that should be utf8 encoded but was not.\nThe WebSocket will automatically attempt to send a Invalid Frame Payload Data (1007) close\ncode.",3,null],[13,"Io","","Indicates an underlying IO Error.\nThis kind of error will result in a WebSocket Connection disconnecting.",3,null],[13,"Parse","","Indicates a failure to parse an HTTP message.\nThis kind of error should only occur during a WebSocket Handshake, and a HTTP 500 response\nwill be generated.",3,null],[13,"Queue","","Indicates a failure to send a command on the internal EventLoop channel. This means that\nthe WebSocket is overloaded and the Connection will disconnect.",3,null],[13,"Timer","","Indicates a failure to schedule a timeout on the EventLoop.",3,null],[13,"Ssl","","Indicates a failure to perform SSL encryption.",3,null],[13,"Custom","","A custom error kind for use by applications. This error kind involves extra overhead\nbecause it will allocate the memory on the heap. The WebSocket ignores such errors by\ndefault, simply passing them to the Connection Handler.",3,null],[4,"Message","","An enum representing the various forms of a WebSocket message.",null,null],[13,"Text","","A text WebSocket message",4,null],[13,"Binary","","A binary WebSocket message",4,null],[4,"CloseCode","","Status code used to indicate why an endpoint is closing the WebSocket connection.",null,null],[13,"Normal","","Indicates a normal closure, meaning that the purpose for\nwhich the connection was established has been fulfilled.",5,null],[13,"Away","","Indicates that an endpoint is &quot;going away&quot;, such as a server\ngoing down or a browser having navigated away from a page.",5,null],[13,"Protocol","","Indicates that an endpoint is terminating the connection due\nto a protocol error.",5,null],[13,"Unsupported","","Indicates that an endpoint is terminating the connection\nbecause it has received a type of data it cannot accept (e.g., an\nendpoint that understands only text data MAY send this if it\nreceives a binary message).",5,null],[13,"Status","","Indicates that no status code was included in a closing frame. This\nclose code makes it possible to use a single method, `on_close` to \nhandle even cases where no close code was provided.",5,null],[13,"Abnormal","","Indicates an abnormal closure. If the abnormal closure was due to an\nerror, this close code will not be used. Instead, the `on_error` method\nof the handler will be called with the error. However, if the connection\nis simply dropped, without an error, this close code will be sent to the\nhandler.",5,null],[13,"Invalid","","Indicates that an endpoint is terminating the connection\nbecause it has received data within a message that was not\nconsistent with the type of the message (e.g., non-UTF-8 [RFC3629]\ndata within a text message).",5,null],[13,"Policy","","Indicates that an endpoint is terminating the connection\nbecause it has received a message that violates its policy.  This\nis a generic status code that can be returned when there is no\nother more suitable status code (e.g., Unsupported or Size) or if there\nis a need to hide specific details about the policy.",5,null],[13,"Size","","Indicates that an endpoint is terminating the connection\nbecause it has received a message that is too big for it to\nprocess.",5,null],[13,"Extension","","Indicates that an endpoint (client) is terminating the\nconnection because it has expected the server to negotiate one or\nmore extension, but the server didn&#39;t return them in the response\nmessage of the WebSocket handshake.  The list of extensions that\nare needed should be given as the reason for closing.\nNote that this status code is not used by the server, because it\ncan fail the WebSocket handshake instead.",5,null],[13,"Error","","Indicates that a server is terminating the connection because\nit encountered an unexpected condition that prevented it from\nfulfilling the request.",5,null],[13,"Restart","","Indicates that the server is restarting. A client may choose to reconnect,\nand if it does, it should use a randomized delay of 5-30 seconds between attempts.",5,null],[13,"Again","","Indicates that the server is overloaded and the client should either connect\nto a different IP (when multiple targets exist), or reconnect to the same IP\nwhen a user has performed an action.",5,null],[4,"OpCode","","Operation codes as part of rfc6455.",null,null],[13,"Continue","","Indicates a continuation frame of a fragmented message.",6,null],[13,"Text","","Indicates a text data frame.",6,null],[13,"Binary","","Indicates a binary data frame.",6,null],[13,"Close","","Indicates a close control frame.",6,null],[13,"Ping","","Indicates a ping control frame.",6,null],[13,"Pong","","Indicates a pong control frame.",6,null],[13,"Bad","","Indicates an invalid opcode was received.",6,null],[5,"listen","","A utility function for setting up a WebSocket server.",null,{"inputs":[{"name":"a"},{"name":"f"}],"output":{"name":"result"}}],[5,"connect","","A utility function for setting up a WebSocket client.",null,{"inputs":[{"name":"u"},{"name":"f"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"errorkind"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",0,{"inputs":[{"name":"kind"},{"name":"i"}],"output":{"name":"error"}}],[11,"into_box","","",0,{"inputs":[{"name":"error"}],"output":{"name":"box"}}],[11,"fmt","","",0,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",0,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"cause","","",0,{"inputs":[{"name":"error"}],"output":{"name":"option"}}],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"from","","",0,{"inputs":[{"name":"notifyerror"}],"output":{"name":"error"}}],[11,"from","","",0,{"inputs":[{"name":"timererror"}],"output":{"name":"error"}}],[11,"from","","",0,{"inputs":[{"name":"utf8error"}],"output":{"name":"error"}}],[11,"from","","",0,{"inputs":[{"name":"sslerror"}],"output":{"name":"error"}}],[11,"from","","",0,{"inputs":[{"name":"box"}],"output":{"name":"error"}}],[11,"clone","","",7,{"inputs":[{"name":"frame"}],"output":{"name":"frame"}}],[11,"fmt","","",7,{"inputs":[{"name":"frame"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"len","","Get the length of the frame.\nThis is the length of the header + the length of the payload.",7,{"inputs":[{"name":"frame"}],"output":{"name":"usize"}}],[11,"is_final","","Test whether the frame is a final frame.",7,{"inputs":[{"name":"frame"}],"output":{"name":"bool"}}],[11,"has_rsv1","","Test whether the first reserved bit is set.",7,{"inputs":[{"name":"frame"}],"output":{"name":"bool"}}],[11,"has_rsv2","","Test whether the second reserved bit is set.",7,{"inputs":[{"name":"frame"}],"output":{"name":"bool"}}],[11,"has_rsv3","","Test whether the third reserved bit is set.",7,{"inputs":[{"name":"frame"}],"output":{"name":"bool"}}],[11,"opcode","","Get the OpCode of the frame.",7,{"inputs":[{"name":"frame"}],"output":{"name":"opcode"}}],[11,"payload","","Get a reference to the frame&#39;s payload.",7,{"inputs":[{"name":"frame"}],"output":{"name":"vec"}}],[11,"set_final","","Make this frame a final frame.",7,{"inputs":[{"name":"frame"},{"name":"bool"}],"output":{"name":"frame"}}],[11,"set_rsv1","","Set the first reserved bit.",7,{"inputs":[{"name":"frame"},{"name":"bool"}],"output":{"name":"frame"}}],[11,"set_rsv2","","Set the second reserved bit.",7,{"inputs":[{"name":"frame"},{"name":"bool"}],"output":{"name":"frame"}}],[11,"set_rsv3","","Set the third reserved bit.",7,{"inputs":[{"name":"frame"},{"name":"bool"}],"output":{"name":"frame"}}],[11,"set_opcode","","Set the OpCode.",7,{"inputs":[{"name":"frame"},{"name":"opcode"}],"output":{"name":"frame"}}],[11,"payload_mut","","Edit the frame&#39;s payload.",7,{"inputs":[{"name":"frame"}],"output":{"name":"vec"}}],[11,"into_data","","Consume the frame into its payload.",7,{"inputs":[{"name":"frame"}],"output":{"name":"vec"}}],[11,"message","","Create a new data frame.",7,{"inputs":[{"name":"vec"},{"name":"opcode"},{"name":"bool"}],"output":{"name":"frame"}}],[11,"pong","","Create a new Pong control frame.",7,{"inputs":[{"name":"vec"}],"output":{"name":"frame"}}],[11,"ping","","Create a new Ping control frame.",7,{"inputs":[{"name":"vec"}],"output":{"name":"frame"}}],[11,"close","","Create a new Close control frame.",7,{"inputs":[{"name":"closecode"},{"name":"str"}],"output":{"name":"frame"}}],[11,"parse","","Parse the input stream into a frame.",7,{"inputs":[{"name":"cursor"}],"output":{"name":"result"}}],[11,"format","","Write a frame out to a buffer",7,{"inputs":[{"name":"frame"},{"name":"w"}],"output":{"name":"result"}}],[11,"default","","",7,{"inputs":[],"output":{"name":"frame"}}],[11,"fmt","","",7,{"inputs":[{"name":"frame"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"message"}],"output":{"name":"message"}}],[11,"eq","","",4,{"inputs":[{"name":"message"},{"name":"message"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"message"},{"name":"message"}],"output":{"name":"bool"}}],[11,"fmt","","",4,{"inputs":[{"name":"message"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"text","","Create a new text WebSocket message from a stringable.",4,{"inputs":[{"name":"s"}],"output":{"name":"message"}}],[11,"binary","","Create a new binary WebSocket message by converting to Vec&lt;u8&gt;.",4,{"inputs":[{"name":"b"}],"output":{"name":"message"}}],[11,"is_text","","Indicates whether a message is a text message.",4,{"inputs":[{"name":"message"}],"output":{"name":"bool"}}],[11,"is_binary","","Indicates whether a message is a binary message.",4,{"inputs":[{"name":"message"}],"output":{"name":"bool"}}],[11,"len","","Get the length of the WebSocket message.",4,{"inputs":[{"name":"message"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true if the WebSocket message has no content.\nFor example, if the other side of the connection sent an empty string.",4,{"inputs":[{"name":"message"}],"output":{"name":"bool"}}],[11,"into_data","","Consume the WebSocket and return it as binary data.",4,{"inputs":[{"name":"message"}],"output":{"name":"vec"}}],[11,"into_text","","Attempt to consume the WebSocket message and convert it to a String.",4,{"inputs":[{"name":"message"}],"output":{"name":"result"}}],[11,"as_text","","Attempt to get a &amp;str from the WebSocket message,\nthis will try to convert binary data to utf8.",4,{"inputs":[{"name":"message"}],"output":{"name":"result"}}],[11,"from","","",4,{"inputs":[{"name":"string"}],"output":{"name":"message"}}],[11,"from","","",4,{"inputs":[{"name":"str"}],"output":{"name":"message"}}],[11,"from","","",4,null],[11,"fmt","","",4,{"inputs":[{"name":"message"},{"name":"formatter"}],"output":{"name":"stdresult"}}],[11,"fmt","","",1,{"inputs":[{"name":"handshake"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"remote_addr","","Get the IP address of the remote connection.",1,{"inputs":[{"name":"handshake"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"request"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"header","","Get the value of the first instance of an HTTP header.",8,{"inputs":[{"name":"request"},{"name":"str"}],"output":{"name":"option"}}],[11,"header_mut","","Edit the value of the first instance of an HTTP header.",8,{"inputs":[{"name":"request"},{"name":"str"}],"output":{"name":"option"}}],[11,"headers","","Access the request headers.",8,{"inputs":[{"name":"request"}],"output":{"name":"vec"}}],[11,"headers_mut","","Edit the request headers.",8,{"inputs":[{"name":"request"}],"output":{"name":"vec"}}],[11,"origin","","Get the origin of the request if it comes from a browser.",8,{"inputs":[{"name":"request"}],"output":{"name":"result"}}],[11,"key","","Get the unhashed WebSocket key sent in the request.",8,{"inputs":[{"name":"request"}],"output":{"name":"result"}}],[11,"hashed_key","","Get the hashed WebSocket key from this request.",8,{"inputs":[{"name":"request"}],"output":{"name":"result"}}],[11,"version","","Get the WebSocket protocol version from the request (should be 13).",8,{"inputs":[{"name":"request"}],"output":{"name":"result"}}],[11,"resource","","Get the path of the request.",8,{"inputs":[{"name":"request"}],"output":{"name":"str"}}],[11,"protocols","","Get the possible protocols for the WebSocket connection.",8,{"inputs":[{"name":"request"}],"output":{"name":"result"}}],[11,"add_protocol","","Add a possible protocol to this request.\nThis may result in duplicate protocols listed.",8,{"inputs":[{"name":"request"},{"name":"str"}],"output":null}],[11,"remove_protocol","","Remove a possible protocol from this request.",8,{"inputs":[{"name":"request"},{"name":"str"}],"output":null}],[11,"extensions","","Get the possible extensions for the WebSocket connection.",8,{"inputs":[{"name":"request"}],"output":{"name":"result"}}],[11,"add_extension","","Add a possible extension to this request.\nThis may result in duplicate extensions listed. Also, the order of extensions\nindicates preference, so if the preference matters, consider using the\n`Sec-WebSocket-Protocol` header directly.",8,{"inputs":[{"name":"request"},{"name":"str"}],"output":null}],[11,"remove_extension","","Remove a possible extension from this request.\nThis will remove all configurations of the extension.",8,{"inputs":[{"name":"request"},{"name":"str"}],"output":null}],[11,"client_addr","","Get the IP address of the client.",8,{"inputs":[{"name":"request"}],"output":{"name":"result"}}],[11,"parse","","Attempt to parse an HTTP request from a buffer. If the buffer does not contain a complete\nrequest, this will return `Ok(None)`.",8,null],[11,"from_url","","Construct a new WebSocket handshake HTTP request from a url.",8,{"inputs":[{"name":"url"}],"output":{"name":"result"}}],[11,"format","","Write a request out to a buffer",8,{"inputs":[{"name":"request"},{"name":"w"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"request"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",9,{"inputs":[{"name":"response"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"header_mut","","Edit the value of the first instance of an HTTP header.",9,{"inputs":[{"name":"response"},{"name":"str"}],"output":{"name":"option"}}],[11,"headers","","Access the request headers.",9,{"inputs":[{"name":"response"}],"output":{"name":"vec"}}],[11,"headers_mut","","Edit the request headers.",9,{"inputs":[{"name":"response"}],"output":{"name":"vec"}}],[11,"status","","Get the HTTP status code.",9,{"inputs":[{"name":"response"}],"output":{"name":"u16"}}],[11,"set_status","","Set the HTTP status code.",9,{"inputs":[{"name":"response"},{"name":"u16"}],"output":null}],[11,"reason","","Get the HTTP status reason.",9,{"inputs":[{"name":"response"}],"output":{"name":"str"}}],[11,"set_reason","","Set the HTTP status reason.",9,{"inputs":[{"name":"response"},{"name":"r"}],"output":null}],[11,"key","","Get the hashed WebSocket key.",9,{"inputs":[{"name":"response"}],"output":{"name":"result"}}],[11,"protocol","","Get the protocol that the server has decided to use.",9,{"inputs":[{"name":"response"}],"output":{"name":"result"}}],[11,"set_protocol","","Set the protocol that the server has decided to use.",9,{"inputs":[{"name":"response"},{"name":"str"}],"output":null}],[11,"extensions","","Get the extensions that the server has decided to use. If these are unacceptable, it is\nappropriate to send an Extension close code.",9,{"inputs":[{"name":"response"}],"output":{"name":"result"}}],[11,"add_extension","","Add an accepted extension to this response.\nThis may result in duplicate extensions listed.",9,{"inputs":[{"name":"response"},{"name":"str"}],"output":null}],[11,"remove_extension","","Remove an accepted extension from this response.\nThis will remove all configurations of the extension.",9,{"inputs":[{"name":"response"},{"name":"str"}],"output":null}],[11,"parse","","Attempt to parse an HTTP response from a buffer. If the buffer does not contain a complete\nresponse, thiw will return `Ok(None)`.",9,null],[11,"from_request","","Construct a new WebSocket handshake HTTP response from a request.\nThis will create a response that ignores protocols and extensions. Edit this response to\naccept a protocol and extensions as necessary.",9,{"inputs":[{"name":"request"}],"output":{"name":"result"}}],[11,"format","","Write a response out to a buffer",9,{"inputs":[{"name":"response"},{"name":"w"}],"output":{"name":"result"}}],[11,"fmt","","",9,{"inputs":[{"name":"response"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",6,{"inputs":[{"name":"opcode"}],"output":{"name":"opcode"}}],[11,"eq","","",6,{"inputs":[{"name":"opcode"},{"name":"opcode"}],"output":{"name":"bool"}}],[11,"fmt","","",6,{"inputs":[{"name":"opcode"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",6,{"inputs":[{"name":"opcode"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"into","","",6,{"inputs":[{"name":"opcode"}],"output":{"name":"u8"}}],[11,"from","","",6,{"inputs":[{"name":"u8"}],"output":{"name":"opcode"}}],[11,"clone","","",5,{"inputs":[{"name":"closecode"}],"output":{"name":"closecode"}}],[11,"eq","","",5,{"inputs":[{"name":"closecode"},{"name":"closecode"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"closecode"},{"name":"closecode"}],"output":{"name":"bool"}}],[11,"fmt","","",5,{"inputs":[{"name":"closecode"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"into","","",5,{"inputs":[{"name":"closecode"}],"output":{"name":"u16"}}],[11,"from","","",5,{"inputs":[{"name":"u16"}],"output":{"name":"closecode"}}],[11,"clone","","",10,{"inputs":[{"name":"sender"}],"output":{"name":"sender"}}],[11,"fmt","","",10,{"inputs":[{"name":"sender"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"token","","A Token identifying this sender within the WebSocket.",10,{"inputs":[{"name":"sender"}],"output":{"name":"token"}}],[11,"send","","Send a message over the connection.",10,{"inputs":[{"name":"sender"},{"name":"m"}],"output":{"name":"result"}}],[11,"broadcast","","Send a message to the endpoints of all connections.",10,{"inputs":[{"name":"sender"},{"name":"m"}],"output":{"name":"result"}}],[11,"close","","Send a close code to the other endpoint.",10,{"inputs":[{"name":"sender"},{"name":"closecode"}],"output":{"name":"result"}}],[11,"close_with_reason","","Send a close code and provide a descriptive reason for closing.",10,{"inputs":[{"name":"sender"},{"name":"closecode"},{"name":"s"}],"output":{"name":"result"}}],[11,"ping","","Send a ping to the other endpoint with the given test data.",10,{"inputs":[{"name":"sender"},{"name":"vec"}],"output":{"name":"result"}}],[11,"pong","","Send a pong to the other endpoint responding with the given test data.",10,{"inputs":[{"name":"sender"},{"name":"vec"}],"output":{"name":"result"}}],[11,"connect","","Queue a new connection on this WebSocket to the specified URL.",10,{"inputs":[{"name":"sender"},{"name":"url"}],"output":{"name":"result"}}],[11,"shutdown","","Request that all connections terminate and that the WebSocket stop running.",10,{"inputs":[{"name":"sender"}],"output":{"name":"result"}}],[11,"timeout","","Schedule a `token` to be sent to the WebSocket Handler&#39;s `on_timeout` method\nafter `ms` milliseconds",10,{"inputs":[{"name":"sender"},{"name":"u64"},{"name":"token"}],"output":{"name":"result"}}],[11,"cancel","","Queue the cancellation of a previously scheduled timeout.",10,{"inputs":[{"name":"sender"},{"name":"timeout"}],"output":{"name":"result"}}],[0,"util","","The util module rexports some tools from mio in order to facilitate handling timeouts.",null,null],[11,"as_usize","mio::token","",11,{"inputs":[{"name":"token"}],"output":{"name":"usize"}}],[11,"from_usize","","",11,{"inputs":[{"name":"usize"}],"output":{"name":"token"}}],[11,"as_usize","","",11,{"inputs":[{"name":"token"}],"output":{"name":"usize"}}],[11,"clone","","",11,{"inputs":[{"name":"token"}],"output":{"name":"token"}}],[11,"fmt","","",11,{"inputs":[{"name":"token"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",11,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"bool"}}],[11,"ne","","",11,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",11,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"option"}}],[11,"lt","","",11,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"bool"}}],[11,"le","","",11,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"bool"}}],[11,"gt","","",11,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"bool"}}],[11,"ge","","",11,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"bool"}}],[11,"cmp","","",11,{"inputs":[{"name":"token"},{"name":"token"}],"output":{"name":"ordering"}}],[11,"hash","","",11,null],[3,"Token","ws::util","",null,null],[12,"0","","",11,null],[11,"clone","mio::timer","",12,{"inputs":[{"name":"timeout"}],"output":{"name":"timeout"}}],[3,"Timeout","ws::util","",null,null],[6,"Slab","","",null,null],[6,"Result","ws","",null,null],[8,"Factory","","A trait for creating new WebSocket handlers.",null,null],[16,"Handler","","",13,null],[10,"connection_made","","Called when a TCP connection is made.",13,{"inputs":[{"name":"factory"},{"name":"sender"}],"output":{"name":"handler"}}],[11,"on_shutdown","","Called when the WebSocket is shutting down.",13,{"inputs":[{"name":"factory"}],"output":null}],[11,"client_connected","","Called when a new connection is established for a client endpoint.\nThis method can be used to differentiate a client aspect for a handler.",13,{"inputs":[{"name":"factory"},{"name":"sender"}],"output":{"name":"handler"}}],[11,"server_connected","","Called when a new connection is established for a server endpoint.\nThis method can be used to differentiate a server aspect for a handler.",13,{"inputs":[{"name":"factory"},{"name":"sender"}],"output":{"name":"handler"}}],[11,"connection_lost","","Called when a TCP connection is lost with the handler that was\nsetup for that connection.",13,{"inputs":[{"name":"factory"},{"name":"handler"}],"output":null}],[8,"Handler","","The core trait of this library.\nImplementing this trait provides the business logic of the WebSocket application.",null,null],[11,"on_shutdown","","Called when a request to shutdown all connections has been received.",14,{"inputs":[{"name":"handler"}],"output":null}],[11,"on_open","","Called when the WebSocket handshake is successful and the connection is open for sending\nand receiving messages.",14,{"inputs":[{"name":"handler"},{"name":"handshake"}],"output":{"name":"result"}}],[11,"on_message","","Called on incoming messages.",14,{"inputs":[{"name":"handler"},{"name":"message"}],"output":{"name":"result"}}],[11,"on_close","","Called any time this endpoint receives a close control frame.\nThis may be because the other endpoint is initiating a closing handshake,\nor it may be the other endpoint confirming the handshake initiated by this endpoint.",14,{"inputs":[{"name":"handler"},{"name":"closecode"},{"name":"str"}],"output":null}],[11,"on_error","","Called when an error occurs on the WebSocket.",14,{"inputs":[{"name":"handler"},{"name":"error"}],"output":null}],[11,"on_request","","A method for handling the low-level workings of the request portion of the WebSocket\nhandshake.",14,{"inputs":[{"name":"handler"},{"name":"request"}],"output":{"name":"result"}}],[11,"on_response","","A method for handling the low-level workings of the response portion of the WebSocket\nhandshake.",14,{"inputs":[{"name":"handler"},{"name":"response"}],"output":{"name":"result"}}],[11,"on_timeout","","Called when a timeout is triggered.",14,{"inputs":[{"name":"handler"},{"name":"token"}],"output":{"name":"result"}}],[11,"on_new_timeout","","Called when a timeout has been scheduled on the eventloop.",14,{"inputs":[{"name":"handler"},{"name":"token"},{"name":"timeout"}],"output":{"name":"result"}}],[11,"on_frame","","A method for handling incoming frames.",14,{"inputs":[{"name":"handler"},{"name":"frame"}],"output":{"name":"result"}}],[11,"on_send_frame","","A method for handling outgoing frames.",14,{"inputs":[{"name":"handler"},{"name":"frame"}],"output":{"name":"result"}}],[11,"build_request","","A method for creating the initial handshake request for WebSocket clients.",14,{"inputs":[{"name":"handler"},{"name":"url"}],"output":{"name":"result"}}],[11,"build_ssl","","A method for obtaining an Ssl object for use in wss connections.",14,{"inputs":[{"name":"handler"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"settings"}],"output":{"name":"settings"}}],[11,"fmt","","",2,{"inputs":[{"name":"settings"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",2,{"inputs":[],"output":{"name":"settings"}}],[11,"new","","Create a new WebSocket using the given Factory to create handlers.",15,{"inputs":[{"name":"f"}],"output":{"name":"result"}}],[11,"with_config","","Create a new WebSocket with a Factory and use the event loop config to\nconfigure the event loop.",15,{"inputs":[{"name":"f"},{"name":"eventloopconfig"}],"output":{"name":"result"}}],[11,"listen","","Consume the WebSocket and listen for new connections on the specified address.",15,{"inputs":[{"name":"websocket"},{"name":"a"}],"output":{"name":"result"}}],[11,"connect","","Queue an outgoing connection on this WebSocket. This method may be called multiple times,\nbut the actuall connections will not be established until after `run` is called.",15,{"inputs":[{"name":"websocket"},{"name":"url"}],"output":{"name":"result"}}],[11,"run","","Run the WebSocket. This will run the encapsulated event loop blocking until the WebSocket\nis shutdown.",15,{"inputs":[{"name":"websocket"}],"output":{"name":"result"}}],[11,"broadcaster","","Get a Sender that can be used to send messages on all connections.\nCalling `send` on this Sender is equivalent to calling `broadcast`.\nCalling `shutdown` on this Sender will shudown the WebSocket even if no connections have\nbeen established.",15,{"inputs":[{"name":"websocket"}],"output":{"name":"sender"}}],[11,"fmt","","",16,{"inputs":[{"name":"builder"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new Builder with default settings.",16,{"inputs":[],"output":{"name":"builder"}}],[11,"build","","Build a WebSocket using this builder and a factory.\nIt is possible to use the same builder to create multiple WebSockets.",16,{"inputs":[{"name":"builder"},{"name":"f"}],"output":{"name":"result"}}],[11,"with_config","","Set the EventLoopConfig to use with this WebSocket. If this is not set\nthe builder will use a default EventLoopConfig based on other settings.",16,{"inputs":[{"name":"builder"},{"name":"eventloopconfig"}],"output":{"name":"builder"}}],[11,"with_settings","","Set the WebSocket settings to use.",16,{"inputs":[{"name":"builder"},{"name":"settings"}],"output":{"name":"builder"}}],[11,"on_shutdown","","Called when a request to shutdown all connections has been received.",14,{"inputs":[{"name":"handler"}],"output":null}],[11,"on_open","","Called when the WebSocket handshake is successful and the connection is open for sending\nand receiving messages.",14,{"inputs":[{"name":"handler"},{"name":"handshake"}],"output":{"name":"result"}}],[11,"on_message","","Called on incoming messages.",14,{"inputs":[{"name":"handler"},{"name":"message"}],"output":{"name":"result"}}],[11,"on_close","","Called any time this endpoint receives a close control frame.\nThis may be because the other endpoint is initiating a closing handshake,\nor it may be the other endpoint confirming the handshake initiated by this endpoint.",14,{"inputs":[{"name":"handler"},{"name":"closecode"},{"name":"str"}],"output":null}],[11,"on_error","","Called when an error occurs on the WebSocket.",14,{"inputs":[{"name":"handler"},{"name":"error"}],"output":null}],[11,"on_request","","A method for handling the low-level workings of the request portion of the WebSocket\nhandshake.",14,{"inputs":[{"name":"handler"},{"name":"request"}],"output":{"name":"result"}}],[11,"on_response","","A method for handling the low-level workings of the response portion of the WebSocket\nhandshake.",14,{"inputs":[{"name":"handler"},{"name":"response"}],"output":{"name":"result"}}],[11,"on_timeout","","Called when a timeout is triggered.",14,{"inputs":[{"name":"handler"},{"name":"token"}],"output":{"name":"result"}}],[11,"on_new_timeout","","Called when a timeout has been scheduled on the eventloop.",14,{"inputs":[{"name":"handler"},{"name":"token"},{"name":"timeout"}],"output":{"name":"result"}}],[11,"on_frame","","A method for handling incoming frames.",14,{"inputs":[{"name":"handler"},{"name":"frame"}],"output":{"name":"result"}}],[11,"on_send_frame","","A method for handling outgoing frames.",14,{"inputs":[{"name":"handler"},{"name":"frame"}],"output":{"name":"result"}}],[11,"build_request","","A method for creating the initial handshake request for WebSocket clients.",14,{"inputs":[{"name":"handler"},{"name":"url"}],"output":{"name":"result"}}],[11,"build_ssl","","A method for obtaining an Ssl object for use in wss connections.",14,{"inputs":[{"name":"handler"}],"output":{"name":"result"}}],[11,"on_shutdown","","Called when the WebSocket is shutting down.",13,{"inputs":[{"name":"factory"}],"output":null}],[11,"client_connected","","Called when a new connection is established for a client endpoint.\nThis method can be used to differentiate a client aspect for a handler.",13,{"inputs":[{"name":"factory"},{"name":"sender"}],"output":{"name":"handler"}}],[11,"server_connected","","Called when a new connection is established for a server endpoint.\nThis method can be used to differentiate a server aspect for a handler.",13,{"inputs":[{"name":"factory"},{"name":"sender"}],"output":{"name":"handler"}}],[11,"connection_lost","","Called when a TCP connection is lost with the handler that was\nsetup for that connection.",13,{"inputs":[{"name":"factory"},{"name":"handler"}],"output":null}]],"paths":[[3,"Error"],[3,"Handshake"],[3,"Settings"],[4,"ErrorKind"],[4,"Message"],[4,"CloseCode"],[4,"OpCode"],[3,"Frame"],[3,"Request"],[3,"Response"],[3,"Sender"],[3,"Token"],[3,"Timeout"],[8,"Factory"],[8,"Handler"],[3,"WebSocket"],[3,"Builder"]]};
initSearch(searchIndex);
