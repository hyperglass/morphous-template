---
aside: false
---


# Installing a Custom Recovery

> [!IMPORTANT] GETTING TERMINAL READY FOR COMMANDS
> We need to Setup `Platform Tools` folder for Fastboot commands to work.\
Please see [how to use Fastboot/ADB Commands in Platform Tools Directory](/custom-rom-guide/common/prerequisites-for-commands) for instructions.

:::tip IMPORTANT
Installing a Custom Recovery or ROM requires booting into Fastboot Mode first.\
Please see [how to boot into Fastboot Mode](/custom-rom-guide/common/boot-into-fastboot-mode) for instructions.
:::

## Download Custom Recovery
We are going to use OrangeFox Recovery Project (OFRP) in this guide for _Poco F5/Redmi Note 12 Turbo_.

<CustomButton link="https://github.com/Ctapchuk/android_device_xiaomi_marble-OFRP/releases" label="Download OFRP for Poco F5 from GitHub" />

You should also go through the instructions there.

* Go to this GitHub page and Download the latest Beta image `.img` file.
* If you want are following the second method, download the latest Beta archive `.zip` file.


## Flashing OFRP
There are three methods to boot up Custom Recovery

:::info METHOD 1 <Badge type="tip">Used Generally</Badge>
Type in the following command in the CMD window to Flash recovery image `.img` **in Fastboot Mode** or in recovery (select Recovery image).
```
fastboot flash recovery_ab <drag and drop your img file inside the window>
```
:::

:::info METHOD 2 <Badge type="tip">Used generally when another Custom Recovery is already installed</Badge>
Flash as a normal zip `.zip` file in the Custom Recovery Mode. 
:::

:::info METHOD 3 <Badge type="warning">Not required right now</Badge>
Type in the following command in the CMD window to Temporarily load image
 ```
 fastboot boot <drag and drop your img file inside the window>
 ```
 :::

## Other Alternative Custom Recoveries<Badge type="warning">Optional</Badge>

**Alternatively**, you can install a custom recovery of your choice like TWRP.
* [Check on SourceForce](https://sourceforge.net/projects/recovery-for-xiaomi-devices/files/marble/)
* Seach on Web or [XDA Forums](https://xdaforums.com/).

:::info Flash recovery image in Fastboot Mode. <Badge type="tip">Used Generally</Badge>
Type ```fastboot flash recovery_ab```
with space at the end then we need to do one of the following:
* Drag and Drop the Downloaded Custom Recovery image `.img` file into Command Prompt (CMD) window.
* Right Click on the Custom Recovery image `.img` file and select `Copy as Path`. Then Paste (Ctrl+v) it in the Command Prompt (CMD) window.
* Write the Custom Recovery image `.img` file along with its path inside the Command Prompt (CMD) window.
:::

> [!IMPORTANT] COMMON MISTAKE
> Don't flash say Android 13 with A14-TWRP or Android 14 with A13-TWRP.\
(Also applied to other Recovery Projects)
