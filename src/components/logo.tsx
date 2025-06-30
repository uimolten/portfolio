import type { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="UIMolten Logo Icon"
            {...props}
        >
            <path
                d="M4.66602 23.3333V4.66667L13.9993 16.3333L23.3327 4.66667V23.3333"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Logo;
