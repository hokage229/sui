searchState.loadedDescShard("sui_proxy", 0, "var extracts environment variables at runtime with a …\nCertKeyPair wraps a self signed certificate and the …\nReqwest client holds the global client for remote_push api …\nApp will configure our routes. This fn is also used to …\nDefault allow mode for server, we don’t verify clients, …\nVerify clients against sui blockchain, clients that are …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGenerate server certs for use with peer verification\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nServer creates our http/https server\nConfigure our graceful shutdown scenarios\nDynamicPeerValidationConfig controls what sui-node …\nStaticPeerValidationConfig, unlike the …\nStaticPubKey holds a human friendly name, ip and the key …\nincoming client connections to this proxy will be …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nif certificate_file and private_key are not provided, we’…\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nload our config file from a path\nfriendly name we will see in metrics\nfriendly ip address we may see in metrics\nthe peer_id from a node config file (Ed25519 PublicKey)\nSets the maximum idle connection per host allowed in the …\nprivate key for tls please use an absolute path\nthe remote_write url to post data to\nurl is the json-rpc url we use to obtain valid peers on …\nusername is used for posting data to the remote_write api\nNodeMetric holds metadata and a metric payload from the …\nThe ProtobufDecoder will decode message delimited protobuf …\nconvert_to_remote_write is an expensive method due to the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nparse a delimited buffer of protobufs. this is used to …\nPublish handler which receives metrics from nodes.  Nodes …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nsubmit will take metric family submissions and store them …\nwe expect sui-node to send us an http header …\nwe expect sui-node to send us an http header content-type …\nwe expect that calling sui-nodes are known on the …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSuiNodeProvider queries the sui blockchain and keeps a …\nA SuiPeer is the collated sui chain data we have about …\nSuiNods a mapping of public key to SuiPeer data\nReturns the argument unchanged.\nReturns the argument unchanged.\nget is used to retrieve peer info in our handlers\nGet a mutable reference to the inner service\nGet a reference to the inner service\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\npoll_peer_list will act as a refresh interval for our cache\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA BucketSpan defines a number of consecutive buckets with …\nChunk represents a TSDB chunk. Time range [min, max] is …\nChunkedReadResponse is a response when response_type …\nChunkedSeries represents single, encoded time series.\nA native histogram, also known as a sparse histogram. …\nMatcher specifies a rule, which can match or set of labels …\nReadRequest represents a remote read request.\nReadResponse is a response when response_type equals …\nTimeSeries represents samples and labels for a single time …\nReturns an iterator which yields the valid enum values …\naccepted_response_types allows negotiating the content …\nIndicate whether it is without or by.\nNested message and enum types in <code>Chunk</code>.\nChunks will be in start time order and may overlap.\nCount of observations in the histogram.\nEnd time in milliseconds.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nString representation of surrounding function or …\nList of label names used in aggregation.\nNested message and enum types in <code>Histogram</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nNested message and enum types in <code>LabelMatcher</code>.\nOptional, can be empty.\nFor a timeseries to be valid, and for the samples and …\nLabels should be sorted.\nLength of consecutive buckets.\nNested message and enum types in <code>MetricMetadata</code>.\nAbsolute count of each bucket.\nUse either “negative_deltas” or “negative_counts”, …\nNegative Buckets.\nGap to previous span, or starting point for 1st span …\nAbsolute count of each bucket.\nUse either “positive_deltas” or “positive_counts”, …\nPositive Buckets.\nAppends the provided enum value to <code>accepted_response_types</code>.\nquery_index represents an index of the query from …\nRange vector selector range in milliseconds.\nNested message and enum types in <code>ReadRequest</code>.\nReturns the enum value of <code>reset_hint</code>, or the default if …\nIn same order as the request’s queries.\nThe schema defines the bucket schema. Currently, valid …\nSets <code>reset_hint</code> to the provided enum value.\nSets <code>type</code> to the provided enum value.\nSets <code>type</code> to the provided enum value.\nSets <code>type</code> to the provided enum value.\nStart time in milliseconds.\nQuery step size in milliseconds.\nSum of observations in the histogram.\nSamples within a time series must be ordered by time.\ntimestamp is in ms format, see …\ntimestamp is in ms format, see …\ntimestamp is in ms format, see …\nReturns the enum value of <code>type</code>, or the default if the …\nReturns the enum value of <code>type</code>, or the default if the …\nReturns the enum value of <code>type</code>, or the default if the …\nRepresents the metric type, these match the set from …\nCount in zero bucket.\nBreadth of the zero bucket.\nWe require this to match chunkenc.Encoding.\nString value of the enum field names used in the ProtoBuf …\nReturns the argument unchanged.\nConverts an <code>i32</code> to a <code>Encoding</code>, or <code>None</code> if <code>value</code> is not a …\nCreates an enum from field names used in the ProtoBuf …\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if <code>value</code> is a variant of <code>Encoding</code>.\nCount of observations in the histogram.\nThis is a gauge histogram where counter resets don’t …\nThere was no counter reset between this and the previous …\nNeed to test for a counter reset explicitly.\nThis is the 1st histogram after a counter reset.\nCount in zero bucket.\nString value of the enum field names used in the ProtoBuf …\nEncodes the message to a buffer.\nEncodes the message to a buffer.\nReturns the encoded length of the message without a length …\nReturns the encoded length of the message without a length …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts an <code>i32</code> to a <code>ResetHint</code>, or <code>None</code> if <code>value</code> is not a …\nCreates an enum from field names used in the ProtoBuf …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if <code>value</code> is a variant of <code>ResetHint</code>.\nDecodes an instance of the message from a buffer, and …\nDecodes an instance of the message from a buffer, and …\nString value of the enum field names used in the ProtoBuf …\nReturns the argument unchanged.\nConverts an <code>i32</code> to a <code>Type</code>, or <code>None</code> if <code>value</code> is not a valid …\nCreates an enum from field names used in the ProtoBuf …\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if <code>value</code> is a variant of <code>Type</code>.\nString value of the enum field names used in the ProtoBuf …\nReturns the argument unchanged.\nConverts an <code>i32</code> to a <code>MetricType</code>, or <code>None</code> if <code>value</code> is not a …\nCreates an enum from field names used in the ProtoBuf …\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if <code>value</code> is a variant of <code>MetricType</code>.\nServer will return a single ReadResponse message with …\nServer will stream a delimited ChunkedReadResponse message …\nString value of the enum field names used in the ProtoBuf …\nReturns the argument unchanged.\nConverts an <code>i32</code> to a <code>ResponseType</code>, or <code>None</code> if <code>value</code> is not …\nCreates an enum from field names used in the ProtoBuf …\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if <code>value</code> is a variant of <code>ResponseType</code>.")