import {
  AlovaOptions,
  RequestState
} from '../typings';
import Alova from './Alova';
import { addAlova } from './network';
export { default as useRequest } from './hooks/useRequest';
export { default as useController } from './hooks/useController';
export { default as useWatcher } from './hooks/useWatcher';

export { default as ReactHook } from './predefined/ReactHook';
export { default as VueHook } from './predefined/VueHook';
export { default as GlobalFetch } from './predefined/GlobalFetch';
export { default as createLocalStorageSilentConfig } from './predefined/createLocalStorageSilentConfig';


/**
 * 创建Alova实例
 * @param options alova配置参数
 * @returns Alova实例
 */
export function createAlova<S extends RequestState, E extends RequestState>(options: AlovaOptions<S, E>) {
  const alova = new Alova<S, E>(options);
  addAlova(alova);
  return alova;
}