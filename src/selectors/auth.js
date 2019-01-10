export const authToken = ({auth}) => auth.token
export const isLoggedIn = ({auth}) => !!auth.token
export const isErrorOccurred = ({auth}) => !!auth.error
