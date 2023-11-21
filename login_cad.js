const database = {
   users: [
       { username: 'user1', password: 'pass1', name: 'User One', email: 'user.one@example.com' },
       { username: 'user2', password: 'pass2', name: 'User Two', email: 'user.two@example.com' }
   ]
};

function login() {
   const username = document.getElementById('login-username').value;
   const password = document.getElementById('login-password').value;

   const user = database.users.find(u => u.username === username && u.password === password);

   if (user) {
       alert(`Bem-vindo, ${user.name}!`);
       window.location.href = 'logistica.html';
   } else {
       alert('Credenciais inválidas. Por favor, tente novamente.');
   }
}

function showRegistrationForm() {
   document.getElementById('login-container').style.display = 'none';
   document.getElementById('registration-container').style.display = 'block';
}

function register() {
   const name = document.getElementById('reg-name').value;
   const email = document.getElementById('reg-email').value;
   const username = document.getElementById('reg-username').value;
   const password = document.getElementById('reg-password').value;

   database.users.push({ username, password, name, email });

   alert('Cadastro realizado com sucesso! Faça login para continuar.');
   
   document.getElementById('login-container').style.display = 'block';
   document.getElementById('registration-container').style.display = 'none';
}
