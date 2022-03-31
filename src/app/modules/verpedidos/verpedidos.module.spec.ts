import { VerPedidosModule } from './verpedidos.module';

describe('Prueba1Module', () => {
  let prueba1Module: VerPedidosModule;

  beforeEach(() => {
    prueba1Module = new VerPedidosModule();
  });

  it('should create an instance', () => {
    expect(prueba1Module).toBeTruthy();
  });
});
