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


## Naming conventions <Badge type="tip">Optional</Badge>

:::details Custom ROM Zip File Naming conventions
By using this generalized template, we can accommodate the various naming conventions used by different custom ROMs. This approach ensures that regardless of the specific format, the essential elements are always captured, providing clarity and consistency across different ROMs.

1. **(Custom-ROM_Name)**:
   - The name of the custom ROM (e.g., CrDroidAndroid, HavocOS, NitrogenOS, ArrowOS, LineageOS).

2. **(Android Version)**:
   - The version of Android the ROM is based on (e.g., 14).

3. **(Date Format)**:
   - Date formats can vary:
   - Full date: YYYYMMDD (e.g., 20240401 for April 1st, 2024)
   - Year and month: YYYYMM (e.g., 202404 for April 2024)
   - Year only: YYYY (e.g., 2024)

4. **(Device Codename)**:
   - The codename for the device the ROM is intended for (e.g., marble).

5. **(Custom-ROM Version)**:
   - Different ways to indicate the ROM version:
     - Custom-ROM version (e.g., v11.0, 19.1)

6. **(Channel|OFFICIAL|UNOFFICIAL|Vanilla-Build|GAPPs Build)**:
   - Indicates the release channel or status of the ROM:
     - Channel (e.g., Beta2, nightly)
     - OFFICIAL
     - UNOFFICIAL

:::info Examples of Applying the Template:

1. **Simplified Date**:
   - `CrDroidAndroid-14-2024-marble-v11.0-OFFICIAL.zip`
   - Year only.

2. **Channel Indicator**:
   - `NitrogenOS-14-Beta2-marble-20240401-OFFICIAL.zip`
   - Indicates it's a beta release "Beta2".

3. **No custom ROM version**:
   - `Arrow-v11.0-alioth-OFFICIAL-20220920-VANILLA.zip`
   - No custom ROM version, only Android version.

4. **LineageOS Specific**:
   - `lineage-19.1-20240401-nightly-marble.zip`
   - Major.Minor.x versioning system, with a nightly build indicator.

5. **Vanilla Indicator**:
   - `Arrow-v11.0-alioth-OFFICIAL-20220920-VANILLA.zip`
   - Indicates absence of already installed GAPPs.
:::