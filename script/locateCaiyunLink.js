if (typeof $request !== "undefined") {
    const $ = API("locate");
    const url = $request.url;
    const res = url.match(/latlon=([0-9.]*),([0-9.]*)/);

    if (res != null) {
        const latitude = res[2];
        const longitude = res[1];
        $.notify(
            "Current Location From Caiyun",
            "",
            `latitude ${latitude} longitude ${longitude}`,
            {
                "open-url": `https://www.google.com/maps?q=${latitude},${longitude}`,
            }
        );
    }
}
$done();
