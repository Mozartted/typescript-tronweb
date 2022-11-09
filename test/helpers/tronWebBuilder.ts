import chalk from 'chalk';
import TronWeb from '../setup/TronWeb';
import TronWebRef from '../../src/index';
export {default as TronWeb} from '../setup/TronWeb';
import jlog from './jlog';

import {
    FULL_NODE_API,
    // SOLIDITY_NODE_API,
    // EVENT_API,
    PRIVATE_KEY,
    // SUN_NETWORK,
    SIDE_CHAIN,
} from './config';

export interface IAccts {
    b58: string[];
    hex: string[];
    pks: string[];
}

export const createInstanceSide = (
    extraOptions = {},
    sideExtraOptions = {},
): TronWebRef => {
    const options = Object.assign(
        {
            fullHost: SIDE_CHAIN.fullNode,
            privateKey: PRIVATE_KEY,
        },
        extraOptions,
    );
    const sideOptions = Object.assign(
        {
            fullHost: SIDE_CHAIN.sideOptions.fullNode,
            mainGatewayAddress: SIDE_CHAIN.sideOptions.mainGatewayAddress,
            sideGatewayAddress: SIDE_CHAIN.sideOptions.sideGatewayAddress,
            sideChainId: SIDE_CHAIN.sideOptions.sideChainId,
        },
        sideExtraOptions,
    );
    console.log(chalk.green(JSON.stringify(sideOptions)));
    return new TronWeb(options, sideOptions);
};

export const createInstance = (extraOptions = {}): TronWebRef => {
    const options = Object.assign(
        {
            fullHost: FULL_NODE_API,
            privateKey: PRIVATE_KEY,
        },
        extraOptions,
    );
    return new TronWeb(options);
};

let instance: TronWeb;

export const getInstance = (): TronWeb => {
    if (!instance) instance = createInstance();
    return instance;
};

export const newTestAccounts = async (amount: number) => {
    const tronWeb = createInstance();

    console.log(chalk.blue(`Generating ${amount} new accounts...`));
    await tronWeb.fullNode.request(
        '/admin/temporary-accounts-generation?accounts=' + amount,
    );
    const lastCreated = await getTestAccounts(-1);
    jlog(lastCreated.b58);
};

export const getTestAccounts = async (block) => {
    const accounts: IAccts = {
        b58: [],
        hex: [],
        pks: [],
    };
    const tronWeb = createInstance();
    const accountsJson = await tronWeb.fullNode.request('/admin/accounts-json');
    const index =
        typeof block === 'number'
            ? block > -1 && block < accountsJson.more.length
                ? block
                : accountsJson.more.length - 1
            : undefined;
    accounts.pks =
        typeof block === 'number'
            ? accountsJson.more[index!].privateKeys
            : accountsJson.privateKeys;
    for (let i = 0; i < accounts.pks.length; i++) {
        const addr = tronWeb.address.fromPrivateKey(accounts.pks[i]);
        accounts.b58.push(addr!);
        accounts.hex.push(tronWeb.address.toHex(addr));
    }
    return Promise.resolve(accounts);
};

export default {
    createInstance,
    getInstance,
    createInstanceSide,
    newTestAccounts,
    getTestAccounts,
    TronWeb,
};