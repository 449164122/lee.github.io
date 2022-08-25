/*
 * @Author: Do not edit
 * @Date: 2022-03-11 10:43:20
 * @LastEditors: chendan
 * @LastEditTime: 2022-03-24 10:26:12
 * @Description: Do not edit
 * @FilePath: \zfs-ui\src\filters\formatBank.js
 */
export default function formatBank(bankNos, isSecret = false) {
  if (bankNos) {
    const result = [];
    String(bankNos).split(',').forEach((bankNo) => {
      let res = bankNo;
      if (isSecret && res.length > 8) {
        res = res.split('').map((ch, index) => {
          if (ch && index > 3 && res.length - index > 4) {
            ch = '*';
          }
          return ch;
        }).join('');
        res = res.replace(/[*]+/, ($1) => ` ${$1} `).trim();
      } else {
        res = res.replace(/(.{4})/g, '$1 ').trim();
      }
      result.push(res);
    });
    return result.join(',');
  }
  return '';
}
