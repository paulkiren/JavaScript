// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

/*A company's organizational structure is represented as 
1: 2, 3, 4 
In the above employees with id 2, 3 and 4 report to 1 
Assume the following hierarchy. 
1: 2, 3, 4 
3: 5, 6, 7 
5: 8, 9, 10 
Given an employee Id, return all the employees reporting to him directly 
or indirectly*/


const reportingManagers = [];
const companyEmployees = [];

function  createEmployees ( orgStr ) {
  // assuming the orgStr string is 1: 2, 3, 4 
  const  employee = orgStr.split(":");
  const reportingManagerid = employee[0];
  reportingManagers.push(reportingManagerid);
  return employee[1].split(",").map((eid)=> ({
    eid, rmId: reportingManagerid
  }))
  
}

function cerateEmployees () {
  companyEmployees.splice( 1, 0,...createEmployees("1: 2, 3, 4 "));
  companyEmployees.splice(1, 0, ...createEmployees("3: 5, 6, 7 "));
  companyEmployees.splice(1, 0, ...createEmployees("5: 8, 9, 10 "));
  
}

function employeesReporingTo(eid) {
 return companyEmployees.filter(employee=>employee.rmId===eid);
  
}

function getThereportingEmployees (eid) {
  
  const directreporting =  employeesReporingTo(eid);
  const eids =  directreporting.map(empl=>empl.eid);
  eids.forEach((item) => {
    if(reportingManagers.indexOf(item)!==-1) {
      directreporting.push(employeesReporingTo(item));
    }
  });

  // directreporting.forEach()
  return directreporting;
  
}

cerateEmployees ();
getThereportingEmployees ("3");



