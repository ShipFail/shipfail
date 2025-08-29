"use client";
import React, { useEffect } from 'react';
import  * as switcherdata from '@/shared/data/switcherdata/switcherdata';
import { connect } from 'react-redux';
import {ThemeChanger} from "@/shared/redux/action"

function Layout({ children, local_varaiable,ThemeChanger }) {


    useEffect(() => {
        switcherdata.LocalStorageBackup(ThemeChanger);
    }, []);

    useEffect(() => {
        const htmlElement = document.documentElement;
        const bodyElement = document.body;

        const setOrRemoveAttr = (name, value) => {
            if (value !== undefined && value !== '') {
                htmlElement.setAttribute(name, String(value));
            } else {
                htmlElement.removeAttribute(name);
            }
        };

        setOrRemoveAttr('dir', local_varaiable.dir);
        setOrRemoveAttr('data-theme-mode', local_varaiable.dataThemeMode);
        setOrRemoveAttr('data-header-styles', local_varaiable.dataHeaderStyles);
        setOrRemoveAttr('data-vertical-style', local_varaiable.dataVerticalStyle);
        setOrRemoveAttr('data-card-background', local_varaiable.dataCardBackground);
        setOrRemoveAttr('data-card-style', local_varaiable.dataCardStyle);
        setOrRemoveAttr('data-nav-layout', local_varaiable.dataNavLayout);
        setOrRemoveAttr('data-menu-styles', local_varaiable.dataMenuStyles);
        setOrRemoveAttr('data-toggled', local_varaiable.dataToggled);
        setOrRemoveAttr('data-nav-style', local_varaiable.dataNavStyle);
        setOrRemoveAttr('hor-style', local_varaiable.horStyle);
        setOrRemoveAttr('data-page-style', local_varaiable.dataPageStyle);
        setOrRemoveAttr('data-width', local_varaiable.dataWidth);
        setOrRemoveAttr('data-menu-position', local_varaiable.dataMenuPosition);
        setOrRemoveAttr('data-header-position', local_varaiable.dataHeaderPosition);
        setOrRemoveAttr('data-icon-overlay', local_varaiable.iconOverlay);
        setOrRemoveAttr('data-bg-img', local_varaiable.bgImg);
        setOrRemoveAttr('data-icon-text', local_varaiable.iconText);
        setOrRemoveAttr('data-pattern-img', local_varaiable.patternImg);

        if (bodyElement) {
            bodyElement.className = local_varaiable.body ? String(local_varaiable.body) : '';
        }

        const rootStyle = htmlElement.style;
        const setOrRemoveVar = (name, value) => {
            if (value !== undefined && value !== '') {
                rootStyle.setProperty(name, String(value));
            } else {
                rootStyle.removeProperty(name);
            }
        };
        setOrRemoveVar('--primary-rgb', local_varaiable.colorPrimaryRgb);
        setOrRemoveVar('--primary', local_varaiable.colorPrimary);
        setOrRemoveVar('--gradient', local_varaiable.bgGradient);
        setOrRemoveVar('--light', local_varaiable.bgLight);
    }, [local_varaiable]);


    return (
        <>
            {children}
        </>
    );
};

const mapStateToProps = (state) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, {ThemeChanger})(Layout);
