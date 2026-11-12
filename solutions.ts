const multiplyValue = (value : number, multiplier? : number) => {
    if (multiplier === undefined) {
        multiplier = 2
    }
    return value * multiplier
}


const processInput = (value : string | number | boolean) : string | number => {
    if (typeof value === "string") {
        return value.trim().toLowerCase()
    }
    else if (typeof value === "number") {
        return value * 10
    }

    else {
        return value ? "Active" : "Inactive"
    }
}


