import { PedidosImpresionModule } from './pedidosimpresion.module';

describe('Prueba1Module', () => {
  let prueba1Module: PedidosImpresionModule;

  beforeEach(() => {
    prueba1Module = new PedidosImpresionModule();
  });

  it('should create an instance', () => {
    expect(prueba1Module).toBeTruthy();
  });
});
