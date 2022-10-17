import TronWeb from '..';
import utils from '../utils';

interface IOperatorBase {
    name: string;
    value?: any;
    optional?: boolean;
}
export type IOperator = IOperatorBase &
    (
        | {
              type:
                  | 'address'
                  | 'positive-integer'
                  | 'tokenId'
                  | 'notEmptyObject'
                  | 'resource'
                  | 'url'
                  | 'hex'
                  | 'array'
                  | 'not-empty-string'
                  | 'boolean';
          }
        | {
              type: 'integer' | 'string';
              gt?: number;
              lt?: number;
              gte?: number;
              lte?: number;
          }
        | {
              type: 'notEqual';
              names: [string, string];
          }
    );

export default class Validator {
    tronWeb: TronWeb;

    constructor(tronWeb: TronWeb) {
        if (!tronWeb || !(tronWeb instanceof TronWeb))
            throw new Error('Expected instance of TronWeb');
        this.tronWeb = tronWeb;
    }

    invalid(param) {
        return (
            param.msg ||
            `Invalid ${param.name}${
                param.type === 'address' ? ' address' : ''
            } provided`
        );
    }

    notPositive(param) {
        return `${param.name} must be a positive integer`;
    }

    notEqual(param) {
        return (
            param.msg ||
            `${param.names[0]} can not be equal to ${param.names[1]}`
        );
    }

    // FIXME: complexity
    // eslint-disable-next-line complexity
    notValid(params: IOperator[] = [], callback = new Function()) {
        const normalized: { [key: string]: any } = {};
        let no = false;
        for (const param of params) {
            const { name, value, type, optional } = param;
            if (
                optional &&
                (!utils.isNotNullOrUndefined(value) ||
                    (type !== 'boolean' && value === false))
            )
                continue;
            normalized[name] = value;

            switch (param.type) {
                case 'address':
                    if (!this.tronWeb.isAddress(value)) no = true;
                    else normalized[name] = this.tronWeb.address.toHex(value);
                    break;

                case 'integer': {
                    // FIXME: this has to be a method with 4 bounds check
                    const { gt, lt, gte, lte } = param;
                    if (
                        !utils.isInteger(value) ||
                        (typeof gt === 'number' && value <= gt) ||
                        (typeof lt === 'number' && value >= lt) ||
                        (typeof gte === 'number' && value < gte) ||
                        (typeof lte === 'number' && value > lte)
                    )
                        no = true;
                    break;
                }
                case 'positive-integer':
                    if (!utils.isInteger(value) || value <= 0) {
                        callback(this.notPositive(param));
                        return;
                    }
                    break;

                case 'tokenId':
                    if (!utils.isString(value) || !value.length) no = true;
                    break;

                case 'notEmptyObject':
                    if (!utils.isObject(value) || !Object.keys(value).length)
                        no = true;
                    break;

                case 'notEqual':
                    if (
                        normalized[param.names[0]] ===
                        normalized[param.names[1]]
                    ) {
                        callback(this.notEqual(param));
                        return true;
                    }
                    break;

                case 'resource':
                    if (!['BANDWIDTH', 'ENERGY'].includes(value)) no = true;
                    break;

                case 'url':
                    if (!utils.isValidURL(value)) no = true;

                    break;

                case 'hex':
                    if (!utils.isHex(value)) no = true;

                    break;

                case 'array':
                    if (!Array.isArray(value)) no = true;
                    break;

                case 'not-empty-string':
                    if (!utils.isString(value) || !value.length) no = true;
                    break;

                case 'boolean':
                    if (!utils.isBoolean(value)) no = true;
                    break;
                case 'string': {
                    const { gt, lt, gte, lte } = param;
                    if (
                        !utils.isString(value) ||
                        (typeof gt === 'number' && value.length <= gt) ||
                        (typeof lt === 'number' && value.length >= lt) ||
                        (typeof gte === 'number' && value.length < gte) ||
                        (typeof lte === 'number' && value.length > lte)
                    )
                        no = true;
                    break;
                }
                default: {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const _exhaustiveCheck: never = param;
                }
            }
            if (no) {
                callback(this.invalid(param));
                return true;
            }
        }
        return false;
    }
}
