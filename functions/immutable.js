let immutableObj={
    key:"value"
}
Object.freeze(immutableObj);
immutableObj.key="heythere";
console.log(immutableObj.key)