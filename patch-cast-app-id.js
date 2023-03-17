Java.perform(() => {
    console.log("Patching...");
    const customCastAppId = Java.use("o.bdD").c;
    customCastAppId.implementation = () => {
        const castAppId = "BB8F8D30"; // "06AB0C7C"
        console.log("Overriding cast_app_id to:", castAppId);
        return castAppId;
    };
    console.log("Patched");
});