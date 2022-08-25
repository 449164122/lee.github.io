/*
 * @Author: 李韬
 * @Date: 2022-07-27 11:44:50
 * @LastEditors: 李韬
 * @LastEditTime: 2022-07-27 11:46:26
 */
export default function telHideCenter(phone) {
    const reg = /^(\d{3})\d{4}(\d{4})$/;
    return phone.toString().replace(reg, '$1****$2');
  }
