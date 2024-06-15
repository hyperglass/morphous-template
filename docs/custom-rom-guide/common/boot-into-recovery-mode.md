---
aside: false
prev: false
next: false
---
# Boot into Recovery Mode
Instructions are same for booting into Stock Recovery and Custom Recovery.
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
* [Boot into Fastboot Mode.](/custom-rom-guide/common/boot-into-fastboot-mode)
* Then head over to the `platform-tools` folder and launch the Command Prompt.
* Type in the following command in the CMD window to boot your device to Recovery Mode while in Fastboot Mode.
```
fastboot reboot recovery
```
:::


:::tip If you see `< waiting for any device >` and/or Windows USB Malfunctioned error
Reboot to Fastboot/Bootloader mode again and reconnect your device and then try again.
<img src="https://i.ibb.co/N3HtFXk/usb-not-recognised-prompt.png" width="350px" alt="usb-not-recognised-prompt" class="center" style="padding: 10px"/>
:::



## Switching to Different Custom Recovery
The steps are the same if you want to Replace the current recovery with another compatible one. You can change recovery without any losing data as it doesn't require Formating Data or Wipe.


## Taking Screenshot in Custom Recovery
Taking screenshots is possible in custom recoveries like TWRP, OFRP, etc.

Simply Hold `Power` button and `Volume Down` button simultaneously\
and the screenshot will be saved in 
`..\Internal Storage\<Custom-Recovery>\screenshots`

:::info EXAMPLE 
OrangeFox Recovery Project (OFRP) stores `..\Internal Storage\Fox\screenshots`

* Even if Custom Recovery is Encrypted, `Fox` folder containing screenshots of the OrangeFox Custom Recovery (OFRP) was accessible.
<img src="https://i.ibb.co/4JyqhnX/encrypted-screenshots.png" alt="screenshot-folder-encrypted" width="400" class="center" style="Padding: 20px"/>
:::


## Check Custom Recovery Encryption
> You're encrypted if your recovery ask for a password or check in settings -> security & privacy -> more security & privacy.

:::danger IMPORTANT 
If the Custom Recovery doesn't ask for password or if it doesn't accept the correct password, you're custom recovery might be unable to decrypt. The solution for this is to switch to a different Custom Recovery or reflash custom Custom Recovery via Fastboot Mode.
:::

:::tip DISABLE FORCE ENCRYPTION (DFE)
Note that if all available Custom Recoveries has the same issue or if you don't want the Custom Recovery to be encrypted at all then you can search and use 'DFE' on your device. **DFE maybe a significant risk to data security.**
:::