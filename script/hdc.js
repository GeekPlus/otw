const cookieName = 'HDC'
const cookieKey = 'cookie_hdc'
const cookieVal = $persistentStore.read(cookieKey)

function sign() {
  let url = {
    url: `https://hdchina.org`,
    headers: { Cookie: cookieVal }
  }
  $httpClient.get(url, (error, response, data) => {
      let title = `${cookieName}`
      let subTitle = ``
      let detail = `网站访问已完成`
      console.log(`${title}, ${subTitle}, ${detail}`)
      $notification.post(title, subTitle, detail)
  })
  $done({})
}

sign({})
