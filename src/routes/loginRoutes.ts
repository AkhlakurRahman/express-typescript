import { Router } from 'express';

const router = Router();

router.get('/login', (req, res) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  `);
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  res.send(email + password);
});

export { router };
