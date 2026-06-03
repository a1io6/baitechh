'use strict';
import React from "react";
import styles from "./Breadcrumb.module.scss";
import Link from "next/link";

const Breadcrumb = ({ items }) => {
  return (
    <nav className={styles.breadcrumb}>
      <ul className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <li className={styles.item}>
                {isLast ? (
                  <span className={`${styles.link} ${styles.active}`}>
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.path} className={styles.link}>
                    {item.label}
                  </Link>
                )}
              </li>

              {!isLast && (
                <li className={styles.separator}>/</li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
