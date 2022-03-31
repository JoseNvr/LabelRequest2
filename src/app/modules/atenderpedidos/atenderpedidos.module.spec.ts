import { AtenderPedidosModule } from './atenderpedidos.module';

describe('Prueba1Module', () => {
  let prueba1Module: AtenderPedidosModule;

  beforeEach(() => {
    prueba1Module = new AtenderPedidosModule();
  });

  it('should create an instance', () => {
    expect(prueba1Module).toBeTruthy();
  });
});
