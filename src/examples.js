var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var mapExamples = function () {
    var map = new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]);
    console.log("map:", map);
    var arrayFromMap = Array.from(map);
    console.log("arrayFromMap:", arrayFromMap);
    var mapCopy = new Map(Array.from(map));
    console.log("mapCopy:", mapCopy);
    var mapCopyWithUpdate = new Map(Array.from(map).concat([["c", 10]]));
    console.log("mapCopyWithUpdate:", mapCopyWithUpdate);
    var mappedMap = Array.from(map).map(function (v) { return v[1] + 1; });
    console.log("mappedMap:", mappedMap);
    var reducedMap1 = Array.from(map).reduce(function (a, v) { return a + v[1]; }, 0);
    console.log("reducedMap1:", reducedMap1);
    var reducedMap2 = Array.from(map).reduce(function (a, v) { a.set(v[1], v[0]); return a; }, new Map());
    console.log("reducedMap2:", reducedMap2);
};
mapExamples();
var typeExamples = function () {
    ;
    var person = {
        name: "Clara",
        address: {
            street: "Kalmgatan"
        }
    };
    console.log("person:", person);
    var updatedPerson1 = __assign(__assign({}, person), { name: "Clara Bjuvensjö" });
    console.log("updatedPerson1:", updatedPerson1);
    var updatedPerson2 = __assign(__assign({}, person), { address: __assign(__assign({}, person.address), { street: "Kalmisgatan" }) });
    console.log("updatedPerson2:", updatedPerson2);
};
typeExamples();
