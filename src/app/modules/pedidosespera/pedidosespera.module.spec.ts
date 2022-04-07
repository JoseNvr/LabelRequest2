import { PedidosEsperaModule } from './pedidosespera.module';

describe('Prueba1Module', () => {
  let prueba1Module: PedidosEsperaModule;

  beforeEach(() => {
    prueba1Module = new PedidosEsperaModule();
  });

  it('should create an instance', () => {
    expect(prueba1Module).toBeTruthy();
  });
});
