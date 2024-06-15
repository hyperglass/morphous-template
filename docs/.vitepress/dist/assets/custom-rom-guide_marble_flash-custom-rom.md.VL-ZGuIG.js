import{_ as r,c,I as o,j as e,a as t,w as i,a3 as a,D as l,o as d}from"./chunks/framework.B3zJtUgz.js";const N=JSON.parse('{"title":"Flashing Custom ROM","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"custom-rom-guide/marble/flash-custom-rom.md","filePath":"custom-rom-guide/marble/flash-custom-rom.md","lastUpdated":1718430112000}'),p={name:"custom-rom-guide/marble/flash-custom-rom.md"},h=a('<h1 id="flashing-custom-rom" tabindex="-1">Flashing Custom ROM <a class="header-anchor" href="#flashing-custom-rom" aria-label="Permalink to &quot;Flashing Custom ROM&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">Do refer to any special flashing instructions given by dev if needed for any particular rom.</p><p>The below steps works in general for most.</p></div><h3 id="_1-wipe" tabindex="-1">1. Wipe <a class="header-anchor" href="#_1-wipe" aria-label="Permalink to &quot;1. Wipe&quot;">​</a></h3><p>Go to <code>Wipe</code> and select everything except Internal storage and USB-Storage and hence wipe Data, Dalvik, Art, Cache.</p><blockquote><p>while wiping if you bymistakely selected USB-Storage as well, it will give an error and won&#39;t delete you&#39;re PC data due to different file system.</p></blockquote><hr><h3 id="_2-flash-firmware" tabindex="-1">2. Flash Firmware <a class="header-anchor" href="#_2-flash-firmware" aria-label="Permalink to &quot;2. Flash Firmware&quot;">​</a></h3><p>Download the <strong>Latest Firmware</strong> for your device on PC.</p>',8),u=a('<blockquote><p>Once you have the downloaded the archive, extract it.</p></blockquote><p>Now move Paste your Firmware/ROM zip inside Platform tools and type &quot;cmd&quot; in the windows file explorer Address bar again... it will open a Command Prompt Window.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>adb sideload &lt;zip file name with extention&gt;</span></span></code></pre></div><p>and it should start installation. After Fw installation, reboot to recovery and do the same for the ROM zip file.</p><blockquote><p>You may select &quot;retain recovery&quot; option during flashing.</p></blockquote><hr>',6),m={class:"tip custom-block"},_=e("p",{class:"custom-block-title"},"Optional Steps:",-1),g=e("li",null,"Reboot to Recovery Mode",-1),f=e("li",null,"Flash Kernel",-1),b=e("a",{href:"/morphous-marble/custom-rom-guide/common/boot-into-recovery-mode.html#check-custom-recovery-encryption"},"Flash DFE",-1),v=a('<h3 id="_3-flash-rom" tabindex="-1">3. Flash ROM <a class="header-anchor" href="#_3-flash-rom" aria-label="Permalink to &quot;3. Flash ROM&quot;">​</a></h3><p>Now move Paste your Firmware/ROM zip inside Platform tools and type &quot;cmd&quot; in the windows file explorer Address bar again... it will open a Command Prompt Window.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>adb sideload &lt;zip file name with extention&gt;</span></span></code></pre></div><blockquote><p>You may select &quot;retain recovery&quot; option during flashing.</p></blockquote><div class="info custom-block"><p class="custom-block-title">IMPORTANT STEP</p><p>Don&#39;t forget to Format Data after ROM installation.</p></div>',5),y=a('<p>-&gt; <code>Reboot to system</code></p><div class="tip custom-block"><p class="custom-block-title">Let the ROM settle, use it normally. After 48 hrs, all lags and drain issues should vanish.`</p><ul><li>Optional Reference: <a href="https://twrp.me/faq/snapshotsandmerges.html" target="_blank" rel="noreferrer">Snapshots and Merges</a></li></ul></div><hr><div class="important custom-block github-alert"><p class="custom-block-title">The above process is called Clean flashing.</p><p>It is when you completely erase your phone’s software and install a new version. The transition from Stock ROM to Custom ROM and vice versa always requires a clean flash. It is generally recommended to Clean Flash when the ROM based tree is updated.<br> For example, when AOSP Based ROM is switched to LOS Based Tree.</p><blockquote><p><strong>MIUI/HyperOS -&gt; AOSP</strong> and <strong>vice versa</strong> requires Clean Flash</p></blockquote></div><div class="danger custom-block"><p class="custom-block-title">VERY IMPORTANT</p><p>Backup your device&#39;s data before Clean Flashing a ROM as it requires you to erase all phone data.</p></div><hr><h1 id="updating-the-custom-rom" tabindex="-1">Updating the Custom ROM <a class="header-anchor" href="#updating-the-custom-rom" aria-label="Permalink to &quot;Updating the Custom ROM&quot;">​</a></h1>',7),k={class:"info custom-block"},w={class:"custom-block-title"},T=e("p",null,[t("Inside Settings App -> ... -> "),e("code",null,"System Updates"),t(".")],-1),C=e("blockquote",null,[e("p",null,[e("strong",null,"OTA"),t(' Stands for "Over The Air" and it is also the normal way of updating any android.\\')])],-1),O=e("p",null,"A Custom ROM may or may not have an OTA Updater.",-1),R=e("details",{class:"details custom-block"},[e("summary",null,"Details"),e("p",null,"Generally Updating a Custom ROM via OTA Updater is also considered as Dirty Flashing")],-1),q=a('<div class="warning custom-block"><p class="custom-block-title">2. Dirty Flashing ROM</p><p>Dirty flashing is when you update your phone’s software without erasing your data. It’s a quick way to install a new version of a ROM while keeping your apps, photos, and files.</p><div class="warning custom-block"><p class="custom-block-title">Instructions</p><p>For Dirty Flashing ROM, we simply flash the required files (Generally Updated Custom ROM zip file) inside the Custom Recovery either by downloading that file on device and selecting it, then flashing it after confirmation or using ADB Sideload:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>adb sideload &lt;zip file name with extention&gt;</span></span></code></pre></div></div></div><div class="info custom-block"><p class="custom-block-title">3. Clean Flashing</p><p>For Clean Flashing ROM, <a href="/morphous-marble/custom-rom-guide/marble/flash-custom-rom.html#flashing-custom-rom">Check the Instructions at the start of this page.</a></p></div><hr><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li>Always read rom changelog before dirty flash.</li><li>Generally, we don&#39;t Dirty flash when the ROM Based Tree is changed.</li></ul></div>',4);function A(M,S,P,F,I,x){const n=l("CustomButton"),s=l("Badge");return d(),c("div",null,[h,o(n,{link:"https://xmfirmwareupdater.com",label:"Visit XM Firmware Updater Website"}),u,e("div",m,[_,e("ul",null,[g,f,e("li",null,[b,t(" if encrypted "),o(s,{type:"danger"},{default:i(()=>[t("Mostly Not Required")]),_:1})])])]),v,e("ul",null,[e("li",null,[t("Wipe cache & dalvik again "),o(s,{type:"info"},{default:i(()=>[t("Optional")]),_:1})])]),y,e("div",k,[e("p",w,[t("1. OTA Updater "),o(s,{type:"info"},{default:i(()=>[t("Easiest Method")]),_:1})]),T,C,O,R]),q])}const V=r(p,[["render",A]]);export{N as __pageData,V as default};