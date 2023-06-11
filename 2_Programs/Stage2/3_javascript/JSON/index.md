# JSON (JavaScript Object Notation)

![](../images/json-banner.png)

## JSON là gì ?

- Data dạng JSON sẽ có dạng như sau:

  ```json
  {
    "browsers": {
      "firefox": {
        "name": "Firefox",
        "pref_url": "about:config",
        "releases": {
          "detail": {
            "release_date": "2004-11-09",
            "status": "retired",
            "engine": "Gecko",
            "engine_version": "1.7"
          }
        }
      }
    }
  }
  ```

## JSON Object

- Object JSON sẽ cung cấp cho ta 2 methods chính để chuyển đổi JSON theo kiểu serialize và deserialize

### JSON.parse()

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

### JSON.stringify()

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
