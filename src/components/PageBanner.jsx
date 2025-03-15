"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function PageBanner() {
  const pathname = usePathname(); // Get the current path

  // Split the pathname into segments, excluding any empty segments
  const pathSegments = pathname.split("/").filter(Boolean);

  // Function to generate breadcrumb
  const renderBreadcrumb = () => {
    const breadcrumbs = [
      { name: "Home", href: "/" },
      ...pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");
        return {
          name: segment.charAt(0).toUpperCase() + segment.slice(1),
          href,
        };
      }),
    ];

    return breadcrumbs.map((crumb, index) => {
      // If it's the last breadcrumb item, render as plain text (non-clickable)
      const isLast = index === breadcrumbs.length - 1;
      return (
        <span key={index}>
          {isLast ? (
            // Last item as plain text
            <span>{crumb.name}</span>
          ) : (
            // Other items as clickable links
            <Link href={crumb.href}>{crumb.name}</Link>
          )}
          {index < breadcrumbs.length - 1 && <span> / </span>}
        </span>
      );
    });
  };

  return (
    <section className="page-banner">
      <div className="container">
        <div className="breadcrumb">{renderBreadcrumb()}</div>
      </div>
    </section>
  );
}
