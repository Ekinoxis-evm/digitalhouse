# Digital House - Smart Contracts

Smart contracts para Digital House, una plataforma de reservas descentralizada con sistema de subastas.

## 📁 Estructura de Directorios

```
contracts/
├── core/                          # Contratos principales del protocolo
│   ├── DigitalHouseFactory.sol   # Factory para crear vaults
│   └── DigitalHouseVault.sol     # Vault individual con sistema de subastas
│
├── interfaces/                    # Interfaces de los contratos
│   ├── IDigitalHouseFactory.sol  # Interface del Factory
│   └── IDigitalHouseVault.sol    # Interface del Vault
│
├── libraries/                     # Librerías reutilizables
│   └── (futuras librerías)
│
├── mocks/                         # Contratos mock para testing
│   └── (mocks de tokens, etc)
│
└── utils/                         # Contratos utilitarios
    └── (helpers y utilidades)
```

## 📜 Contratos Principales

### DigitalHouseFactory.sol

Factory pattern para crear y gestionar múltiples vaults de propiedades.

**Funciones principales:**
- `createVault()` - Crear nuevo vault para una propiedad
- `getVaultAddress()` - Obtener dirección de vault por ID
- `getVaultInfo()` - Obtener información completa de vault
- `getAllVaultIds()` - Listar todos los vaults creados
- `getOwnerVaults()` - Obtener vaults de un propietario

### DigitalHouseVault.sol

Contrato individual que gestiona reservas, subastas y pagos para una propiedad.

**Estados del vault:**
- `FREE` - Disponible para reservar
- `AUCTION` - Tiene reserva activa, aceptando ofertas
- `SETTLED` - Check-in completado

**Funciones principales:**

**Gestión de Reservas:**
- `createReservation()` - Crear reserva con stake de PYUSD
- `cancelReservation()` - Cancelar reserva
- `getCurrentReservation()` - Ver reserva actual

**Sistema de Subastas:**
- `placeBid()` - Hacer oferta por reserva existente
- `withdrawBid()` - Retirar oferta
- `cedeReservation()` - Ceder reserva a mejor postor
- `getAuctionBids()` - Ver todas las ofertas activas

**Check-in/Check-out:**
- `checkIn()` - Ejecutar check-in y generar código de acceso
- `checkOut()` - Completar estadía y liquidar contrato

## 💰 Distribución de Pagos

### Pago Normal (100% del stake)
- 95% → Hotel/Real Estate
- 5% → Digital House

### Cesión (Valor Ciudadano)
Solo se distribuye el **valor adicional** (diferencia entre stake original y oferta ganadora):
- 20% → Convexo
- 50% → Hotel/Real Estate
- 30% → Usuario original

**Ejemplo:**
```
Stake original: 1,000 PYUSD
Oferta ganadora: 1,500 PYUSD
Valor adicional: 500 PYUSD

Distribución de 500 PYUSD:
├─ Convexo: 100 PYUSD (20%)
├─ Hotel: 250 PYUSD (50%)
└─ Usuario: 150 PYUSD (30%)

Usuario recibe total:
├─ Stake devuelto: 1,000 PYUSD
├─ Ganancia: 150 PYUSD
└─ TOTAL: 1,150 PYUSD ✅
```

## 🔧 Desarrollo

### Compilación

```bash
npm run compile
```

### Testing

```bash
# Tests completos
npm test

# Tests con coverage
npm run test:coverage

# Tests con reporte de gas
npm run test:gas
```

### Deployment

```bash
# Local
npm run deploy:local

# Testnet
npm run deploy:sepolia
npm run deploy:arbitrum
npm run deploy:base
```

## 🔒 Seguridad

### Medidas Implementadas

- ✅ `ReentrancyGuard` en funciones críticas
- ✅ `Ownable` para control de acceso
- ✅ Validación de inputs exhaustiva
- ✅ Solo pagos en PYUSD (no ETH directo)
- ✅ Eventos para todas las acciones importantes

### Constantes de Distribución

```solidity
uint256 constant PAYMENT_REALESTATE_PCT = 95;
uint256 constant PAYMENT_DIGITALHOUSE_PCT = 5;
uint256 constant CITIZEN_CONVEXO_PCT = 20;
uint256 constant CITIZEN_HOTEL_PCT = 50;
uint256 constant CITIZEN_OWNER_PCT = 30;
```

## 📚 Recursos Adicionales

- [Documentación Técnica](../docs/TECHNICAL.md)
- [Guía de Deployment](../docs/DEPLOYMENT.md)
- [Arquitectura del Sistema](../docs/ARCHITECTURE.md)

## 🔗 Direcciones de Contratos

### Ethereum Sepolia
```
Factory: TBD
PYUSD:   0xCaC524BcA292aaade2DF8A05cC58F0a65B1B3bB9
```

### Arbitrum Sepolia
```
Factory: TBD
PYUSD:   0x637A1259C6afd7E3AdF63993cA7E58BB438aB1B1
```

### Base Sepolia
```
Factory: TBD
PYUSD:   TBD
```

## 📄 Licencia

MIT License - ver [LICENSE](../LICENSE) para detalles.
