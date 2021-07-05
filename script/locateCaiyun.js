const url = $request.url;
const res = url.match(/latlon=([0-9.]*),([0-9.]*)/);
const latitude = res[2];
const longitude = res[1];

// write data
if (typeof $prefs !== 'undefined') {
    // QX
    $prefs.setValueForKey(latitude, "latitude");
    $prefs.setValueForKey(longitude, "longitude");
} else {
    // Loon & Surge
    $persistentStore.write(latitude, "latitude");
    $persistentStore.write(longitude, "longitude");
}

if (res != null) {
    $notification.post("Current Location From Caiyun", "", `latitude ${latitude} longitude ${longitude}`);
}

$done();
