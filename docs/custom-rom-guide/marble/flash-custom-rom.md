---
aside: false
---
# Flashing Custom ROM
:::warning Do refer to any special flashing instructions given by dev if needed for any particular rom.
The below steps works in general for most.
:::

### 1. Wipe
Go to `Wipe` and select everything except Internal storage and USB-Storage and hence wipe Data, Dalvik, Art, Cache.
> while wiping if you bymistakely selected USB-Storage as well, it will give an error and won't delete you're PC data due to different file system.
- - -
### 2. Flash Firmware
Download the **Latest Firmware** for your device on PC.
<CustomButton link="https://xmfirmwareupdater.com" label="Visit XM Firmware Updater Website" />
> Once you have the downloaded the archive, extract it.

Now move Paste your Firmware/ROM zip inside Platform tools and type "cmd" in the windows file explorer Address bar again...
it will open a Command Prompt Window.
```
adb sideload <zip file name with extention>
```
and it should start installation.
After Fw installation, reboot to recovery and do the same for the ROM zip file.

> You may select "retain recovery" option during flashing.
- - -
:::tip Optional Steps:
* Reboot to Recovery Mode
* Flash Kernel
* [Flash DFE](/custom-rom-guide/common/boot-into-recovery-mode#check-custom-recovery-encryption) if encrypted <Badge type="danger">Mostly Not Required</Badge>
:::

### 3. Flash ROM
Now move Paste your Firmware/ROM zip inside Platform tools and type "cmd" in the windows file explorer Address bar again...
it will open a Command Prompt Window.
```
adb sideload <zip file name with extention>
```
> You may select "retain recovery" option during flashing.

:::info IMPORTANT STEP
Don't forget to Format Data after ROM installation.
:::


* Wipe cache & dalvik again <Badge type="info">Optional</Badge>

-> `Reboot to system`

:::tip Let the ROM settle, use it normally. After 48 hrs, all lags and drain issues should vanish.`
* Optional Reference: [Snapshots and Merges](https://twrp.me/faq/snapshotsandmerges.html)
:::
- - -
> [!IMPORTANT] The above process is called Clean flashing. 
> It is when you completely erase your phone’s software and install a new version.
> The transition from Stock ROM to Custom ROM and vice versa always requires a clean flash. It is generally recommended to Clean Flash when the ROM based tree is updated.\
> For example, when AOSP Based ROM is switched to LOS Based Tree.
> 
> > __MIUI/HyperOS -> AOSP__ and __vice versa__ requires Clean Flash

:::danger VERY IMPORTANT
 Backup your device's data before Clean Flashing a ROM as it requires you to erase all phone data.
:::

- - -
# Updating the Custom ROM
:::info 1. OTA Updater <Badge type="info">Easiest Method</Badge>
Inside Settings App -> ... -> `System Updates`.
> **OTA** Stands for "Over The Air" and it is also the normal way of updating any android.\

A Custom ROM may or may not have an OTA Updater.
:::details 
Generally Updating a Custom ROM via OTA Updater is also considered as Dirty Flashing 
:::


:::warning 2. Dirty Flashing ROM
Dirty flashing is when you update your phone’s software without erasing your data. It’s a quick way to install a new version of a ROM while keeping your apps, photos, and files. 

:::warning Instructions
For Dirty Flashing ROM, we simply flash the required files (Generally Updated Custom ROM zip file) inside the Custom Recovery either by downloading that file on device and selecting it, then flashing it after confirmation or using ADB Sideload:
```
adb sideload <zip file name with extention>
```
:::


:::info 3. Clean Flashing
For Clean Flashing ROM, [Check the Instructions at the start of this page.](/custom-rom-guide/marble/flash-custom-rom#flashing-custom-rom)
:::

- - -

:::warning 
* Always read rom changelog before dirty flash. 
* Generally, we don't Dirty flash when the ROM Based Tree is changed. 
:::
