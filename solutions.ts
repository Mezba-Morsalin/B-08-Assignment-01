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


const formatCoordinate = (location : [number, number, string]): string => {
    const [latitude, longitude, locationName] = location

    return `Location: ${[locationName]} (${latitude}, ${longitude})`
}


const concatenateArrays = <T> (...arrays : T[][]) : T[] => {

    return arrays.flat()
}


interface Course {
    title : string
    students : number
    isPublished : boolean
}

const getPopularCourses = (courses : Course[], minStudents :  number) : Course[] => {
    return courses.filter(course => course.isPublished === true && course.students >= minStudents)
}


const pluckValues =<T, K extends keyof T> (items: T[], key: K): T[K][] => {
    return items.map(item => item[key])
}


class Employee {
    constructor (
       protected name : string, 
       private baseSalary : number) {
    }

    getDetails() : string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{
    constructor (
        private department : string,
        name : string,
        baseSalary : number
    ) {super(name, baseSalary)}

    getRoleInfo() : string {
        return `Manager of ${this.department}: ${this.name}`
    }
}