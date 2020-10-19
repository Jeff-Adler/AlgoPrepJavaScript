/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.lot = [big,medium,small]
};

/** 
 * @param {number} carType
 * @return {boolean}
 */

ParkingSystem.prototype.addCar = function(carType) {
    if (this.lot[carType - 1] === 0) return false;
    this.lot[carType - 1]--;
    return true;
};


//class based inheritance
// class ParkingSystem {
//     constructor(big, medium, small) {
//         this.capacities = {
//             1:big,
//             2:medium,
//             3:small,
//         }
//     }

//     addCar(type) {
//         if(this.capacities[type] === 0)
//             return false;
        
//         this.capacities[type]--;
//         return true;
        
//     }
// }

// //prototypal inheritance with object
// var ParkingSystem = function(big, medium, small) {
//     this.lot = {
//             1:big,
//             2:medium,
//             3:small,
//         }
// };

// /** 
//  * @param {number} carType
//  * @return {boolean}
//  */
// ParkingSystem.prototype.addCar = function(carType) {
//     if (this.lot[carType] === 0) return false;
//     this.lot[carType]--;
//     return true;
// };



/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */