"use client";

import React from "react";
import { useSocket } from "./providers/socket-provider";
import { Badge } from "./ui/badge";

const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge variant="outline" className="text-white border-none bg-yellow-600">
        Pinging
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className="bg-emerald-600 text-white border-none">
      Online
    </Badge>
  );
};

export default SocketIndicator;
