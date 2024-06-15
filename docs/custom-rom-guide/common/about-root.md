---
aside: false
prev: false
---

# What is Root Access?
Root access is the highest level of access a mobile device can provide to its users, giving them complete control over the device. Rooting an Android device gives users privileged control over the device's operating system and subsystems, allowing them to make changes to the OS such as:
* Modifying or deleting system files
* Removing pre-installed applications or bloatwares
* Low-level access to the hardware itself
* Downloading specialized apps
* Customizing the device

- - - 
### Some outdated/very new methods:
:::tip NOTE 
We're avoiding SuperSU and Solutions like Kingoroot, etc. for ease and security reasons. Below are some very new methods:
:::
* APatch - [Download from GitHub](https://github.com/bmax121/APatch/releases)
> Asks you to have a Super Key to use it for granting Root access in apps.
>
> APatch relies on KernelPatch.


* APatch Lite - [Download from GitHub](https://github.com/ponces/APatchLite/releases) <Badge type="danger">Archived</Badge>
> Works with Shizuku, No option for KernelPatch, No Super Key.

:::warning NOTE
We Recommend trying the below methods first.
:::

- - -
### KernelSU
This is new Kernel-based root solution for Android devices. It is very new and KernelSU seems to be much popular and balanced solution for having root access, has better module support and also supports/includes system integrity fixes **(required for banking apps to function)**

### Links for KernelSU
* KernelSU - [Download from GitHub](https://github.com/tiann/KernelSU/releases/latest)
> Download the `KernelSU_<version>-release.apk` file from the latest release from GitHub.

- - -
### Magisk
Magisk is a free, open-source software that allows users to gain root access to their Android devices. It's a systemless rooting tool that works by modifying the boot image from the firmware and system partition, without tampering with the system files.

### Links for Magisk
* Magisk - [Download from GitHub](https://github.com/topjohnwu/Magisk/releases/latest)
* Magisk Delta (Kitsune) - [Download from GitHub](https://github.com/HuskyDG/magisk-files/releases/latest)

- - -
### Choosing between Magisk or KernelSU

**We don't recommend using Magisk and KernelSU at the same time.** If you still try to do so and if any problems occur, it's your own responsibility!

Now the question is [Magisk or KernelSU?](https://gprivate.com/6bo4n)

> **I prefer KernelSU, because it is better supported by the Custom ROM I'm using and it has less but enough modules supported.**

> Starting with `v2.2`, you can select to install the kernel image with KernelSU support during the installation process via volume keys.

- - -
### What is LSposed, why do we need it?
Simply because some tweaks depend on it.

* **LSPosed** is a framework that uses the something called Xposed API to modify the behavior of your Android device. It allows you to install modules that can change system or app behavior without modifying APKs.

* **LSPosed needs Zygisk** because it provides a secure environment for running root-related modules. By using Zygisk, LSPosed can operate without interfering with other system processes.

* **Zygisk** is what the Magisk developers call running Magisk in the Zygote Process of Android. The Zygote Process is the first process that the OS starts when it boots up.
