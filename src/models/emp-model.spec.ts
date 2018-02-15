import {testSapi} from '../../spec/helpers/sakura-api';
import {EmpModel} from './emp-model';

describe('EmpModel tests', () => {
  const sapi = testSapi({
    models: [EmpModel]
  });

  it('EmpModel', () => {
    pending('not implemented');
  });
});
