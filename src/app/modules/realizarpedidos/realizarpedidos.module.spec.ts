import { RealizarPedidosModule } from './realizarpedidos.module';

describe('Prueba1Module', () => {
  let prueba1Module: RealizarPedidosModule;

  beforeEach(() => {
    prueba1Module = new RealizarPedidosModule();
  });

  it('should create an instance', () => {
    expect(prueba1Module).toBeTruthy();
  });
});
