const connection = require("./connection");

class DB{
  constructor(connection){
      this.connection = connection;
    
  }
   findAllEmployees(){
      
    return this.connection.query("SELECT employee.id, employee.first_name, employee.last_name");

   }

   createEmployee(employee){

    return this.connection.query("INSERT INTO employee SET ?", employee);

   }
  
    removeEmployee(employeeId){
     return this.connection.query("DELETE FROM employee WHERE id = ?", employeeId);
    }

    updateEmployee(employeeId){
        return this.connection.query("UPDATE employee WHERE id = ?", employeeId);
    }

}

module.exports = new DB(connection);