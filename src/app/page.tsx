"use client"
import Loading from "@/components/Button/Loading";
import LandingPage from "@/components/LandingPage/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  return <div>{isLoading ? <Loading /> : <LandingPage />}</div>;
}
