import {HTMLComponentProps, sanitizeClassName} from "@noxy/react-utils";
import React from "react";
import Style from "./Loader.module.css";

export function Loader(props: LoaderProps) {
  const {loading, graphic, content, className, children, ...component_method_props} = props;
  const {...component_props} = component_method_props;
  if (loading !== true) return children as JSX.Element;
  
  const classes = sanitizeClassName(Style.Component, "loader");
  
  return (
    <div {...component_props} className={classes}>
      {renderGraphic()}
      {renderContent()}
    </div>
  );
  
  function renderGraphic() {
    if (graphic) return graphic;
    
    return (
      <svg className={"graphic"} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(1 1) scale(0.98)">
          <circle cx="19" cy="19" r="19"/>
          <path d="M38 19c0-10-8-19-19-19">
            <animateTransform attributeName="transform" type="rotate" from="0 19 19" to="360 19 19" dur="1s" repeatCount="indefinite"/>
          </path>
        </g>
      </svg>
    );
  }
  
  function renderContent() {
    if (!content) return null;
    
    return (
      <span className={"content"}>{content}</span>
    );
  }
}

export interface LoaderProps extends HTMLComponentProps {
  loading?: boolean;
  graphic?: React.ReactNode;
  content?: React.ReactNode;
}
