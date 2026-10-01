import mod from "use-local-storage"

const useLocalStorage =
  (mod as unknown as { default: typeof mod }).default ?? mod

export default useLocalStorage
