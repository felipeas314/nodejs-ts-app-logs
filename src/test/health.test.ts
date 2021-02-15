import axios from 'axios';
import Server from '../server';
const server = new Server();
let serverTest: any;

beforeAll(async () => {
  serverTest = (await server.init()).listen(3000);
});

afterAll( () => {
  serverTest.close();
})

describe('Testing health of application', () => {

  test('double function', async () => {
    const response = await axios.get('http://localhost:3000/api/v1/health');
    expect(response.data.message).toEqual('Server UP!');
  });

});





