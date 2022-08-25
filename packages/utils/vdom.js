/*
 * @Author: 李韬
 * @Date: 2022-08-02 16:37:18
 * @LastEditors: 李韬
 * @LastEditTime: 2022-08-02 18:01:17
 */
import { hasOwn } from 'zfs-mobile/packages/utils/util';

export function isVNode(node) {
  return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
}
