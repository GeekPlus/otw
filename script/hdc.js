const cookieName = 'HDC'
const cookieKey = 'cookie_hdc'
const cookieVal = $persistentStore.read(cookieKey)

function sign() {
  let url = {
    url: `https://hdchina.org`,
    headers: { Cookie: cookieVal }
  }
  if (!cookieVal) {
    $notification.post("HDC", "", "未获取到cookie")
  } else {
    $httpClient.get(url, (error, response, data) => {
      console.log(`${error})
      if (error) {
        $notification.post("HDC", "", "访问出错")
      } else {
        let title = `${cookieName}`
        let subTitle = ``
        let detail = `网站访问已完成`
        console.log(`${title}, ${subTitle}, ${detail}`)
        $notification.post(title, subTitle, detail)
      }
    })
  }
  $done({})
}

sign({})
