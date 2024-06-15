# Which Section to Follow
* If you're device is running MIUI, Follow [this section](/custom-rom-guide/marble/unlock-bootloader#unlock-bootloader-miui).
* If you're device is running HyperOS, Follow [this section](/custom-rom-guide/marble/unlock-bootloader#unlock-bootloader-hyperos).
- - -
:::danger VERY IMPORTANT
 Backup your device's data before Unlocking the Bootloader as it will erase all phone data (Unlocking the bootloader will result in a factory reset).
:::

:::details What is Bootloader
A bootloader is a program that starts when you turn on your device, telling it where to find the operating system. There are primary and secondary bootloaders, each with its own role in the boot process. A hard brick, where the device is unresponsive, can occur if the bootloader is damaged, while a soft brick, like a boot loop, can often be fixed by the user. Bootloaders are essential for device startup and functionality. Custom ROM can only be installed if the Bootloader is "unlocked".
:::

## Unlock Bootloader (MIUI)
<Badge type="tip">Instructions for unlocking bootloader on MIUI</Badge>
### Prerequisites For Unlocking Bootloader
Ensuring that you have a working SIM card with mobile data, link the number on the device with the Xiaomi account. Make sure the phone number associated with your device matches the one registered with your Xiaomi account.
> refrain from connecting unowned numbers to the Xiaomi account on the device in order to avoid obstacles in the process. 

:::details Note that Xiaomi requires “Find My Device” toggled and synced to the latest location
Under Mi Account > Mi Cloud > Find Device. In order to update the location, sign in at the Xiaomi cloud website on a computer, click on “Find Device” and choose your current device.
:::
- - -
### Enable OEM Unlocking and USB Debugging
Refer the following if sections if required:
* [How to enable Developer Options](/custom-rom-guide/common/usb-debugging#how-to-enable-developer-options)
* [How to enable USB Debugging](/custom-rom-guide/common/usb-debugging#how-to-enable-usb-debugging)

And within *Developer Options*, enable `OEM Unlocking` to __Allow the bootloader to be Unlocked__ and make sure `USB Debugging` is also enabled.
- - -
### Obtain Unlock Permission
Apply for unlocking permission from Xiaomi (within the Developer Options -> Mi Unlock Status) `Add account and device`

> [!IMPORTANT] NOTE
> Do not apply for unlocking permission more than once because the Waiting Time resets on every apply.

- - -
### Approval Wait Time
You will only be able to proceed if it’s been more than 72 or 360 hours that you successfully added your account and device. The waiting time depends on the phone model, you can check how much time is remaining by attempting to unlock.

- - -
### Use Mi Unlock Tool
Download the Mi Unlock Tool from Xiaomi’s official website, sign in with your Mi account, and follow the instructions to unlock the bootloader.

> Download from the below link or a simple "mi flash unlock tool" web search will do the work.

<CustomButton link="https://en.miui.com/unlock/download_en.html" label="Visit Mi Flash Unlock Tool download page" />

> Download the Mi Unlock app to PC, and sign in with your Mi Account
:::info
Don't Turn off your phone yet as it can ask for OTP for logging in your Mi Account.
:::

> Once you're logged in to Mi Flash Tool with the same Mi account as your device, Boot your phone into [fastboot mode](/custom-rom-guide/common/boot-into-fastboot-mode)

- - -
### Connect to PC
Connect your device to your PC via USB and use the Mi Unlock Tool to **unlock the bootloader.**

Connect your phone to PC using USB cable and click on\
`Unlock` -> `Unlock Anyway` -> `Unlock Anyway`

Your Device will now be Factory Reset and bootloader should be unlocked.
> You can check the status of your device's Bootloader in `Mi Unlock Status` section inside Developer Options in Settings App.


## Unlock Bootloader (HyperOS)
<Badge type="tip">Instructions for unlocking bootloader on HyperOS</Badge>
Download and install the latest Mi Community App and sign in with your Mi account.
> Download from the below link or a simple "mi community apk" web search will do the work.
<CustomButton link="https://www.apkmirror.com/apk/xiaomi/mi-community/" label="Download Mi Community app from APK Mirror" />

- - -
### Change Region
Inside the Xiaomi Community app, in the ME section (bottom right), go to\
`Unlock bootloader` and tap on `Apply for unlocking`.

:::tip NOTE
Your Mi Community Account Must be registered over 30 days otherwise wait for 30 days and try again.
:::

:::info Change Region in System Settings
Open Settings App -> `Additional Settings` -> `Region` -> Choose *Hong Kong*.
:::

If you get an error when applying for unlocking in Mi Community app, Go back to ME section (Bottom Right) then navigate to `Set up` -> `Change Region` and select any other region. Then it will ask you to re-login. Login with the same Mi Account and Try to apply again.

> Ignore "_403 Forbidden_" embed in the `Apply for unlocking` screen if it shows.
- - -
### From here, follow same instructions as MIUI; for HyperOS
Follow the same instructions from [Unlock Bootloader (MIUI)](/custom-rom-guide/marble/unlock-bootloader#unlock-bootloader-miui) section to unlock the bootloader of HyperOS.

:::info Extra References
https://xiaomiwiki.github.io/wiki/Unlock_the_bootloader.html
:::