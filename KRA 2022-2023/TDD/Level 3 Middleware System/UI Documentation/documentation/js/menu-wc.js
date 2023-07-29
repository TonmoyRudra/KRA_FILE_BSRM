'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">level3-middleware-ui documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-07dc7b796b99fd1e72e5a1b815e55635769fb9381c94333fc749119d0468a586a1c48ce0e490dfdaad92f2adfa4dd0324953c895388b374910cb7ba6d1169da3"' : 'data-bs-target="#xs-components-links-module-AppModule-07dc7b796b99fd1e72e5a1b815e55635769fb9381c94333fc749119d0468a586a1c48ce0e490dfdaad92f2adfa4dd0324953c895388b374910cb7ba6d1169da3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-07dc7b796b99fd1e72e5a1b815e55635769fb9381c94333fc749119d0468a586a1c48ce0e490dfdaad92f2adfa4dd0324953c895388b374910cb7ba6d1169da3"' :
                                            'id="xs-components-links-module-AppModule-07dc7b796b99fd1e72e5a1b815e55635769fb9381c94333fc749119d0468a586a1c48ce0e490dfdaad92f2adfa4dd0324953c895388b374910cb7ba6d1169da3"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-00e91892bb241ce467bbddd2e01eb6f1599507dcb9d79b8bb47303c31b06e8da35342574524cdbe1594c70872b5d6259a3de25c717f1034eaf0c7ed5924268a3"' : 'data-bs-target="#xs-components-links-module-AuthModule-00e91892bb241ce467bbddd2e01eb6f1599507dcb9d79b8bb47303c31b06e8da35342574524cdbe1594c70872b5d6259a3de25c717f1034eaf0c7ed5924268a3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-00e91892bb241ce467bbddd2e01eb6f1599507dcb9d79b8bb47303c31b06e8da35342574524cdbe1594c70872b5d6259a3de25c717f1034eaf0c7ed5924268a3"' :
                                            'id="xs-components-links-module-AuthModule-00e91892bb241ce467bbddd2e01eb6f1599507dcb9d79b8bb47303c31b06e8da35342574524cdbe1594c70872b5d6259a3de25c717f1034eaf0c7ed5924268a3"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BatchAdminModule.html" data-type="entity-link" >BatchAdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-BatchAdminModule-dfc9ade0fce26b7750638331c935b7898c96261e2cd78ff2fc41019e8af2c78b330d66f25c7a7be9706798691e12c026737baf9ec374fa42945cd74370ff3549"' : 'data-bs-target="#xs-components-links-module-BatchAdminModule-dfc9ade0fce26b7750638331c935b7898c96261e2cd78ff2fc41019e8af2c78b330d66f25c7a7be9706798691e12c026737baf9ec374fa42945cd74370ff3549"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BatchAdminModule-dfc9ade0fce26b7750638331c935b7898c96261e2cd78ff2fc41019e8af2c78b330d66f25c7a7be9706798691e12c026737baf9ec374fa42945cd74370ff3549"' :
                                            'id="xs-components-links-module-BatchAdminModule-dfc9ade0fce26b7750638331c935b7898c96261e2cd78ff2fc41019e8af2c78b330d66f25c7a7be9706798691e12c026737baf9ec374fa42945cd74370ff3549"' }>
                                            <li class="link">
                                                <a href="components/FormulaItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormulaItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GlobalParamComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GlobalParamComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BatchAdminRoutingModule.html" data-type="entity-link" >BatchAdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BatchModule.html" data-type="entity-link" >BatchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-BatchModule-9a3cd4d83616ee2a23f79d60f4474d01bfd3f8239789939878531ea254f216cae9f130f04312003e1360a665e9cf99e048a24c9133928eeb109e4cf11a1c88b7"' : 'data-bs-target="#xs-components-links-module-BatchModule-9a3cd4d83616ee2a23f79d60f4474d01bfd3f8239789939878531ea254f216cae9f130f04312003e1360a665e9cf99e048a24c9133928eeb109e4cf11a1c88b7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BatchModule-9a3cd4d83616ee2a23f79d60f4474d01bfd3f8239789939878531ea254f216cae9f130f04312003e1360a665e9cf99e048a24c9133928eeb109e4cf11a1c88b7"' :
                                            'id="xs-components-links-module-BatchModule-9a3cd4d83616ee2a23f79d60f4474d01bfd3f8239789939878531ea254f216cae9f130f04312003e1360a665e9cf99e048a24c9133928eeb109e4cf11a1c88b7"' }>
                                            <li class="link">
                                                <a href="components/BatchDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BatchDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BatchViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BatchViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BilletDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BilletDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ByproductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ByproductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateBatchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateBatchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FakeBatchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FakeBatchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IngredientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IngredientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PhysicalInspectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhysicalInspectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProcessParameterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProcessParameterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QualityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QualityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResourceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResourceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ValidationFailedPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ValidationFailedPopupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BatchRoutingModule.html" data-type="entity-link" >BatchRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DevExtremeModule.html" data-type="entity-link" >DevExtremeModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomeModule-f0f13ea21919550ab417cd899222786d25e1584868339358e59a18c46d93d61cb8bde8049ba00d8dc8d2600981eec880a9b1a1454606db2e36c0e01159fb4094"' : 'data-bs-target="#xs-components-links-module-HomeModule-f0f13ea21919550ab417cd899222786d25e1584868339358e59a18c46d93d61cb8bde8049ba00d8dc8d2600981eec880a9b1a1454606db2e36c0e01159fb4094"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-f0f13ea21919550ab417cd899222786d25e1584868339358e59a18c46d93d61cb8bde8049ba00d8dc8d2600981eec880a9b1a1454606db2e36c0e01159fb4094"' :
                                            'id="xs-components-links-module-HomeModule-f0f13ea21919550ab417cd899222786d25e1584868339358e59a18c46d93d61cb8bde8049ba00d8dc8d2600981eec880a9b1a1454606db2e36c0e01159fb4094"' }>
                                            <li class="link">
                                                <a href="components/WelcomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WelcomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/PaginationParams.html" data-type="entity-link" >PaginationParams</a>
                            </li>
                            <li class="link">
                                <a href="classes/PhysicalInspection.html" data-type="entity-link" >PhysicalInspection</a>
                            </li>
                            <li class="link">
                                <a href="classes/ToasterType.html" data-type="entity-link" >ToasterType</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BatchMasterService.html" data-type="entity-link" >BatchMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GlobalService.html" data-type="entity-link" >GlobalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ItemMapService.html" data-type="entity-link" >ItemMapService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PhysicalInspectionService.html" data-type="entity-link" >PhysicalInspectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProcessParameterService.html" data-type="entity-link" >ProcessParameterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QualityResultService.html" data-type="entity-link" >QualityResultService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResourceService.html" data-type="entity-link" >ResourceService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/PBCPMAdminGuard.html" data-type="entity-link" >PBCPMAdminGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BatchDetailsDto.html" data-type="entity-link" >BatchDetailsDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BatchMaster.html" data-type="entity-link" >BatchMaster</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GlobalParam.html" data-type="entity-link" >GlobalParam</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IErrorResponse.html" data-type="entity-link" >IErrorResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPagination.html" data-type="entity-link" >IPagination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IResult.html" data-type="entity-link" >IResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemMapDto.html" data-type="entity-link" >ItemMapDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProcessParameter.html" data-type="entity-link" >ProcessParameter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QualityResult.html" data-type="entity-link" >QualityResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Resource.html" data-type="entity-link" >Resource</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});