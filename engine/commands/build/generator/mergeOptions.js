
import _ from 'underscore'
import lodash from 'lodash'

export default ({ handlerOptions = [], generator }) => {

  generator.options = handlerOptions.map(option => {
    switch (option.scope) {
      case 'private': {
        return option
      }
      default: break
    }

    const i = _.findWhere(generator.libraryOptions,
      { name: option.name })

    if (!i) {
      return option
    }

    let result = { ...option }
    lodash.merge(
      result,
      i,
    )
    return result
  })
}
