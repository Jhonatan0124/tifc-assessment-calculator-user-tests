const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

// Implementar 1 prueba para la función add() que verifica un usuario que no está en la lista de usuarios.
test("add user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});


// Implementar 1 prueba para la función remove() que verifica un usuario que no está en la lista de usuarios.
test("remove user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});


// Implementar 2 pruebas unitarias para la función findByEmail()
test("findByEmail user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  // userController.remove(user);
  
  expect(userController.findByEmail("santiago@generation.org").email).toBe("santiago@generation.org");
});

test("findByEmail user to userController", () => {
  let user = new User(5467, "Miguel", "miguel@generation.org");
  userController.add(user);
  // userController.remove(user);
  
  expect(userController.findByEmail("miguel@generation.org").email).toBe("miguel@generation.org");
});


//Implementar 2 pruebas unitarias para la función findById().
test("findById user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  // userController.remove(user);
  
  expect(userController.findById(1234).id).toBe(1234);
});

test("findById user to userController", () => {
  let user = new User(2345, "Antonio", "antonio@generation.org");
  userController.add(user);
  // userController.remove(user);
  
  expect(userController.findById(2345).id).toBe(2345);
});


