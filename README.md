# DigitalPersona UareU Fingerprint Extension

## Description

The **DigitalPersona UareU Fingerprint Extension** is a browser extension that enables fingerprint authentication using the **DigitalPersona 4500 Fingerprint Reader** or similar devices. It allows communication between a Node.js application and the DLL/SO libraries provided by **DPFJ** and **DPFPDD**, created by **DigitalPersona** (now part of **HID Global**).

## Features

- Capture fingerprint images
- Communicate with the DPFJ and DPFPDD libraries
- Identify and compare fingerprints
- Compatible with Windows (x64) and Linux

## Installation

1. Ensure you have the following prerequisites:
   - **DigitalPersona 4500 Fingerprint Reader** or a similar device
   - `dpfj.dll` and `dpfpdd.dll` (for Windows) or `dpfj.so` and `dpfpdd.so` (for Linux) located in a folder named "bin" at the root of your project.

2. Install the extension:
   ```bash
   $ npm install uareu-node
   ```

## Usage

1. Import the library:
   ```javascript
   const { UareU, CONSTANTS } = require('uareu-node');
   const uareu = UareU.getInstance();
   ```

2. Initialize and query devices:
   ```javascript
   uareu.loadLibs()
     .then(() => uareu.dpfpddInit())
     .then(() => uareu.dpfpddQueryDevices())
     .then((res) => uareu.dpfpddOpen(res.devicesList[0]))
     .catch((err) => {
       console.error('Error initializing or querying devices:', err);
     });
   ```

3. Capture a fingerprint image:
   ```javascript
   uareu.dpfpddCaptureAsync(reader, CONSTANTS.DPFPDD_IMAGE_FMT.DPFPDD_IMG_FMT_ANSI381, CONSTANTS.DPFPDD_IMAGE_PROC.DPFPDD_IMG_PROC_DEFAULT, (data, dataSize) => {
     // Process the fingerprint image data (FID) here
     // Generate fingerprint minutiae data (FMD) and perform identification or comparison
   });
   ```

## Notes

- This library facilitates communication with the original HID Global libraries and does not replace them.
- Adjust the node version based on the architecture of your DPFJ and DPFPDD libraries (x32 or x64).

---

Feel free to add more sections, instructions, or details specific to your project. Good luck with your extension! 🌟🔍🔒
