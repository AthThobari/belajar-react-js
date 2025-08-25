let contoh = "test"

switch (contoh != null) {
    case typeof contoh == "boolean":
        console.log("type boolean")
        break;
    case typeof contoh == "string":
        console.log("type string")
        break;
    default:
        console.log("bukan boolean ataupun string")
}