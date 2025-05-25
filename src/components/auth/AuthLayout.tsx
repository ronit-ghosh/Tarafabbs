import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode;
    title: string;
    subtitle: string;
    footerText: string;
    footerLinkText: string;
    footerLinkHref: string;
}

export default function AuthLayout({
    children,
    title,
    subtitle,
    footerText,
    footerLinkText,
    footerLinkHref,
}: AuthLayoutProps) {
    return (
        <div className="flex h-screen">
            {/* Auth form side */}
            <div className="flex w-full flex-col justify-center px-4 py-12 sm:w-1/2 sm:px-6 lg:px-8 xl:px-20">
                <div className="mx-auto w-full max-w-sm sm:w-full sm:max-w-md">
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
                        <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
                    </div>

                    {children}

                    <div className="mt-8 text-center text-sm">
                        <span className="text-muted-foreground">{footerText}</span>{" "}
                        <Link
                            href={footerLinkHref}
                            className="font-semibold text-primary hover:underline"
                        >
                            {footerLinkText}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Image side */}
            <div className="hidden bg-muted sm:block sm:w-1/2">
                <div className="relative h-full w-full">
                    <Image
                        width={1000}
                        height={1000}
                        src="https://res.cloudinary.com/drynqkitl/image/upload/v1748128193/auth_ckov3d.jpg"
                        alt="People working together"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <h2 className="text-3xl font-bold">Join our community</h2>
                            <p className="mt-2 max-w-md text-sm">
                                Connect with thousands of members and discover new opportunities
                                for collaboration and growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}