export function generateFakeUser() {
  const random = Math.floor(Math.random() * 10000);

  return {
    username: `fake_user_${random}`,
    password: 'fake_pass',
  };
}