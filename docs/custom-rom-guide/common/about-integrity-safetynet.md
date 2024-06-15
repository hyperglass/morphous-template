---
prev: false
next: false
---

# Play Integrity/System Integrity
:::tip NOTE
This section is to be referred only if you are not able to use Banking and Payment apps on your current ROM.
:::
The Play Integrity API helps you check that you're interacting with your genuine app on a genuine Android device powered by Google Play services. The Play Integrity API has replaced SafetyNet Attestation and Android Device Verification.

## Problems due to Play Integrity
Unlocking the bootloader, rooting or flashing a custom ROM on your device triggers a safety 'warning' to Google, the device being checked by banking or other apps each time they're opened. 
The most commmon app that stops working when your device is rooted is Google Wallet. Modifications brought to the environment your phone is 'meant' to be by defaut breaks a safety measure imposed by Google called Play Integrity.

In order to use some banking apps on your rooted device, you'll have to bypass those measures, to try and trick Google into thinking your device is completely alright and that it passes all the safety checks required. 

:::info Symptoms
1. Some consequences of not passing device integrity are:  
    - Bank apps may not open or show rooted error.
    - Some apps will not show in Play store even when searching.
    - Google Pay/Google Wallet may show error setting up.
    - RCS messaging may not work, or it will for a very short period of time.
    - For some really random instance, some users will not receive/initiate calls.
2. Google Pay might still work in some countries like India even if you don't pass play integrity. 
:::

* If you're facing this issue on a **Realme** device, refer to [this link](https://c.realme.com/in/post-details/1333386681037881344)

## Checking Play Integrity
We can check Play Integrity using **`SPIC - Simple Play Integrity Check`** <CustomButton link="https://play.google.com/store/apps/details?id=com.henrikherzig.playintegritychecker" label="Download from PlayStore" />

:::info After requesting an attestation in Play Integrity API you should get this result:
<img src="https://i.ibb.co/6mxb3w5/SPIC-minimum-pass.png" alt="play-integrity-wallet-error" width="300" class="center img-padding"/>
:::
We can know more about verdicts in [this](https://xdaforums.com/t/info-play-integrity-api-replacement-for-safetynet.4479337/) post and within the SPIC app by pressing _the question mark symbol_.


:::info NOTE
You don't need to pass Strong Integrity, being impossible to do so on bootloader unlocked devices.
:::

## Detecting the Problem
:::warning Google Wallet and some other banking apps won't work:

<img src="https://i.ibb.co/j8MRkHs/play-integrity-error-wallet.png" alt="play-integrity-wallet-error" width="300" class="center img-padding"/>

If you meet less than `MEETS_DEVICE_INTEGRITY`
:::

##  Expected Fix for Play Integrity
* If you're bootloader unlocked you're on stock ROM and you can't get `MEETS_DEVICE_INTEGRITY`, root your device using magisk and install a module called `Play Integrity NEXT`.

    You will need root and Zygisk, so you must choose ONE of this three setups:
    * Magisk with Zygisk enabled.
    * KernelSU with [ZygiskNext](https://github.com/Dr-TSNG/ZygiskNext) module installed.
    * APatch with [ZygiskNext](https://github.com/Dr-TSNG/ZygiskNext) module installed.

    <CustomButton link="https://github.com/chiteroman/PlayIntegrityFix/releases/latest" label="Download Play Integrity Fix Module from GitHub" />

    All you need to do is restart your device, open the GMS app and grant it root, clear the data of Google Wallet & Google Services, check if you pass integrity using SPIC, then you're good to go.

    * If this version of Play Integrity doesn't work, try with the newer version called ``playcurl`` which you can find [here](https://github.com/daboynb/PlayIntegrityNEXT). On that github page, you can also find the instructions for the module.

* If you're on a custom ROM, and the above steps don't help, check if your ROM is ***signed***. Check the XDA or telegram post on your ROM to see if there're any avaliable updates (look for the ones from May).

:::info FAQ
https://xdaforums.com/t/pif-faq.4653307/
:::