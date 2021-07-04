const url = $request.url;
const res =
    url.match(/weather\/.*?\/(.*)\/(.*)\?/) ||
    url.match(/geocode\/([0-9.]*)\/([0-9.]*)\//) ||
    url.match(/geocode=([0-9.]*),([0-9.]*)/);
const latitude = res[1];
const longitude = res[2];
//console.log(`当前位置：纬度${latitude}，经度${longitude}`);

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
    $notification.post("Current Location", "", `latitude ${latitude} longitude ${longitude}`);
}

$done();
