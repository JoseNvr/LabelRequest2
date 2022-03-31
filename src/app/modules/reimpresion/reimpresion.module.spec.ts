import { ReimpresionModule } from './reimpresion.module';

describe('Prueba1Module', () => {
  let prueba1Module: ReimpresionModule;

  beforeEach(() => {
    prueba1Module = new ReimpresionModule();
  });

  it('should create an instance', () => {
    expect(prueba1Module).toBeTruthy();
  });
});
