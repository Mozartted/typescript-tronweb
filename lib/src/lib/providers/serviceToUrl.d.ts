export declare const walletMethods: {
    readonly accountpermissionupdate: "AccountPermissionUpdate";
    readonly addsign: "AddSign";
    readonly broadcasttransaction: "BroadcastTransaction";
    readonly buystorage: "BuyStorage";
    readonly buystoragebytes: "BuyStorageBytes";
    readonly clearabi: "ClearContractABI";
    readonly createaccount: "CreateAccount2";
    readonly createaddress: "CreateAddress";
    readonly createassetissue: "CreateAssetIssue2";
    readonly createcommontransaction: "CreateCommonTransaction";
    readonly createshieldedcontractparameters: "CreateShieldedContractParameters";
    readonly createshieldedcontractparameterswithoutask: "CreateShieldedContractParametersWithoutAsk";
    readonly createshieldedtransaction: "CreateShieldedTransaction";
    readonly createshieldedtransactionwithoutspendauthsig: "CreateShieldedTransactionWithoutSpendAuthSig";
    readonly createshieldnullifier: "CreateShieldNullifier";
    readonly createspendauthsig: "CreateSpendAuthSig";
    readonly createtransaction: "CreateTransaction2";
    readonly createwitness: "CreateWitness2";
    readonly deploycontract: "DeployContract";
    readonly easytransfer: "EasyTransfer";
    readonly easytransferasset: "EasyTransferAsset";
    readonly easytransferassetbyprivate: "EasyTransferAssetByPrivate";
    readonly easytransferbyprivate: "EasyTransferByPrivate";
    readonly exchangecreate: "ExchangeCreate";
    readonly exchangeinject: "ExchangeInject";
    readonly exchangetransaction: "ExchangeTransaction";
    readonly exchangewithdraw: "ExchangeWithdraw";
    readonly freezebalance: "FreezeBalance2";
    readonly generateaddress: "GenerateAddress";
    readonly getaccount: "GetAccount";
    readonly getaccountbalance: "GetAccountBalance";
    readonly getaccountbyid: "GetAccountById";
    readonly getaccountnet: "GetAccountNet";
    readonly getaccountresource: "GetAccountResource";
    readonly getakfromask: "GetAkFromAsk";
    readonly getassetissuebyaccount: "GetAssetIssueByAccount";
    readonly getassetissuebyid: "GetAssetIssueById";
    readonly getassetissuebyname: "GetAssetIssueByName";
    readonly getassetissuelist: "GetAssetIssueList";
    readonly getassetissuelistbyname: "GetAssetIssueListByName";
    readonly getblock: "GetBlock";
    readonly getblockbalancetrace: "GetBlockBalanceTrace";
    readonly getblockbyid: "GetBlockById2";
    readonly getblockbylatestnum: "GetBlockByLatestNum2";
    readonly getblockbylimitnext: "GetBlockByLimitNext2";
    readonly getblockbynum: "GetBlockByNum2";
    readonly getBrokerage: "GetBrokerageInfo";
    readonly getburntrx: "GetBurnTrx";
    readonly getchainparameters: "GetChainParameters";
    readonly getcontract: "GetContract";
    readonly getcontractinfo: "GetContractInfo";
    readonly getdelegatedresource: "GetDelegatedResource";
    readonly getdelegatedresourceaccountindex: "GetDelegatedResourceAccountIndex";
    readonly getdiversifier: "GetDiversifier";
    readonly getexchangebyid: "GetExchangeById";
    readonly getexpandedspendingkey: "GetExpandedSpendingKey";
    readonly getincomingviewingkey: "GetIncomingViewingKey";
    readonly getmarketorderbyaccount: "GetMarketOrderByAccount";
    readonly getmarketorderbyid: "GetMarketOrderById";
    readonly getmarketorderlistbypair: "GetMarketOrderListByPair";
    readonly getmarketpairlist: "GetMarketPairList";
    readonly getmarketpricebypair: "GetMarketPriceByPair";
    readonly getmerkletreevoucherinfo: "GetMerkleTreeVoucherInfo";
    readonly getnewshieldedaddress: "GetNewShieldedAddress";
    readonly getnextmaintenancetime: "GetNextMaintenanceTime";
    readonly getnkfromnsk: "GetNkFromNsk";
    readonly getnodeinfo: "GetNodeInfo";
    readonly getnowblock: "GetNowBlock2";
    readonly getpaginatedassetissuelist: "GetPaginatedAssetIssueList";
    readonly getpaginatedexchangelist: "GetPaginatedExchangeList";
    readonly getpaginatedproposallist: "GetPaginatedProposalList";
    readonly getpendingsize: "GetPendingSize";
    readonly getproposalbyid: "GetProposalById";
    readonly getrcm: "GetRcm";
    readonly getReward: "GetRewardInfo";
    readonly getshieldtransactionhash: "GetShieldTransactionHash";
    readonly getapprovedlist: "GetTransactionApprovedList";
    readonly gettransactionbyid: "GetTransactionById";
    readonly gettransactioncountbyblocknum: "GetTransactionCountByBlockNum";
    readonly gettransactionfrompending: "GetTransactionFromPending";
    readonly gettransactioninfobyblocknum: "GetTransactionInfoByBlockNum";
    readonly gettransactioninfobyid: "GetTransactionInfoById";
    readonly gettransactionlistfrompending: "GetTransactionListFromPending";
    readonly gettransactionsign: "GetTransactionSign2";
    readonly getsignweight: "GetTransactionSignWeight";
    readonly gettriggerinputforshieldedtrc20contract: "GetTriggerInputForShieldedTRC20Contract";
    readonly getzenpaymentaddress: "GetZenPaymentAddress";
    readonly isshieldedtrc20contractnotespent: "IsShieldedTRC20ContractNoteSpent";
    readonly isspend: "IsSpend";
    readonly listexchanges: "ListExchanges";
    readonly listnodes: "ListNodes";
    readonly listproposals: "ListProposals";
    readonly listwitnesses: "ListWitnesses";
    readonly marketcancelorder: "MarketCancelOrder";
    readonly marketsellasset: "MarketSellAsset";
    readonly participateassetissue: "ParticipateAssetIssue2";
    readonly proposalapprove: "ProposalApprove";
    readonly proposalcreate: "ProposalCreate";
    readonly proposaldelete: "ProposalDelete";
    readonly scanandmarknotebyivk: "ScanAndMarkNoteByIvk";
    readonly scannotebyivk: "ScanNoteByIvk";
    readonly scannotebyovk: "ScanNoteByOvk";
    readonly scanshieldedtrc20notesbyivk: "ScanShieldedTRC20NotesByIvk";
    readonly scanshieldedtrc20notesbyovk: "ScanShieldedTRC20NotesByOvk";
    readonly sellstorage: "SellStorage";
    readonly setaccountid: "SetAccountId";
    readonly setspendingkey: "GetSpendingKey";
    readonly totaltransaction: "TotalTransaction";
    readonly transferasset: "TransferAsset2";
    readonly treatetransaction: "CreateTransaction2";
    readonly triggerconstantcontract: "TriggerConstantContract";
    readonly triggersmartcontract: "TriggerContract";
    readonly unfreezeasset: "UnfreezeAsset2";
    readonly unfreezebalance: "UnfreezeBalance2";
    readonly updateaccount: "UpdateAccount2";
    readonly updateasset: "UpdateAsset2";
    readonly updateBrokerage: "UpdateBrokerage";
    readonly updateenergylimit: "UpdateEnergyLimit";
    readonly updatesetting: "UpdateSetting";
    readonly updatewitness: "UpdateWitness2";
    readonly votewitnessaccount: "VoteWitnessAccount2";
    readonly withdrawbalance: "WithdrawBalance2";
    readonly fundinject: "FundInject";
    readonly sidechainproposalcreate: "SideChainProposalCreate";
    readonly estimateenergy: "EstimateEnergy";
    readonly getbandwidthprices: "GetBandwidthPrices";
    readonly getenergyprices: "GetEnergyPrices";
};
export declare const walletSolidityMethods: {
    readonly generateaddress: "GenerateAddress";
    readonly getaccount: "GetAccount";
    readonly getaccountbyid: "GetAccountById";
    readonly getassetissuebyid: "GetAssetIssueById";
    readonly getassetissuebyname: "GetAssetIssueByName";
    readonly getassetissuelist: "GetAssetIssueList";
    readonly getassetissuelistbyname: "GetAssetIssueListByName";
    readonly getblock: "GetBlock";
    readonly getblockbynum: "GetBlockByNum2";
    readonly getBrokerage: "GetBrokerageInfo";
    readonly getburntrx: "GetBurnTrx";
    readonly getdelegatedresource: "GetDelegatedResource";
    readonly getdelegatedresourceaccountindex: "GetDelegatedResourceAccountIndex";
    readonly getexchangebyid: "GetExchangeById";
    readonly getmarketorderbyaccount: "GetMarketOrderByAccount";
    readonly getmarketorderbyid: "GetMarketOrderById";
    readonly getmarketorderlistbypair: "GetMarketOrderListByPair";
    readonly getmarketpairlist: "GetMarketPairList";
    readonly getmarketpricebypair: "GetMarketPriceByPair";
    readonly getmerkletreevoucherinfo: "GetMerkleTreeVoucherInfo";
    readonly getnowblock: "GetNowBlock2";
    readonly getpaginatedassetissuelist: "GetPaginatedAssetIssueList";
    readonly getReward: "GetRewardInfo";
    readonly gettransactionbyid: "GetTransactionById";
    readonly gettransactioncountbyblocknum: "GetTransactionCountByBlockNum";
    readonly gettransactioninfobyblocknum: "GetTransactionInfoByBlockNum";
    readonly gettransactioninfobyid: "GetTransactionInfoById";
    readonly isshieldedtrc20contractnotespent: "IsShieldedTRC20ContractNoteSpent";
    readonly isspend: "IsSpend";
    readonly listexchanges: "ListExchanges";
    readonly listwitnesses: "ListWitnesses";
    readonly scanandmarknotebyivk: "ScanAndMarkNoteByIvk";
    readonly scannotebyivk: "ScanNoteByIvk";
    readonly scannotebyovk: "ScanNoteByOvk";
    readonly scanshieldedtrc20notesbyivk: "ScanShieldedTRC20NotesByIvk";
    readonly scanshieldedtrc20notesbyovk: "ScanShieldedTRC20NotesByOvk";
    readonly triggerconstantcontract: "TriggerConstantContract";
    readonly estimateenergy: "EstimateEnergy";
    readonly getbandwidthprices: "GetBandwidthPrices";
    readonly getenergyprices: "GetEnergyPrices";
};
export declare const walletExtensionMethods: {
    readonly gettransactionsfromthis: "GetTransactionsFromThis2";
    readonly gettransactionstothis: "GetTransactionsToThis2";
};
export declare function serviceToUrl(serviceFullName: string): string;
export default serviceToUrl;
//# sourceMappingURL=serviceToUrl.d.ts.map