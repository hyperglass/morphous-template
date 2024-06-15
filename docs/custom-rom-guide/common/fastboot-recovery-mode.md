---
aside: false
---

# Fastboot and Recovery

## Fastboot
:::details Fastboot/Bootloader Mode
Fastboot mode is a bootloader mode that allows you to modify your Android device's flash files, install updates, and write data directly to the phone's flash memory. Fastboot mode is also an alternative to recovery mode.
:::

### Reason
We will use Fastboot Mode to install a Custom Recovery.

:::tip IMPORTANT
Installing a Custom Recovery or ROM requires booting into Fastboot Mode first.

**Please see [how to boot into Fastboot Mode](/custom-rom-guide/common/boot-into-fastboot-mode) for instructions.**
:::

## Recovery
:::details Stock Recovery and Custom Recovery
We have a Recovery Mode in your Phone to reset the device if something goes wrong or if in case you forget your password.\
This is called `stock recovery` and it is a minimal, limited system. It's designed to be ignored, and it can generally only flash OTA updates and ROMs provided by the device's manufacturer, not third-party ROMs.

A `custom recovery` is a third-party recovery environment. Flashing this recovery environment onto your device replaces the default, stock recovery environment with a third-party, customized recovery environment.
Custom recovery mode is a feature on Android devices that allows users to perform actions like installing custom ROMs, backing up their system, and installing third-party firmware. It's different from Fastboot mode or Odin mode. 
:::

### Reason
A Custom Recovery replaces the Stock Recovery and allows us to install a Custom ROM. 

:::tip IMPORTANT
Installing a Custom Recovery or ROM requires booting into Custom Recovery Mode first.

**Please see [how to boot into Fastboot Mode](/custom-rom-guide/common/boot-into-fastboot-mode) for instructions.**
:::

## Clarification
:::info 
Don't be confused by the terms "fastboot" and "fastboot mode," or "custom recovery" and "custom recovery mode". They simply refer to the tool and the corresponding device state for each action.
:::


## Some popular Custom Recovery Projects
### Team Win Recovery Project (TWRP)
pronounced "_twerp_", is an open-source software custom recovery image for Android-based devices. It provides a touchscreen-enabled interface that allows users to install third-party firmware and back up the current system, functions usually not supported by stock recovery images.

### OrangeFox Recovery Project (OFRP)
It is a fork of TWRP, which stands for Team Win Recovery Project. OrangeFox is essentially the same as TWRP, but with some additional features.