import './style/index.css'

(function(){
  let hex2rgbBtn = document.getElementById('hex2rgbBtn')
  let rgb2hexBtn = document.getElementById('rgb2hexBtn')
  const rgbInputs = document.querySelectorAll('.rgbInput')
  const hexInput = document.getElementById('hexInput')
    // if (!hexInput.value) return
  const hexReg = /[0-9a-f]{2}(?=(?:[0-9a-f]{2,4})|$)/g
  rgb2hexBtn.addEventListener('click', () => {
    let result = '#'
    for(let i = 0; i < 3; i++){
      if(!rgbInputs[i].value) break // 有一个没有值都不会输出
      const metricVal = (+rgbInputs[i].value).toString(16)
      result += metricVal
    }
    hexInput.value = result
  })

  hex2rgbBtn.addEventListener('click', () => {
    const hexInputVal = hexInput.value
    let matchResult
    matchResult = hexInputVal.match(hexReg)
    if(matchResult.length >= 3){
      matchResult = matchResult.slice(0,3)
      matchResult.forEach((item, idx) => {
        rgbInputs[idx].value = parseInt(+('0x'+item), 10)
      })
    }else{
      return false
    }
  })
})()