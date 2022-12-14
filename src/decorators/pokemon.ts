function printToConsole(constructor: Function) {
  console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false): Function => {
  return print ? printToConsole : () => {}
}

const blockProptype = function(constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

function CheckValidPokemonId() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    descriptor.value = (id: number) => {
      if( id < 1 || id > 800) {
        return console.log('el id del pokemon debe estar entre 1 y 800')
      } else {
        return originalMethod(id)
      }
    }
  }
}

@blockProptype
@printToConsoleConditional(true)
export class Pokemon {
  public publicApi: string = 'https://pokeapi.co'
  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon saved in DB ${ id }`)
  }
}