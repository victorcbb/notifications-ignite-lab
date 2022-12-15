export type replace<T, R> = Omit<T, keyof R> & R;
