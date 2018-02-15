import {testSapi} from '../../spec/helpers/sakura-api';
import {StudentModel} from './student-model';

describe('StudentModel tests', () => {
  const sapi = testSapi({
    models: [StudentModel]
  });

  it('StudentModel', () => {
    pending('not implemented');
  });
});
