---
aside: false
next: false
---
# Rooting Your Android Device (Redmi Note 12 Turbo/POCO F5)
> Codename: marble
## Rooting Device using Suggested Method (Custom ROM Specific)
> This method is not for Stock ROM.

:::info VERY IMPORTANT
You may need to flash `Boot.img` or flash a kernel zip **(later check _Changing Kernel_ in the end for that)** provided by the Developer of the Custom ROM you use, so do check the official rom Tg group...

* Flash to `Boot`, both partitions for A/B partitioned devices.

> Example: I'm using EvolutionX 9.0 and hence I need to flash LosKsu 9.x.zip for Root.
:::

Then install KernelSU:
* Download the `KernelSU_<version>-release.apk` file from the latest release [here](https://github.com/tiann/KernelSU/releases) from GitHub.

## Rooting via Custom Recovery
**Method 1:**
1)  Reboot into Recovery Mode then go to `ADVANCED` and **Install Magisk** directly.
2) Install Magisk Manager: Now booting into Android and install the Magisk Manager app (install Magisk APK File).

**Method 2:** 
1) Download Magisk/Magisk Delta APK file. (You may find the links [here](/custom-rom-guide/common/about-root)).\
Then Reboot into Recovery Mode and flash the Magisk apk file.
2) Install Magisk Manager: After flashing Magisk and booting into Android system, install the Magisk Manager app (install Magisk/Magisk-Delta APK File).

**Method 3:** 
1) In Android, Install Magisk Manager and follow the instructions to Patch Boot.img 
Then your device will be Rooted.


## Root using Magisk/Kitsune
### Patched Boot Method (Method 3 in Detail)

## Root using Magisk/Kitsune
### Patched Boot Method

Files required:
- [Payload Dumper](https://xdaforums.com/attachments/payload-dumper-gui-v2-3-zip.5758127/) (this is for your PC)
- Magisk/Kitsune (use the latest version) (this is for your phone)
- ROM

Firstly, grab your Exact (Custom or stock) ROM version. May it be fastboot or OTA.
1. In it, you should find a `boot.img` file. Transfer it to your phone.
2. If you find a `payload.bin` file, extract it using the payload dumper. You should have as output a bunch of images. Transfer the boot.img to your phone.
 
Patch it using magisk or whatever and transfer it back to your PC. Put in a nice, pretty folder and name it something friendly, like _patchedboot_.

Now open your fastboot tools and **BOOT IT TEMPORARILY** using the command
```
fastboot boot <file name with extention>
``` 
After doing so, your device should be rooted **temporarily**.\
Now open the Magisk/KernelSU app and direct install. Reboot. That's it!








## Latest Zygisk and LSposed
> These can be installed inside Magisk/Kitsune/KernelSU/etc. Manager apps

:::tip ZygiskNext
It is a Standalone implementation of Zygisk.
[ZygiskNext from GitHub](https://github.com/Dr-TSNG/ZygiskNext)
:::

:::tip LSPosed
We would have used  [`LSPosed`](https://github.com/LSPosed/LSPosed) but it has been archived by the owner and is no longer in development so we're installing a forked version named `LSPosed_mod` with continued development.

[Download LSPosed_mod from GitHub](https://github.com/mywalkb/LSPosed_mod/releases)
:::

- - -

:::info Re-Root <Badge type="info">FAQ</Badge>
You might need to redo the rooting process after an OTA update or Dirty Flashing since the update reverts the `Boot.img` changes.
:::



