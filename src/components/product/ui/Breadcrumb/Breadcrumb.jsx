'use strict';
import React from "react";
import "./breadcrumb.scss";
import Link from "next/link";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <li className="breadcrumb__item">
                {isLast ? (
                  <span className="breadcrumb__link breadcrumb__link--active">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.path} className="breadcrumb__link">
                    {item.label}
                  </Link>
                )}
              </li>

              {!isLast && (
                <li className="breadcrumb__separator">/</li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;