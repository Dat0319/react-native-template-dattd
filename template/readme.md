# Shop Stream

Dateing application help connecting you to the one you like.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step guideline to get a development env running:

1. Setup React-Native environment

Follow this guideline from React Native website: https://reactnative.dev/docs/environment-setup

2. Clone project

```
git clone git@adamosystem.com:shop-streaming/shop-streaming-merchant.git
```

3. Install library

With Yarn:

```
yarn
```

With NPM:

```
npm install
```

4. Install pods

```
npx pod-install
```

## Running the app

With iOS:

```
Yarn ios
```

With Android:

```
Yarn android
```

## Code Push

│ Production │ codepushandroidproduction │
├────────────┼───────────────────────────────────────┼
│ Staging │ codepushandroidstaging

### code-push deployment ls TruckerAndroid -k

### code-push deployment ls TruckerIos -k

│ Production │ codepushiosstaging │
├────────────┼───────────────────────────────────────┤
│ Staging │ codepushiosproduction │

### Issues and Note

1. react-native-i18n wrong with minSdkVersion in AndroidMainFest.xml

- you must go to androidMainFest.xml in library react-native-i18n to delete this line and build follow link blow
- delete line
  <uses-sdk android:minSdkVersion="16" />

[link](https://github.com/AlexanderZaytsev/react-native-i18n/issues/249)

### SHA 1:

Alias name: androiddebugkey
Creation date: Jan 1, 2014
Entry type: PrivateKeyEntry
Certificate chain length: 1
Certificate[1]:
Owner: CN=Android Debug, OU=Android, O=Unknown, L=Unknown, ST=Unknown, C=US
Issuer: CN=Android Debug, OU=Android, O=Unknown, L=Unknown, ST=Unknown, C=US
Serial number: 232eae62
Valid from: Wed Jan 01 05:35:04 ICT 2014 until: Wed May 01 05:35:04 ICT 2052
Certificate fingerprints:
SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
SHA256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
Signature algorithm name: SHA1withRSA (weak)
Subject Public Key Algorithm: 2048-bit RSA key (3)
Version: {10}

Extensions:

#1: ObjectId: 2.5.29.14 Criticality=false
SubjectKeyIdentifier [
KeyIdentifier [
0000: 0B F9 FE 38 89 D2 8A 9C 58 F0 C1 0A B7 0E 43 28 ...8....X.....C(
0010: D8 23 F3 20 .#.
]
]

Warning:
The certificate uses the SHA1withRSA signature algorithm which is considered a security risk. This algorithm will be disabled in a future update.
The JKS keystore uses a proprietary format. It is recommended to migrate to PKCS12 which is an industry standard format using "keytool -importkeystore -srckeystore /Users/ad-m7/.android/debug.keystore -destkeystore /Users/ad-m7/.android/debug.keystore -deststoretype pkcs12".

### key login facebook

keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64
Enter keystore password: 123456
ga0RGNYHvNM5d0SLGQfpQWAPGJ8=
keytool -exportcert -alias my-key-alias -keystore ./android/my-upload-key.keystore | openssl sha1 -binary | openssl base64
chZZkvHA8DRSFHAn1q1MHeomFd8=
