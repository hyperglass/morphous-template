---
aside: false
---

# Softbrick Help
To make sure whether your device is Softbricked and not Hardbricked, Refer this [page for more information of bricking](/custom-rom-guide/common/about-brick).

## Fix for Softbrick on Stock ROM
Enter Recovery Mode and `Hard Reset the Device`
:::danger NOTE
This will Erase all your Data.
:::

## Fix for Softbrick due to installed Module(s)
:::info Fix using Fastboot Mode
If a Magisk module is causing issue, try using the following ADB command in Fastboot mode:
```
adb shell magisk --remove-modules
```
:::


:::info Fix using Custom Recovery Mode
There's might be options to Uninstall Bootloop causing app/Turn off or Remove Magisk module. Otherwise you can manually delete the modules using File Manager within your Custom Recovery.
:::


## Fix for Softbrick when Custom Recovery is not Working
If you can't get into your phone normally and even trying a custom recovery doesn't work, here's how to fix it using Mi Flash Tool:

:::danger NOTE
This will Erase all your Data.

- - -
Using this method we will be able to get back to MIUI even if you're device is compatible with HyperOS. Once we get back MIUI, Custom Recovery and Custom ROM can be installed again with the Bootloader being Unlocked.
:::


### Download **Mi Flash Tool** on PC.
<CustomButton link="https://drive.google.com/file/d/1GtC4IzYj1TIj20pxG5MRce-mUtNLw_mb/view?usp=sharing" label="Download Mi Flash Tool from Google Drive" />
> Once you have the downloaded the archive, extract it.

### Download the **Latest Firmware** of your Region for your device on PC.
<CustomButton link="https://xmfirmwareupdater.com" label="Visit XM Firmware Updater Website" />
> Once you have the downloaded the archive, extract it.


* Now Boot into [Fastboot Mode](/custom-rom-guide/common/boot-into-fastboot-mode) and
connect your Device to PC using a cable.

Open the **Mi Flash Tool** and Browse for Appropriate Firmware and click on `Refresh`.

:::danger VERY IMPORTANT
Select `clean all` i.e `(flash_all.bat)` otherwise the process will Lock your Bootloader after flashing MIUI/HyperOS.
Then click on `Flash`.
:::


:::info If you're getting a prompt like this, ignore it.
<img src="https://i.ibb.co/N3HtFXk/usb-not-recognised-prompt.png" width="300" alt="USB Not Recognised Prompt"/>

`Refresh` should make the device appear inside Mi Flash Tool, otherwise check and reconnect your USB and Device, and refresh again.
:::


:::warning If the process shows an error instantly
In that case, just go to the same path you selected and run the `flash_all.bat`. Do not run `(flash_all_lock.bat)` unless you want to relock your bootloader.
This should open a Command Prompt window and process should start in that CMD window.
:::

:::details
It took me **465 seconds (7 minutes, 45 seconds)** to boot to MIUI. The Process showed this error but waiting for a few seconds showed the MIUI logo which means process was successful and you can close the Mi Flash Tool.
<img src="https://i.ibb.co/YtSjKYG/mi-flash-tool-finished-error.png" width="900" alt="mi-flash-tool-finished-error" class="center" style="padding: 20px"/>
:::


