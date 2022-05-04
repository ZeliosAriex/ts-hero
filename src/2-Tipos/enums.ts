// Enum numérico
enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

// Asignamos el nivel de log a debug
const logLevel: LogLevel = LogLevel.DEBUG

// Enum de strings
enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

const facingDirection: Direction = Direction.UP

// Obtener las keys de los enums como string literals
type DirectionString = keyof typeof Direction

const facingDirection2: DirectionString = 'DOWN'

export {}
