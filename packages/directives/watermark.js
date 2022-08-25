/*
 * @Author: your name
 * @Date: 2020-01-16 17:43:28
 * @LastEditTime: 2021-03-16 13:55:56
 * @LastEditors: 黄晨
 * @Description: In User Settings Edit
 * @FilePath: \zfs-ui\src\directives\watermark.js
 */
// 水印效果
export const watermark = {
  inserted(el, binding) {
    const canvas = document.getElementById('watermark') || document.createElement('canvas');
    canvas.id = 'watermark';
    const { innerWidth, innerHeight } = window;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';

    const ctx = canvas.getContext('2d');
    ctx.translate(innerWidth * 0.45, innerHeight * 0.4);
    ctx.rotate(-20 * Math.PI / 180);
    ctx.translate(-innerWidth * 0.55, -innerHeight * 0.6);
    ctx.font = '16px YaHei';
    ctx.fillStyle = 'rgba(180, 180, 180, .18)';
    ctx.textBaseline = 'hanging';
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 8; j++) {
        ctx.fillText(binding.value, innerWidth * 1.2 / 5 * i + 50, innerHeight * 1.4 / 8 * j);
      }
    }
    el.appendChild(canvas);
  },
};
export default watermark;
