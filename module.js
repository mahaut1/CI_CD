/**
 * Calculate a person's age in years.
 *
 * @param {object} p An object representing a person, implementing a birth Date parameter.
 * @return {number} The age in years of p
 */

function calculateAge(p) {
    if(!p) {
        throw new Error("missing param p")
        }
    if (typeof p !== "object" || Array.isArray(p)) {
            throw new Error("parameter must be an object");
        }
    if (!p.birth) {
            throw new Error("missing birth field");
        }
    if (!(p.birth instanceof Date) || isNaN(p.birth.getTime())) {
            throw new Error("birth must be a valid Date object");
        }
    
    let dateDiff = new Date(Date.now()-p.birth.getTime())
    let age= Math.abs(dateDiff.getUTCFullYear()-1970)
    return age;
}

export {calculateAge}