import React, { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter"; //카운터
import ReducerSample from "./components/ReducerSample/ReducerSample";
import { TodosContextProvider } from "./contexts/TodosContext";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <TodosContextProvider>
      <TodoForm />
      <TodoList />
    </TodosContextProvider>
  );
};

export default App;
