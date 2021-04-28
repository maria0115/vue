<template>
  <div>
    다크{{ prefersDark }} 바겻다 {{ newColorScheme }} 라이트{{ prefersLight }}
    {{ prefersno }}
    {{browser}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prefersDark: false,
      prefersLight: false,
      newColorScheme: "de",
      browser:""
    };
  },
  created() {
    // let self=this;
    this.prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    this.prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    this.newColorScheme = e.matches ? "dark" : "light";
    });
    this.mymethod();
  },
  methods: {
    mymethod() {
      const agt = navigator.userAgent.toLowerCase();
      if (agt.indexOf("chrome") != -1) this.browser = "Chrome";
      if (agt.indexOf("opera") != -1) this.browser = "Opera";
      if (agt.indexOf("staroffice") != -1) this.browser = "Star Office";
      if (agt.indexOf("webtv") != -1) this.browser = "WebTV";
      if (agt.indexOf("beonex") != -1) this.browser = "Beonex";
      if (agt.indexOf("chimera") != -1) this.browser = "Chimera";
      if (agt.indexOf("netpositive") != -1) this.browser = "NetPositive";
      if (agt.indexOf("phoenix") != -1) this.browser = "Phoenix";
      if (agt.indexOf("firefox") != -1) this.browser = "Firefox";
      if (agt.indexOf("safari") != -1) this.browser = "Safari";
      if (agt.indexOf("skipstone") != -1) this.browser = "SkipStone";
      if (agt.indexOf("netscape") != -1) this.browser = "Netscape";
      // if (agt.indexOf("mozilla/5.0") != -1) this.browser = "Mozilla";
      this.browser = navigator.userAgent.toLowerCase();
},
  },
    
  
};
</script>

<style>
</style>