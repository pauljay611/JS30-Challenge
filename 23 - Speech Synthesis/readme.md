# lesson23
## 講話 api
1. SpeechSynthesisUtterance
new 一個講話物件

2. 講話 & 停止
speechSynthesis.speak(msg);
speechSynthesis.cancel()

3. 屬性
    msg.text = text.value
    msg.rate = options[0].value
    msg.pitch = options[1].value
    msg.voice = voices.find(voice => voice.name === voicesDropdown.value);

4. getVoices() 存進 voices[]
請搭配 speechSynthesis.addEventListener('voiceschanged' 使用
不然抓不到

5. voices 查找相同 name 的 voice item 更換 voice