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
   $ npm install uareu
   ```

## Notes

- This library facilitates communication with the original HID Global libraries and does not replace them.
- Adjust the node version based on the architecture of your DPFJ and DPFPDD libraries (x32 or x64).

---

Feel free to add more sections, instructions, or details specific to your project. Good luck with your extension! 🌟🔍🔒
