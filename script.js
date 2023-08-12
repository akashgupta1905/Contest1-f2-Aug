let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  function PrintDeveloper() {
    const developers = arr.filter(employee => employee.profession === 'developer');
    console.log('Developers:', developers);
  }
  
  function addData() {
    const newEmployee = { id: 4, name: 'Shreyas', age: 20, profession: 'intern' };
    arr.push(newEmployee);
    console.log('Updated Array after adding:', arr);
  }
  
  function removeAdmin() {
    arr = arr.filter(employee => employee.profession !== 'admin');
    console.log('Updated Array after removing admins:', arr);
  }
  
  function concatenateArray() {
    const newEmployeesArray = [
      { id: 5, name: 'Shubham', age: 24, profession: 'developer' },
      { id: 6, name: 'om', age: 32, profession: 'manager' }
    ];
    arr = arr.concat(newEmployeesArray);
    console.log('Updated Array after concatenation:', arr);
  }