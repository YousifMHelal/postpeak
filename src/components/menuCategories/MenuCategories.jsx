import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";
import { internalMutate } from "swr/_internal";

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const MenuCategories = async () => {
  const data = await getData();

  return (
    <div className={styles.categoryList}>
      {data?.map((item) => (
        <Link
          key={item._id}
          href={`/blog?cat=${item.slug}`}
          className={`${styles.categoryItem} ${styles[item.slug]}`}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;
