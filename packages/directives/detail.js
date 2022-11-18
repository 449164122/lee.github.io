/*
 * @Author: 李韬
 * @Date: 2022-08-11 09:06:50
 * @LastEditors: 李韬
 * @LastEditTime: 2022-11-18 11:42:11
 */
export default {
  inserted: function(el, bind = {}) {
    el.addEventListener('dblclick', ()=>{
      const detailDom = document.getElementById('zfs-check-detail');
      if (detailDom) {
        detailDom.style.display = 'flex';
        detailDom.getElementsByTagName('div')[0].innerText = bind.value || el.innerText;
        setTimeout(()=>{
          detailDom.style.opacity = 1;
        },0)
      } else {
        const newEl= document.createElement('div');
        newEl.setAttribute('id', 'zfs-check-detail');
        newEl.onclick = function() { 
          this.style.opacity = 0;
          setTimeout(()=>{
            this.style.display = 'none';
          },400)
        }
        newEl.style.cssText = "position: fixed; top: 0; left: 0; bottom: 0; right: 0; z-index: 1000; background: #fff; display: flex; align-items: center; justify-content: center; padding: 0 50px; box-sizing: border-box;overflow-y: auto; font-size: 20px;opacity: 0;transition: opacity 0.4s;" 
        const newElChild= document.createElement('div');
        newElChild.style.cssText = "margin: auto;word-wrap: break-word;width: 100%;";
        newElChild.innerText = bind.value || el.innerText;
        newEl.appendChild(newElChild)
        document.body.appendChild(newEl);
        setTimeout(()=>{
          newEl.style.opacity = 1;
        },0)
      }
    }, false)
  }
}