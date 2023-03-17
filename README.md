# Debugging the Netflix cast app
- First get a rooted android device with the play store installed
- install frida-server on it and start it
- install a netflix.apk on it (probabaly can't install it from the google play store)
- setup a cast app on https://cast.google.com/ using `ngrok` to serve an https site running on your dev machine
  - Your cast app can be anything but to debug a streaming site's app, you could load their cast app assuming you can find their cast_app_id (possibly by searching decompiled apk or looking in the file system from their apk modified to enable [debugging in the manifest](https://github.com/julkali/makedebuggable))
  - Note that you could use something like [ws](https://www.npmjs.com/package/ws) in a little node app like we do for site-scrapers to host your cast-receiver site.
- Publish the cast app (be sure your chromecast device is also registered at https://cast.google.com/ as a receiver device)
  - Remember that only "some" chromecasts work with chrome devtools (mostly generation 2 devices it seems)
  - You must Publish it for the cast_app_id to work from a compiled apk.
- Start the Netflix app, and change the cast_app_id by running a friday script like: `frida -U -f com.netflix.mediaclient -l ./patch-cast-app-id.js`
  - See my friday patch javascript file in this repo for an example
  - To figure out which function to re-implement using frida, I examined both the JADX decompiled code and the smali code to isolate the function that I needed to change to set the cast_app_id to my id instead of the one the netflix app was specifying.


# Attempt to debug Netflix casting
My first goal was to identify the netflix ESN that was being used by the cast-receiver device. Unfortunately, I discovered that the netflix cast app was exceedingly complex. Note that this only really applies to older cast devices (generation 1 & 2) since casting to an android TV device simply forces the launching of the netflix app on that device.

## Special Handling Between Netflix & Google
The main issues I ran into is that it seems there were special deals setup between Netflix and Google in the early days of casting that are difficult to spoof due to deprecated functionality that is only seeming still availalbe to Netflix.

### Whitelisting Prop
By loading this url with the cast app id (`CA5E8412` for Netflix) you can see the response used by the native device cast sdk: `https://clients3.google.com/cast/chromecast/device/app?a=CA5E8412`

The netflix google cast app includes a special prop called `whitelisting` that appears to enable extended features no one other than Netflix can access. This prop is not something I was able to setup in the Google Cast SDK Developer Console for my own cast apps. Here is what it looks like for Netflix:
```
{
  "whitelisting": {
    "extended_enabled_features": [1,2,4,8,16,64,32,128,1024,256,65536,1,2,4,8,16,64,32,128,1024,256,1038],
    "enabled_features": 67071
  }
}
```
Note: Something I considered but didn't try was to use my EdgeMax router to re-route the url above to my own server that could respond and include these special props. However, I surmized that it would require https/SSL and I wasn't sure that a self-signed certificate would be accepted. My SSL and cert skills are not expert level, but if we could do that we might be able to see more of what I suspect these extended features do... keep reading.

### NfWebCrypto and NetflixHelper navigator.plugins
Plugins have long since been deprecated and replaced by Extensions. However, it would seem on legacy generation 1 & 2 devices, they still use a verison of Chrome that includes support for them.

When you look at the google cast app response, the url is shown as: `https://cast-uiboot.prod.cloud.netflix.com/nq/mdx/eureka/^1.0.0/bootloader`. This redirects to a `chrome-redirector.html` which checks for a window object called `cryptokeys`, which is also used in netflix's cadmium player that is loaded later. I was able to determine that this non-existent prop comes from a deprecated [NfWebCrypto](https://github.com/Netflix/NfWebCrypto) plugin, which is not seemingly available to my cast app. This is what I was wondering might be the purpose of the `whitelisting` props `extended_enabled_features` and/or `enabled_features` I mentioned above.

Most of the NfWebCrypto is now supported by window.Crypto.subtle except two seemingly important methods called `getKeyByName` and `getDeviceId`. It would appear that they use `DKE` (Double Key Encryption) keys and I was unable to determine how to obtain the device key (is it embedded in the compiled plugin on the device?). Without access to these methods, I was unable to determine the ESNPrefix which seems to come out of `getDeviceId` based on study of the cadmium player obfuscated code.

By spoofing a known ESN id for chrome browsers, I was able to see some cast messaging, which is all encrypted using their MSL which seems to require a working NfWebCrytpo plugin to decode.

It was at this point I decided to take a break and move on for now. The remaining ideas I had were:
- try to re-route the cast url for the netflix cast app id using my Edgemax Router and provide a response that included the `whitelisting` prop
- see if it would be possible to root an older generation 1 or 2 chromecast device to gain access to the file system to look for the device's DKE key (perhaps even run frida on it). However, some quick google searching didn't reveal any current known rooting exploits for these devices.
- use frida to isolate and replace the cast app id response with the `whitelisting` prop.
  - this is probably the option that I think I could do with my current skills

The idea behind wanting the `whitelisting` prop is that it may enable the NfWebCrypto plugin and I could get farther along in the process of self-hosting the netflix cast app.