import { Dispatch, ReactNode, SetStateAction } from "react";

export type ButtonProps = {
    children: ReactNode;
    type: "submit" | "button" | "reset" | undefined;
    styles?: string;
    func?: () => void
}
export type CaptionProps = {
    children: ReactNode;
    styles?: string;
}

export type ServiceCardProps = {
    imgSrc: string;
    text: string;
}

export type useAnimateI = {
    children: ReactNode;
    setIsNavActive: Dispatch<SetStateAction<string>>
    navValue: string
}