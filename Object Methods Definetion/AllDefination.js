// | #  | Method                               | Definition                                                                                                                             |
// | -- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
// | 1  | `Object.keys()`                      | Object ki **own enumerable string keys** ko array mein return karta hai.                                                               |
// | 2  | `Object.values()`                    | Object ki **own enumerable values** ko array mein return karta hai.                                                                    |
// | 3  | `Object.entries()`                   | Object ki **own enumerable key-value pairs** ko nested arrays ke form mein return karta hai.                                           |
// | 4  | `Object.assign()`                    | Ek ya multiple source objects ki properties ko target object mein **copy/merge** karta hai.                                            |
// | 5  | `Object.create()`                    | Given object ko prototype bana kar **new object create** karta hai.                                                                    |
// | 6  | `Object.hasOwn()`                    | Check karta hai ke given property object ki **own property** hai ya nahi.                                                              |
// | 7  | `Object.defineProperty()`            | Existing object par **ek property** ko define karta hai aur uske descriptor/behavior ko control karta hai.                             |
// | 8  | `Object.defineProperties()`          | Existing object par **multiple properties** ko descriptors ke saath define karta hai.                                                  |
// | 9  | `Object.getOwnPropertyDescriptor()`  | Kisi **ek own property** ka complete property descriptor return karta hai.                                                             |
// | 10 | `Object.getOwnPropertyDescriptors()` | Object ki **saari own properties ke complete descriptors** return karta hai.                                                           |
// | 11 | `Object.getOwnPropertyNames()`       | Object ki **saari own string property names** return karta hai, chahe enumerable hon ya na hon.                                        |
// | 12 | `Object.getOwnPropertySymbols()`     | Object ki **saari own Symbol properties** return karta hai.                                                                            |
// | 13 | `Object.getPrototypeOf()`            | Object ka **direct prototype** return karta hai.                                                                                       |
// | 14 | `Object.setPrototypeOf()`            | Existing object ka **prototype set/change** karta hai.                                                                                 |
// | 15 | `Object.freeze()`                    | Object ko freeze karta hai: **add, delete aur update** ko prevent karta hai (shallow).                                                 |
// | 16 | `Object.seal()`                      | Object mein **add aur delete** prevent karta hai, lekin existing properties ko update karne deta hai.                                  |
// | 17 | `Object.preventExtensions()`         | Object mein **new properties add** hone se rokta hai, lekin existing properties ko update/delete karne deta hai.                       |
// | 18 | `Object.isExtensible()`              | Check karta hai ke object mein **new properties add ki ja sakti hain ya nahi**.                                                        |
// | 19 | `Object.isSealed()`                  | Check karta hai ke object **sealed** hai ya nahi.                                                                                      |
// | 20 | `Object.isFrozen()`                  | Check karta hai ke object **frozen** hai ya nahi.                                                                                      |
// | 21 | `Object.is()`                        | Do values ko compare karke batata hai ke woh **SameValue** relation mein hain ya nahi; `NaN` aur `+0/-0` mein `===` se difference hai. |
// | 22 | `Object.fromEntries()`               | Key-value entries ke iterable se **new object create** karta hai.                                                                      |
// | 23 | `Object.groupBy()`                   | Values ko callback ke returned key ke basis par **groups mein organize** karke object return karta hai.                                |


// | #  | Method                   | Definition                                                                                                                                    |
// | -- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
// | 24 | `hasOwnProperty()`       | Check karta hai ke koi property **directly isi object ki own property** hai ya nahi.                                                          |
// | 25 | `isPrototypeOf()`        | Check karta hai ke ek object doosre object ki **prototype chain mein present** hai ya nahi.                                                   |
// | 26 | `propertyIsEnumerable()` | Check karta hai ke koi **own property enumerable** hai ya nahi.                                                                               |
// | 27 | `toString()`             | Value/object ki **string representation** return karta hai.                                                                                   |
// | 28 | `toLocaleString()`       | Value/object ki **locale-sensitive string representation** return karta hai; plain objects mein generally `toString()` jaisa result deta hai. |
// | 29 | `valueOf()`              | Object ki **primitive/value representation** return karne ke liye hota hai; plain object mein usually object khud return hota hai.            |
