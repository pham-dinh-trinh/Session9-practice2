

function is_usZipCode(str) {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}
let zipcode = "03201 - 2150";
    console.log(is_usZipCode(zipcode));
zipcode = "7892";
console.log(is_usZipCode(zipcode));
zipcode = "09756";
console.log(is_usZipCode(zipcode));
zipcode = "38274";
console.log(is_usZipCode(zipcode));