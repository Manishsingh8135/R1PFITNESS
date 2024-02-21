"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import GlofoxModal from "../modal/Modal";

export function ThreeDCardDemo() {
  return (
    
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black  border-maincolor w-auto sm:w-[30rem] h-auto rounded-xl p-6  border-x border-t ">
            <CardItem
              translateZ="50"
              className="text-3xl font-bold  text-maincolor dark:text-maincolor mb-8 text-center"
            >
               FREE 3-Day Pass!!
            </CardItem>
            
            <div className="flex justify-between items-center mt-20">

              <GlofoxModal />
            </div>
          </CardBody>
        </CardContainer>
      
  );
}
