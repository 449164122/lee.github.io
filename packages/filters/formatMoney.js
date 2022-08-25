/*
 * @Author: Do not edit
 * @Date: 2019-12-04 10:54:08
 * @LastEditors: 秦真
 * @LastEditTime: 2021-04-25 09:14:36
 * @FilePath: \zfs-ui\src\filters\formatMoney.js
 */

export default function formatMoney(s, n = 2) {
  s = Number(s);
  if (Number.isNaN(s)) {
    return '0.00';
  }
  n = n > 0 && n <= 20 ? n : 2;
  s = `${parseFloat((`${s}`).replace(/,/g, '').replace(/[^\d.-]/g, '')).toFixed(n)}`;
  const l = s.split('.')[0].split('').reverse();
  const r = s.split('.')[1];
  let t = '';
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length && l[i + 1] !== '-' ? ',' : '');
  }
  return `${t.split('').reverse().join('')}.${r}`;
}
