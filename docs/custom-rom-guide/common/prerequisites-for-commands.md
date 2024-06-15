---
aside: false
prev: false
next: false
---

# Using Fastboot/ADB Commands in Platform Tools Directory

## Prerequisites for Using Commands

:::info For using [Fastboot](/custom-rom-guide/common/fastboot-recovery-mode) Commands
* Connect your Android Device to PC via USB then use the Terminal we opened in Platform Tools Directory.
:::

:::info For using ADB Commands inside System/Custom Recovery (ADB Sideload)
* [Enable USB Debugging](/custom-rom-guide/common/usb-debugging) if not already enabled.
* Connect your Android Device to PC via USB then use the Terminal we opened in Platform Tools Directory.
:::

## Download and Extract Platform Tools Folder
Head over to the official Android developer website for downloading Android SDK Platform Tools: 
> A simple "download platform tools" web search will also do the work if you want to find it by yourself on the web.

<CustomButton link="https://developer.android.com/tools/releases/platform-tools" label="Download Android SDK Platform-Tools" />


:::info On the webpage, you'll see the terms and conditions for using the Android SDK Platform Tools. Carefully review the terms and conditions before proceeding.
Once you've reviewed and agree to the terms, Download `platform-tools-latest-windows.zip`
:::

Now, Extract the downloaded `platform-tools-latest-windows.zip`.


## Opening Command Prompt (CMD) in Platform Tools Folder
There are several ways to Open Command Prompt (CMD) inside the Platform Tools Folder directory.

:::info METHOD 1
Open _Platform Tools_ folder and type "cmd" in the Address bar of the file explorer, then press `Enter`.

<img src="https://i.ibb.co/V2q5nq4/addressbar.gif" alt="addressbar" class="center">

:::

:::info METHOD 2
Open _Platform Tools_ folder and right click anywhere and select `Open in Terminal`.

<img src="https://i.ibb.co/TM4f1CN/contextmenu-all-options.png" width="300" alt="platformtoolsagree" class="center">
:::
:::info METHOD 3
Change the directory in Terminal by typing manually.
<img src="https://svgshare.com/i/16za.svg" width="800" alt="contextmenu-copy-as-path" class="center">
:::
This should open a Command Prompt window where we can type Fastboot/ADB Commands.
- - -

:::info After you write the commands partially

Make Sure you've written the correct command that is mentioned in the guide and **inserted a space before pasting/dropping** the file or file-path.

|                    METHOD 1                   |                         METHOD 2                        |
|:---------------------------------------------:|:-------------------------------------------------------:|
| Right Click on the file and Copy as file path | Drag and Drop the file inside the Command Prompt Window |
|<img src="https://i.ibb.co/F4KzGhM/contextmenu-copy-as-path.png" width="250" alt="contextmenu-copy-as-path" border="0">|<img src="https://i.ibb.co/9nK3FMB/paste-path-to-file.png" width="300" alt="paste-path-to-file" border="0">|
| Then paste inside the Command Prompt Window `Ctrl+V`  |




> We have taken this approach as file-names and their versions might get updated and/or differ from the given commands.
:::