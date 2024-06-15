import{_ as r,c as n,j as e,a as t,I as a,a3 as o,o as l,D as s}from"./chunks/framework.B3zJtUgz.js";const S=JSON.parse('{"title":"Play Integrity/System Integrity","description":"","frontmatter":{"prev":false,"next":false},"headers":[],"relativePath":"custom-rom-guide/common/about-integrity-safetynet.md","filePath":"custom-rom-guide/common/about-integrity-safetynet.md","lastUpdated":1718430112000}'),c={name:"custom-rom-guide/common/about-integrity-safetynet.md"},d=o('<h1 id="play-integrity-system-integrity" tabindex="-1">Play Integrity/System Integrity <a class="header-anchor" href="#play-integrity-system-integrity" aria-label="Permalink to &quot;Play Integrity/System Integrity&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>This section is to be referred only if you are not able to use Banking and Payment apps on your current ROM.</p></div><p>The Play Integrity API helps you check that you&#39;re interacting with your genuine app on a genuine Android device powered by Google Play services. The Play Integrity API has replaced SafetyNet Attestation and Android Device Verification.</p><h2 id="problems-due-to-play-integrity" tabindex="-1">Problems due to Play Integrity <a class="header-anchor" href="#problems-due-to-play-integrity" aria-label="Permalink to &quot;Problems due to Play Integrity&quot;">​</a></h2><p>Unlocking the bootloader, rooting or flashing a custom ROM on your device triggers a safety &#39;warning&#39; to Google, the device being checked by banking or other apps each time they&#39;re opened. The most commmon app that stops working when your device is rooted is Google Wallet. Modifications brought to the environment your phone is &#39;meant&#39; to be by defaut breaks a safety measure imposed by Google called Play Integrity.</p><p>In order to use some banking apps on your rooted device, you&#39;ll have to bypass those measures, to try and trick Google into thinking your device is completely alright and that it passes all the safety checks required.</p><div class="info custom-block"><p class="custom-block-title">Symptoms</p><ol><li>Some consequences of not passing device integrity are: <ul><li>Bank apps may not open or show rooted error.</li><li>Some apps will not show in Play store even when searching.</li><li>Google Pay/Google Wallet may show error setting up.</li><li>RCS messaging may not work, or it will for a very short period of time.</li><li>For some really random instance, some users will not receive/initiate calls.</li></ul></li><li>Google Pay might still work in some countries like India even if you don&#39;t pass play integrity.</li></ol></div><ul><li>If you&#39;re facing this issue on a <strong>Realme</strong> device, refer to <a href="https://c.realme.com/in/post-details/1333386681037881344" target="_blank" rel="noreferrer">this link</a></li></ul><h2 id="checking-play-integrity" tabindex="-1">Checking Play Integrity <a class="header-anchor" href="#checking-play-integrity" aria-label="Permalink to &quot;Checking Play Integrity&quot;">​</a></h2>',9),y=e("strong",null,[e("code",null,"SPIC - Simple Play Integrity Check")],-1),h=o('<div class="info custom-block"><p class="custom-block-title">After requesting an attestation in Play Integrity API you should get this result:</p><img src="https://i.ibb.co/6mxb3w5/SPIC-minimum-pass.png" alt="play-integrity-wallet-error" width="300" class="center img-padding"></div><p>We can know more about verdicts in <a href="https://xdaforums.com/t/info-play-integrity-api-replacement-for-safetynet.4479337/" target="_blank" rel="noreferrer">this</a> post and within the SPIC app by pressing <em>the question mark symbol</em>.</p><div class="info custom-block"><p class="custom-block-title">NOTE</p><p>You don&#39;t need to pass Strong Integrity, being impossible to do so on bootloader unlocked devices.</p></div><h2 id="detecting-the-problem" tabindex="-1">Detecting the Problem <a class="header-anchor" href="#detecting-the-problem" aria-label="Permalink to &quot;Detecting the Problem&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Google Wallet and some other banking apps won&#39;t work:</p><img src="https://i.ibb.co/j8MRkHs/play-integrity-error-wallet.png" alt="play-integrity-wallet-error" width="300" class="center img-padding"><p>If you meet less than <code>MEETS_DEVICE_INTEGRITY</code></p></div><h2 id="expected-fix-for-play-integrity" tabindex="-1">Expected Fix for Play Integrity <a class="header-anchor" href="#expected-fix-for-play-integrity" aria-label="Permalink to &quot;Expected Fix for Play Integrity&quot;">​</a></h2>',6),p=o('<p>If you&#39;re bootloader unlocked you&#39;re on stock ROM and you can&#39;t get <code>MEETS_DEVICE_INTEGRITY</code>, root your device using magisk and install a module called <code>Play Integrity NEXT</code>.</p><p>You will need root and Zygisk, so you must choose ONE of this three setups:</p><ul><li>Magisk with Zygisk enabled.</li><li>KernelSU with <a href="https://github.com/Dr-TSNG/ZygiskNext" target="_blank" rel="noreferrer">ZygiskNext</a> module installed.</li><li>APatch with <a href="https://github.com/Dr-TSNG/ZygiskNext" target="_blank" rel="noreferrer">ZygiskNext</a> module installed.</li></ul>',3),u=e("p",null,"All you need to do is restart your device, open the GMS app and grant it root, clear the data of Google Wallet & Google Services, check if you pass integrity using SPIC, then you're good to go.",-1),g=e("ul",null,[e("li",null,[t("If this version of Play Integrity doesn't work, try with the newer version called "),e("code",null,"playcurl"),t(" which you can find "),e("a",{href:"https://github.com/daboynb/PlayIntegrityNEXT",target:"_blank",rel:"noreferrer"},"here"),t(". On that github page, you can also find the instructions for the module.")])],-1),m=e("li",null,[e("p",null,[t("If you're on a custom ROM, and the above steps don't help, check if your ROM is "),e("em",null,[e("strong",null,"signed")]),t(". Check the XDA or telegram post on your ROM to see if there're any avaliable updates (look for the ones from May).")])],-1),f=e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"FAQ"),e("p",null,[e("a",{href:"https://xdaforums.com/t/pif-faq.4653307/",target:"_blank",rel:"noreferrer"},"https://xdaforums.com/t/pif-faq.4653307/")])],-1);function b(_,k,I,P,v,w){const i=s("CustomButton");return l(),n("div",null,[d,e("p",null,[t("We can check Play Integrity using "),y,t(),a(i,{link:"https://play.google.com/store/apps/details?id=com.henrikherzig.playintegritychecker",label:"Download from PlayStore"})]),h,e("ul",null,[e("li",null,[p,a(i,{link:"https://github.com/chiteroman/PlayIntegrityFix/releases/latest",label:"Download Play Integrity Fix Module from GitHub"}),u,g]),m]),f])}const x=r(c,[["render",b]]);export{S as __pageData,x as default};
