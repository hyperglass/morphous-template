---
aside: false
prev: false
next: false
---

# Boot into Fastboot/Bootloader Mode
:::info METHOD 1 <Badge type="tip">Most Useful</Badge>
**Turn off your device** and enter Fastboot Mode by pressing and holding the\
 `Power` and `Volume Down` buttons simultaneously.
> The placement of Power and Volume buttons does not matter
:::info NOTE
You might have to release only the power button when the logo of your manufacturer (vendor logo) appears.\
(for example: Xiaomi, Samsung, etc.)
:::


:::info METHOD 2
* Connect your device to the PC via a USB cable. Make sure [USB Debugging](/custom-rom-guide/common/usb-debugging) is enabled.
* Then head over to the `platform-tools` folder and launch the Command Prompt.
* Type in the following command in the CMD window to boot your device to Fastboot Mode:
```
adb reboot bootloader
```
:::details More about second Method
Using ADB commands through a computer is an alternative method, but it requires enabling USB Debugging on the phone beforehand, which isn't possible if the phone is already soft-bricked.
:::



## Note for Miscellaneous Devices 
These steps are not common to absolutely all phones. While these methods cover a majority of modern Android phones, there can be variations depending on the manufacturer and model.
:::details Tips for finding the exact method for your phone
Consult your phone's manual or manufacturer website. They typically have detailed instructions on entering Fastboot mode.
Search online using your phone's brand and model name followed by "boot into fastboot mode" or similar keywords. You'll likely find resources from other users or forums with specific instructions.
:::