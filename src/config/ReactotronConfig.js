import Reactotron from 'reactotron-react-js';
import {reactotronRedux} from 'reactotron-redux';

//verifica se usuário está no ambiente de desenvolvimento

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
  .use(reactotronRedux())
  .connect();

  tron.clear();

  console.tron = tron;
}