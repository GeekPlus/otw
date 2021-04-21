var obj = JSON.parse($response.body);
obj['settings']['__is_free__'] = true;
$done({body: JSON.stringify(obj)});
