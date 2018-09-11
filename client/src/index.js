import './style/index.css'

(function(){
  // let hex2rgbBtn = document.getElementById('hex2rgbBtn')
  // let rgb2hexBtn = document.getElementById('rgb2hexBtn')
  const rgbInputs = document.querySelectorAll('.rgbInput')
  const hexInput = document.getElementById('hexInput')
  const rgbValOutput = document.getElementById('rgbValOutput') 
  const hexValOutput = document.getElementById('hexValOutput') 
  const rgbColorOutput = document.getElementById('rgbColorOutput') 
  const hexColorOutput = document.getElementById('hexColorOutput')
  const hexReg = /[0-9a-fA-F]{2}(?=(?:[0-9a-fA-F]{2,4})|$)/g
  
  // 如果焦点在某一类输入框，则清空另一类的输入框
  // rgbInputs.forEach((input) => {
  //   input.addEventListener('focus', () => {
  //     if(!!hexInput.value) hexInput.value = ''
  //   })
  // })
  // hexInput.addEventListener('focus', () => {
  //   rgbInputs.forEach((input) => {
  //     input.value = ''
  //   })
  // })

  // 转换
  document.getElementById('rgb2hexBtn').addEventListener('click', () => {
    let result = '#'

    rgbInputs.forEach((item) => {
      if(!item.value) return false // 没有值则不会输出
      console.log('in ==> ',item.value)
      let hexVal = (+item.value).toString(16)
      hexVal = hexVal.padStart(2, '0') // 如果小于16，全部补0
      result += hexVal
    })
    hexValOutput.innerHTML = result
    hexColorOutput.style.backgroundColor = result
  })
  document.getElementById('hex2rgbBtn').addEventListener('click', () => {
    const hexInputVal = hexInput.value
    
    if(hexInputVal.length < 6) return false // 不满6位，不进行转换

    let matchResult
    let rgbResult = []

    matchResult = hexInputVal.match(hexReg)
    if(matchResult.length == 3){
      matchResult = matchResult.slice(0,3)
      matchResult.forEach((item, idx) => {
        let metricVal = parseInt(+('0x'+item), 10)
        // rgbInputs[idx].value = metricVal
        rgbResult.push(metricVal)
      })
      rgbValOutput.innerHTML = 'rgb(' + rgbResult.join(',') + ')'
      rgbColorOutput.style.backgroundColor = 'rgb(' + rgbResult.join(',') + ')'
    }else{
      return false
    }
  })
})()