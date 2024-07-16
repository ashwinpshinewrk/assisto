// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const serializeNonPOJOs = (obj : any) => {
    return structuredClone(obj)
}