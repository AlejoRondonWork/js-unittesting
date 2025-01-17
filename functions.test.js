const functions = require('./functions.js')

describe('multiply function', () => {
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE
    const a = 2
    const b = 4

    //ACT
    const result = functions.multiply(a, b)

    //ASSERT
    expect(result).toEqual(8)
  })

  it('should return 0 when an argument is 0', () => {
    //ARRANGE
    const a = 0
    const b = Math.random()

    //ACT
    const result = functions.multiply(a, b)

    //ASSERT
    expect(result).toEqual(0)
  })
})

describe('isNull function', () => {
  it('should be return null', () => {
    //ARRANGE

    //ACT
    const result = functions.isNull()

    //ASSERT
    expect(result).toBeNull()
  })

  it('should be return null even when it receives a number as argument', () => {
    //ARRANGE
    const a = Math.random()

    //ACT
    const result = functions.isNull(a)

    //ASSERT
    expect(result).toBeNull()
  })
})

describe('checkTruthy function', () => {
  it('should be return true when I sent true', () => {
    //ARRANGE
    const x = true

    //ACT
    const result = functions.checkTruthy(true)

    //ASSERT
    expect(result).toBeTruthy()
  })

  it('should be return false when I sent false', () => {
    //ARRANGE
    const x = false

    //ACT
    const result = functions.checkTruthy(x)

    //ASSERT
    expect(result).toBeFalsy()
  })

  it('should be return false when I sent an array=[1,2,3,4,5]', () => {
    //ARRANGE
    const x = [1, 2, 3, 4, 5]

    //ACT
    const result = functions.checkTruthy(x)

    //ASSERT
    expect(result).toBeFalsy()
  })
})

describe('addLastName function', () => {
  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGE
    let lastname = 'Perez'

    //ACT
    let result = functions.addLastName(lastname)

    //ASSERT
    expect(result).toEqual({ firstname: 'Pepito', lastname })
  })

  it('should be return Pepito Rondon when I sent Rondon', () => {
    //ARRANGE
    let lastname = 'Rondon'

    //ACT
    let result = functions.addLastName(lastname)

    //ASSERT
    expect(result).toEqual({ firstname: 'Pepito', lastname })
  })
})
