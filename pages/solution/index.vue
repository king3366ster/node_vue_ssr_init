<template>
  <div>
    <h1>Hello solution!</h1>
    <input id="demo" type="file">
    <button id="submit" v-on:click="uploadFile">提交</button>
    <a href="/solution/test">/solution/test</a>
  </div>
</template>

<script>
export default {
  head: {
    title: '云信案例_IM云应用场景-网易云通信与视频',
    meta: [
      { hid: 'keywords', name: 'keywords', content: '云信案例,网易云案例,通信与视频案例,IM云应用场景' },
      { hid: 'description', name: 'description', content: '网易云信拥有丰富的案例,应用场景覆盖在线医疗、在线教育、娱乐、社交、O2O物流等多种领域,任何行业都需要网易云信。' }
    ]
  },
  methods: {
    uploadFile () {
      let ipt = document.getElementById('demo').files[0]
      console.log(ipt)
      let reader = new FileReader()
      reader.readAsDataURL(ipt)
      // reader.readAsArrayBuffer(ipt)
      reader.onload = (fEvent) => {
        let dataURL = fEvent.target.result
        console.log(dataURL)
        // let bArray = fEvent.target.result
        // console.log(bArray)
        console.log(ipt.type)
        // console.log(new Blob([bArray], { type: ipt.type }))
      }
    }
  }
}

</script>
