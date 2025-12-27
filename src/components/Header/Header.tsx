"use client"

import {Button} from "@heroui/react";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import {Logo} from "@/components/Logo/Logo";

export const Header = () => {
  return (
    <div className="w-full fixed top-0 left-0 right-0 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <Logo/>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center justify-between gap-6 mr-4">
          <FiSearch size={22}/>
          <FiShoppingCart size={22}/>
        </div>
        <Button>Вход</Button>
        <Button>Регистрация</Button></div>
      </div>

    </div>
  );
};