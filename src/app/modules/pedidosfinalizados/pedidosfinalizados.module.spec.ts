import { PedidosFinalizadosModule } from './pedidosfinalizados.module';

describe('Prueba1Module', () => {
  let prueba1Module: PedidosFinalizadosModule;

  beforeEach(() => {
    prueba1Module = new PedidosFinalizadosModule();
  });

  it('should create an instance', () => {
    expect(prueba1Module).toBeTruthy();
  });
});
