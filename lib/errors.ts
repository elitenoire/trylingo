import ModernError from 'modern-errors'

type CommonProps = {
  title?: string
}

export const BaseError = ModernError.subclass('BaseError', {
  props: {} as CommonProps,
})

export const GenericError = BaseError.subclass('GenericError')

export const ServerError = BaseError.subclass('ServerError')

export const DatabaseError = BaseError.subclass('DatabaseError')
