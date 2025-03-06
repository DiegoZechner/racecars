"use client";
import { Car } from "@/app/libs/types";
import React, { useState } from "react";

type Props = { car: Car };

export default function Card({ car }: Props) {
  const [isActive, setisActive] = useState(false);

  return (
    <div
      className={`shadow p-4 hover:cursor-pointer ${
        isActive ? "bg-amber-200" : "bg-amber-50"
      }`}
      onClick={() => {
        setisActive(!isActive);
      }}
    >
      <h2 className="font-bold text-3xl">{car.name}</h2>
      <div>{car.type}</div>
      {isActive ? "active" : "inactive"}
    </div>
  );
}
