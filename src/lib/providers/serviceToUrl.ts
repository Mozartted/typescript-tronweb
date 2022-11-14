import type {
    Wallet,
    WalletExtension,
    WalletSolidity,
} from '../../proto/api/api';

export const walletMethods = {
    accountpermissionupdate: 'AccountPermissionUpdate',
    addsign: 'AddSign',
    broadcasttransaction: 'BroadcastTransaction',
    buystorage: 'BuyStorage',
    buystoragebytes: 'BuyStorageBytes',
    clearabi: 'ClearContractABI',
    createaccount: 'CreateAccount2',
    createaddress: 'CreateAddress',
    createassetissue: 'CreateAssetIssue2',
    createcommontransaction: 'CreateCommonTransaction',
    createshieldedcontractparameters: 'CreateShieldedContractParameters',
    createshieldedcontractparameterswithoutask:
        'CreateShieldedContractParametersWithoutAsk',
    createshieldedtransaction: 'CreateShieldedTransaction',
    createshieldedtransactionwithoutspendauthsig:
        'CreateShieldedTransactionWithoutSpendAuthSig',
    createshieldnullifier: 'CreateShieldNullifier',
    createspendauthsig: 'CreateSpendAuthSig',
    createtransaction: 'CreateTransaction2',
    createwitness: 'CreateWitness2',
    deploycontract: 'DeployContract',
    easytransfer: 'EasyTransfer',
    easytransferasset: 'EasyTransferAsset',
    easytransferassetbyprivate: 'EasyTransferAssetByPrivate',
    easytransferbyprivate: 'EasyTransferByPrivate',
    exchangecreate: 'ExchangeCreate',
    exchangeinject: 'ExchangeInject',
    exchangetransaction: 'ExchangeTransaction',
    exchangewithdraw: 'ExchangeWithdraw',
    freezebalance: 'FreezeBalance2',
    generateaddress: 'GenerateAddress',
    getaccount: 'GetAccount',
    getaccountbalance: 'GetAccountBalance',
    getaccountbyid: 'GetAccountById',
    getaccountnet: 'GetAccountNet',
    getaccountresource: 'GetAccountResource',
    getakfromask: 'GetAkFromAsk',
    getassetissuebyaccount: 'GetAssetIssueByAccount',
    getassetissuebyid: 'GetAssetIssueById',
    getassetissuebyname: 'GetAssetIssueByName',
    getassetissuelist: 'GetAssetIssueList',
    getassetissuelistbyname: 'GetAssetIssueListByName',
    getblock: 'GetBlock',
    getblockbalancetrace: 'GetBlockBalanceTrace',
    getblockbyid: 'GetBlockById2',
    getblockbylatestnum: 'GetBlockByLatestNum2',
    getblockbylimitnext: 'GetBlockByLimitNext2',
    getblockbynum: 'GetBlockByNum2',
    getBrokerage: 'GetBrokerageInfo',
    getburntrx: 'GetBurnTrx',
    getchainparameters: 'GetChainParameters',
    getcontract: 'GetContract',
    getcontractinfo: 'GetContractInfo',
    getdelegatedresource: 'GetDelegatedResource',
    getdelegatedresourceaccountindex: 'GetDelegatedResourceAccountIndex',
    getdiversifier: 'GetDiversifier',
    getexchangebyid: 'GetExchangeById',
    getexpandedspendingkey: 'GetExpandedSpendingKey',
    getincomingviewingkey: 'GetIncomingViewingKey',
    getmarketorderbyaccount: 'GetMarketOrderByAccount',
    getmarketorderbyid: 'GetMarketOrderById',
    getmarketorderlistbypair: 'GetMarketOrderListByPair',
    getmarketpairlist: 'GetMarketPairList',
    getmarketpricebypair: 'GetMarketPriceByPair',
    getmerkletreevoucherinfo: 'GetMerkleTreeVoucherInfo',
    getnewshieldedaddress: 'GetNewShieldedAddress',
    getnextmaintenancetime: 'GetNextMaintenanceTime',
    getnkfromnsk: 'GetNkFromNsk',
    getnodeinfo: 'GetNodeInfo',
    getnowblock: 'GetNowBlock2',
    getpaginatedassetissuelist: 'GetPaginatedAssetIssueList',
    getpaginatedexchangelist: 'GetPaginatedExchangeList',
    getpaginatedproposallist: 'GetPaginatedProposalList',
    getpendingsize: 'GetPendingSize',
    getproposalbyid: 'GetProposalById',
    getrcm: 'GetRcm',
    getReward: 'GetRewardInfo',
    getshieldtransactionhash: 'GetShieldTransactionHash',
    getapprovedlist: 'GetTransactionApprovedList',
    gettransactionbyid: 'GetTransactionById',
    gettransactioncountbyblocknum: 'GetTransactionCountByBlockNum',
    gettransactionfrompending: 'GetTransactionFromPending',
    gettransactioninfobyblocknum: 'GetTransactionInfoByBlockNum',
    gettransactioninfobyid: 'GetTransactionInfoById',
    gettransactionlistfrompending: 'GetTransactionListFromPending',
    gettransactionsign: 'GetTransactionSign2',
    getsignweight: 'GetTransactionSignWeight',
    gettriggerinputforshieldedtrc20contract:
        'GetTriggerInputForShieldedTRC20Contract',
    getzenpaymentaddress: 'GetZenPaymentAddress',
    isshieldedtrc20contractnotespent: 'IsShieldedTRC20ContractNoteSpent',
    isspend: 'IsSpend',
    listexchanges: 'ListExchanges',
    listnodes: 'ListNodes',
    listproposals: 'ListProposals',
    listwitnesses: 'ListWitnesses',
    marketcancelorder: 'MarketCancelOrder',
    marketsellasset: 'MarketSellAsset',
    participateassetissue: 'ParticipateAssetIssue2',
    proposalapprove: 'ProposalApprove',
    proposalcreate: 'ProposalCreate',
    proposaldelete: 'ProposalDelete',
    scanandmarknotebyivk: 'ScanAndMarkNoteByIvk',
    scannotebyivk: 'ScanNoteByIvk',
    scannotebyovk: 'ScanNoteByOvk',
    scanshieldedtrc20notesbyivk: 'ScanShieldedTRC20NotesByIvk',
    scanshieldedtrc20notesbyovk: 'ScanShieldedTRC20NotesByOvk',
    sellstorage: 'SellStorage',
    setaccountid: 'SetAccountId',
    setspendingkey: 'GetSpendingKey',
    totaltransaction: 'TotalTransaction',
    transferasset: 'TransferAsset2',
    treatetransaction: 'CreateTransaction2',
    triggerconstantcontract: 'TriggerConstantContract',
    triggersmartcontract: 'TriggerContract',
    unfreezeasset: 'UnfreezeAsset2',
    unfreezebalance: 'UnfreezeBalance2',
    updateaccount: 'UpdateAccount2',
    updateasset: 'UpdateAsset2',
    updateBrokerage: 'UpdateBrokerage',
    updateenergylimit: 'UpdateEnergyLimit',
    updatesetting: 'UpdateSetting',
    updatewitness: 'UpdateWitness2',
    votewitnessaccount: 'VoteWitnessAccount2',
    withdrawbalance: 'WithdrawBalance2',
    fundinject: 'FundInject',
    sidechainproposalcreate: 'SideChainProposalCreate',
} as const;

export const walletSolidityMethods = {
    generateaddress: 'GenerateAddress',
    getaccount: 'GetAccount',
    getaccountbyid: 'GetAccountById',
    getassetissuebyid: 'GetAssetIssueById',
    getassetissuebyname: 'GetAssetIssueByName',
    getassetissuelist: 'GetAssetIssueList',
    getassetissuelistbyname: 'GetAssetIssueListByName',
    getblock: 'GetBlock',
    getblockbynum: 'GetBlockByNum2',
    getBrokerage: 'GetBrokerageInfo',
    getburntrx: 'GetBurnTrx',
    getdelegatedresource: 'GetDelegatedResource',
    getdelegatedresourceaccountindex: 'GetDelegatedResourceAccountIndex',
    getexchangebyid: 'GetExchangeById',
    getmarketorderbyaccount: 'GetMarketOrderByAccount',
    getmarketorderbyid: 'GetMarketOrderById',
    getmarketorderlistbypair: 'GetMarketOrderListByPair',
    getmarketpairlist: 'GetMarketPairList',
    getmarketpricebypair: 'GetMarketPriceByPair',
    getmerkletreevoucherinfo: 'GetMerkleTreeVoucherInfo',
    getnowblock: 'GetNowBlock2',
    getpaginatedassetissuelist: 'GetPaginatedAssetIssueList',
    getReward: 'GetRewardInfo',
    gettransactionbyid: 'GetTransactionById',
    gettransactioncountbyblocknum: 'GetTransactionCountByBlockNum',
    gettransactioninfobyblocknum: 'GetTransactionInfoByBlockNum',
    gettransactioninfobyid: 'GetTransactionInfoById',
    isshieldedtrc20contractnotespent: 'IsShieldedTRC20ContractNoteSpent',
    isspend: 'IsSpend',
    listexchanges: 'ListExchanges',
    listwitnesses: 'ListWitnesses',
    scanandmarknotebyivk: 'ScanAndMarkNoteByIvk',
    scannotebyivk: 'ScanNoteByIvk',
    scannotebyovk: 'ScanNoteByOvk',
    scanshieldedtrc20notesbyivk: 'ScanShieldedTRC20NotesByIvk',
    scanshieldedtrc20notesbyovk: 'ScanShieldedTRC20NotesByOvk',
    triggerconstantcontract: 'TriggerConstantContract',
} as const;

export const walletExtensionMethods = {
    gettransactionsfromthis: 'GetTransactionsFromThis2',
    gettransactionstothis: 'GetTransactionsToThis2',
} as const;

export function serviceToUrl(serviceFullName: string): string {
    return serviceFullName;
    // let [src, service] = serviceFullName.split('/');
    // let allowed: Record<string, string>;
    // if (src === 'wallet')
    //     allowed = walletMethods;
    // else if (src === 'walletsolidity')
    //     allowed = walletSolidityMethods;
    // else if (src === 'walletextension')
    //     allowed = walletExtensionMethods;
    // else
    //     throw new Error('Unknown source');
    // if ((service + '2') in allowed) service += '2';
    // return `${src}/${service}`;
}

export default serviceToUrl;

// verify typing
/* eslint-disable @typescript-eslint/no-unused-vars */
const _walletMethods: Record<string, keyof Wallet> = walletMethods;
const _walletSolidityMethods: Record<string, keyof WalletSolidity> =
    walletSolidityMethods;
const _walletExtensionMethods: Record<string, keyof WalletExtension> =
    walletExtensionMethods;
/* eslint-enable @typescript-eslint/no-unused-vars */