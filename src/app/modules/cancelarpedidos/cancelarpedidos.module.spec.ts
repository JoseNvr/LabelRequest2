import { CancelarPedidosModule } from './cancelarpedidos.module';

describe('Prueba1Module', () => {
  let prueba1Module: CancelarPedidosModule;

  beforeEach(() => {
    prueba1Module = new CancelarPedidosModule();
  });

  it('should create an instance', () => {
    expect(prueba1Module).toBeTruthy();
  });
});
