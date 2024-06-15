---
aside: false
---

# USB Debugging
Before you can use the debugger and other tools, you need to enable USB debugging, which allows SDK tools such as Android Studio to recognize your device when connected via USB.

## Reason

We need to enable `USB debugging` in the device system settings inside the Developer options menu for [ADB commands](https://developer.android.com/tools/adb) to work in Android System and Custom Recovery. We will learn about Custom Recovery in a later section.

## How to Enable USB Debugging

* Return to main `Settings` menu if not inside it.
* Go to `Additional Settings`.
* Go to `Developer Options`.
* Enable `USB Debugging`.
* Confirm Enable USB Debugging (Security Settings).

## Connect to PC
Don't forget to Connect your Android Device to PC for using Fastboot/ADB commands.
:::info Why not Wireless Debugging
Since `Wireless Debugging` requires a functional Android operating system to be running, we can't use `USB Debugging` wirelessly in the Custom Recovery or Fastboot Mode.  
:::
We will learn how to use Fastboot/ADB commands in a later section.