var obj = JSON.parse($response.body);
obj['__is_free__'] = true;
$done({body: JSON.stringify(obj)});