import { colors } from "@ui/design-tokens";
import { Icon } from "@ui/Icon/Icon";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { getUserID } from "../lib/user";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div css={{ display: "flex", alignItems: "center" }}>
      {items.map((item, index) => (
        <>
          {item.href ? (
            <Link
              href={{
                pathname: item.href,
                query: { userId: getUserID(useRouter().query) },
              }}
            >
              {item.label}
            </Link>
          ) : (
            <span css={{ color: colors.secondary[700] }} key={index}>
              {item.label}
            </span>
          )}
          {index < items.length - 1 && <Icon icon="chevronRight" size={16} />}
        </>
      ))}
    </div>
  );
};
