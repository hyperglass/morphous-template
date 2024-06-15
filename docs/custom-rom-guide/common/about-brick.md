# Phone Bricking
When a phone is bricked, you are not able to access the operating system at all. It might not power on, display a bootloop (repeatedly restarting), or show signs of life at all. This happens due to corrupted software, hardware failures, or software modifications gone wrong.\
\
Bricking is classified into two types:
* Soft brick
* Hard brick

## Soft Bricking
Soft Brick happens when there is faulty communication within the Android operating system.

### During a softbrick, you'll typically experience one or a combination of the following issues:

:::details Bootloop 
It is a common symptom where the device gets stuck in a continuous restart loop. It might display the manufacturer's logo, try to boot up, and then abruptly restart repeatedly.
:::

:::details Stuck on Boot Splash Logo
The device might power on normally, display the boot logo or animation, but then freeze and remain stuck on that screen indefinitely.
:::

:::details Software Crashes
The device might boot up but become unstable, experiencing unresponsive behavior.
:::

:::details Inability to Boot Normally
The device might not boot completely, displaying error messages or simply failing to launch the operating system.
:::

:::tip IMPORTANT
During a **Soft Brick**, the `Custom Recovery Mode` may not be accessible but you're atleast able to access `Fastboot Mode`
:::

## Hard Bricking
<Badge type="warning">It is Rare dw</Badge>

A hard bricked device does not power on or show any vendor logo; the screen remains turned off or blank.
Make sure its hard bricked before panicking...

### During a softbrick, you'll typically experience one or a combination of the following issues:
:::details No Power
The device gives no response when you try to power it on. No lights, vibrations, or display activity.
:::

:::details Stuck on Blank Screen
The device might power on but the screen remains completely black or blank, showing no signs of life. There's no response to button presses or attempts to enter recovery/fastboot mode.
:::

:::details Stuck on Boot Splash Logo without access to Custom Recovery/Fastboot Mode
Similar to a softbrick, the device might be stuck on the boot animation or logo, but unlike a softbrick, there's no response to button presses or attempts to enter recovery/fastboot mode.
:::

:::details Partial Functionality (Misleading)
In rare cases, a hard-bricked device might show some limited functionality, like showing the charging indicator when plugged in. However, this limited response wouldn't allow you to interact with the device in any meaningful way.
:::

:::tip IMPORTANT
During a **Hard Brick**, neither `Custom Recovery Mode` nor `Fastboot Mode` is accessible.
:::