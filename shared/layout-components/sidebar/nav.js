import React from "react";

const DashboardIcon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54a8,8,0,0,1,2.62,5.92V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z" opacity="0.2"></path><path d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54a8,8,0,0,1,2.62,5.92V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>;

const ErrorIcon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z" opacity="0.2"></path><path d="M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><line x1="128" y1="144" x2="128" y2="104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><circle cx="128" cy="180" r="12"></circle></svg>;

const NestedmenuIcon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polygon points="32 80 128 136 224 80 128 24 32 80" opacity="0.2"></polygon><polyline points="32 176 128 232 224 176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><polyline points="32 128 128 184 224 128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><polygon points="32 80 128 136 224 80 128 24 32 80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polygon></svg>;

export const MENUITEMS = [

    {
      icon: DashboardIcon, title: 'Dashboards', type: "sub", active: false, children: [
      { path: "/dashboard/gaming", type: "link", active: false, selected: false, title: "Gaming" },

    ]
  },
    
  {
    icon: ErrorIcon, title: "Error", type: "sub", active: false, selected: false, children: [

      { path: "/error-pages/401-error", type: "link", active: false, selected: false, title: "401-Error" },
    ]
  },
  {
     icon: NestedmenuIcon, title: "Nested Menu", type: "sub", active: false, children: [
      {  path: "",title: "Nested-1", type: "empty",active: false,selected: false, dirchange: false, },

      {title: "Nested-2", type: "sub", active: false, selected: false, dirchange: false,  children: [
          { path: "", type: "empty", active: false, selected: false, dirchange: false,  title: "Nested-2-1"},
          { path: "", type: "empty", ctive: false, selected: false, dirchange: false,  title: "Nested-2-2"},
          { path: "", type: "empty", active: false, selected: false, dirchange: false,  title: "Nested-2-3"},
        ],
      },
    ],
  },

];

export default MENUITEMS;
