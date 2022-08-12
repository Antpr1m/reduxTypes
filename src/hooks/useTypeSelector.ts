import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers/combine";

//?Создание useSelector работающего с типами

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector