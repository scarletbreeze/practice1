import React from 'react';
import './nav.scss';

const NavPresenter = ({name, context, changeClassName, position}) => {
    // "cd-secondary-nav"
    return (
        <div>
             <nav className={["cd-secondary-nav", position].join(" ")} id="nav" >
            <ul>
                <li class="sub_navi_list first">
                    <a class="active" href="#0">비전</a>
                </li>
                <li class="sub_navi_list second">
                    <a href="#1">문화</a>
                </li>
                <li class="sub_navi_list third">
                    <a href="#2">CI</a>
                </li>
                <li class="sub_navi_list forth">
                    <a href="#3">보도자료</a>
                </li>
                <li class="sub_navi_list fifth">
                    <a href="#4">공지사항</a>
                </li>
            </ul>
        </nav>
        </div>
    );
};

export default NavPresenter;