import React , {Fragment} from 'react';
import './subNav.scss'


const SubNavPresenter = (props) => {

    return(
        // <!-- .cd-auto-hide-header -->
    
        <Fragment>
            <section class="cd-hero">
                <div class="cd-hero-content">
                    {/* <!-- your content here --> */}
                </div>
            </section>


            <nav className={["cd-secondary-nav", props.position].join(" ") } >
                <ul>
                    <li class="sub_navi_list first" >
                        <a class="active" className={props.act} href="#0">비전</a>
                    </li>
                    <li class="sub_navi_list second">
                        <a href="#1" className={props.act1}>문화</a>
                    </li>
                    <li class="sub_navi_list third">
                        <a href="#2" className={props.act2}>CI</a>
                    </li>
                    <li class="sub_navi_list forth">
                        <a href="#3" className={props.act3}>보도자료</a>
                    </li>
                    <li class="sub_navi_list fifth">
                        <a href="#4" className={props.act4}>공지사항</a>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}
export default SubNavPresenter;