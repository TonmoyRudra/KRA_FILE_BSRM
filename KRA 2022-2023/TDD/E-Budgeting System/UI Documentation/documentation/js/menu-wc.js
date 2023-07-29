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
                    <a href="index.html" data-type="index-link">e-budgeting-ui documentation</a>
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
                                            'data-bs-target="#components-links-module-AppModule-f9c46aa16ad3b9759a719695238c36dbf65d31bbb5de62e2a1011e40ad0d743e153dede84388b6715221ecc62d60ae23f964f03021788d1d277d161ae432294a"' : 'data-bs-target="#xs-components-links-module-AppModule-f9c46aa16ad3b9759a719695238c36dbf65d31bbb5de62e2a1011e40ad0d743e153dede84388b6715221ecc62d60ae23f964f03021788d1d277d161ae432294a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f9c46aa16ad3b9759a719695238c36dbf65d31bbb5de62e2a1011e40ad0d743e153dede84388b6715221ecc62d60ae23f964f03021788d1d277d161ae432294a"' :
                                            'id="xs-components-links-module-AppModule-f9c46aa16ad3b9759a719695238c36dbf65d31bbb5de62e2a1011e40ad0d743e153dede84388b6715221ecc62d60ae23f964f03021788d1d277d161ae432294a"' }>
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
                                            'data-bs-target="#components-links-module-AuthModule-51c553c039cf0d26e9b2f42044118722e58d279bafea3223414d833a3bc1a0ed358d25566d0705fd28224ddb5d5c09cf64fe4f5b33cdd5e14602e69cfb8b17bb"' : 'data-bs-target="#xs-components-links-module-AuthModule-51c553c039cf0d26e9b2f42044118722e58d279bafea3223414d833a3bc1a0ed358d25566d0705fd28224ddb5d5c09cf64fe4f5b33cdd5e14602e69cfb8b17bb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-51c553c039cf0d26e9b2f42044118722e58d279bafea3223414d833a3bc1a0ed358d25566d0705fd28224ddb5d5c09cf64fe4f5b33cdd5e14602e69cfb8b17bb"' :
                                            'id="xs-components-links-module-AuthModule-51c553c039cf0d26e9b2f42044118722e58d279bafea3223414d833a3bc1a0ed358d25566d0705fd28224ddb5d5c09cf64fe4f5b33cdd5e14602e69cfb8b17bb"' }>
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
                                <a href="modules/CapitalBudgetModule.html" data-type="entity-link" >CapitalBudgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CapitalBudgetModule-f2330d75f535b1812e4cf80add54854ddfe9f0c573a9a5186b0a4e79725347284a68ce02b984924fd771dc40749dd7d77fb287259d1c994e98278b2c3b75cc21"' : 'data-bs-target="#xs-components-links-module-CapitalBudgetModule-f2330d75f535b1812e4cf80add54854ddfe9f0c573a9a5186b0a4e79725347284a68ce02b984924fd771dc40749dd7d77fb287259d1c994e98278b2c3b75cc21"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CapitalBudgetModule-f2330d75f535b1812e4cf80add54854ddfe9f0c573a9a5186b0a4e79725347284a68ce02b984924fd771dc40749dd7d77fb287259d1c994e98278b2c3b75cc21"' :
                                            'id="xs-components-links-module-CapitalBudgetModule-f2330d75f535b1812e4cf80add54854ddfe9f0c573a9a5186b0a4e79725347284a68ce02b984924fd771dc40749dd7d77fb287259d1c994e98278b2c3b75cc21"' }>
                                            <li class="link">
                                                <a href="components/CapitalBudgetAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CapitalBudgetAddComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CapitalBudgetRoutingModule.html" data-type="entity-link" >CapitalBudgetRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CommonBudgetModule.html" data-type="entity-link" >CommonBudgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CommonBudgetModule-cdb404b1caf5d49b8afaf7bd68740a7f52f055c669959c3eacba24622447c60af156c877161a13db843ff2f96a06639a76968fe494892ac2d340c5328ba6dd4b"' : 'data-bs-target="#xs-components-links-module-CommonBudgetModule-cdb404b1caf5d49b8afaf7bd68740a7f52f055c669959c3eacba24622447c60af156c877161a13db843ff2f96a06639a76968fe494892ac2d340c5328ba6dd4b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CommonBudgetModule-cdb404b1caf5d49b8afaf7bd68740a7f52f055c669959c3eacba24622447c60af156c877161a13db843ff2f96a06639a76968fe494892ac2d340c5328ba6dd4b"' :
                                            'id="xs-components-links-module-CommonBudgetModule-cdb404b1caf5d49b8afaf7bd68740a7f52f055c669959c3eacba24622447c60af156c877161a13db843ff2f96a06639a76968fe494892ac2d340c5328ba6dd4b"' }>
                                            <li class="link">
                                                <a href="components/CommonBdgtAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonBdgtAddComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommonBudgetRoutingModule.html" data-type="entity-link" >CommonBudgetRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DevExtremeModule.html" data-type="entity-link" >DevExtremeModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExpenseModule.html" data-type="entity-link" >ExpenseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ExpenseModule-1e4d47dca01979eeccec87886736c4fcccfee1987936e5e4b294a7be2c31ac09ac222fab6031f0e1dd68813d3f1e2141464441c034264aaac0f74e1bd1f50e99"' : 'data-bs-target="#xs-components-links-module-ExpenseModule-1e4d47dca01979eeccec87886736c4fcccfee1987936e5e4b294a7be2c31ac09ac222fab6031f0e1dd68813d3f1e2141464441c034264aaac0f74e1bd1f50e99"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExpenseModule-1e4d47dca01979eeccec87886736c4fcccfee1987936e5e4b294a7be2c31ac09ac222fab6031f0e1dd68813d3f1e2141464441c034264aaac0f74e1bd1f50e99"' :
                                            'id="xs-components-links-module-ExpenseModule-1e4d47dca01979eeccec87886736c4fcccfee1987936e5e4b294a7be2c31ac09ac222fab6031f0e1dd68813d3f1e2141464441c034264aaac0f74e1bd1f50e99"' }>
                                            <li class="link">
                                                <a href="components/ExpenseAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExpenseAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExpenseListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExpenseListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExpenseRoutingModule.html" data-type="entity-link" >ExpenseRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomeModule-4c06c9f4e6db441cf0fc5ed12b98f77df9d08ee08de769f15143326b9afc6eafa000fa28988da702186dbea3e37ba35644e59508d947bfda961378b26dd29097"' : 'data-bs-target="#xs-components-links-module-HomeModule-4c06c9f4e6db441cf0fc5ed12b98f77df9d08ee08de769f15143326b9afc6eafa000fa28988da702186dbea3e37ba35644e59508d947bfda961378b26dd29097"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-4c06c9f4e6db441cf0fc5ed12b98f77df9d08ee08de769f15143326b9afc6eafa000fa28988da702186dbea3e37ba35644e59508d947bfda961378b26dd29097"' :
                                            'id="xs-components-links-module-HomeModule-4c06c9f4e6db441cf0fc5ed12b98f77df9d08ee08de769f15143326b9afc6eafa000fa28988da702186dbea3e37ba35644e59508d947bfda961378b26dd29097"' }>
                                            <li class="link">
                                                <a href="components/BudgetListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BudgetListComponent</a>
                                            </li>
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
                                <a href="modules/MainModule.html" data-type="entity-link" >MainModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MainRoutingModule.html" data-type="entity-link" >MainRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PbcpmModule.html" data-type="entity-link" >PbcpmModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PbcpmModule-d01dcf85880fc27753e72f2dfaf6414b891b7cf1380703b786a82b70448efb0398453107ffb8c4cef86355455d0bec24fda160c3be1c1a06737d7691e82ce986"' : 'data-bs-target="#xs-components-links-module-PbcpmModule-d01dcf85880fc27753e72f2dfaf6414b891b7cf1380703b786a82b70448efb0398453107ffb8c4cef86355455d0bec24fda160c3be1c1a06737d7691e82ce986"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PbcpmModule-d01dcf85880fc27753e72f2dfaf6414b891b7cf1380703b786a82b70448efb0398453107ffb8c4cef86355455d0bec24fda160c3be1c1a06737d7691e82ce986"' :
                                            'id="xs-components-links-module-PbcpmModule-d01dcf85880fc27753e72f2dfaf6414b891b7cf1380703b786a82b70448efb0398453107ffb8c4cef86355455d0bec24fda160c3be1c1a06737d7691e82ce986"' }>
                                            <li class="link">
                                                <a href="components/AssetCatagoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssetCatagoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssetsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssetsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CalenderAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalenderAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CalenderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalenderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommonBudgetTypeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonBudgetTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InitBudgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InitBudgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoaAssignmentCommonBdgtComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoaAssignmentCommonBdgtComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoaAssignmentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoaAssignmentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrgSetupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrgSetupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserSettingAssignmentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserSettingAssignmentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PbcpmRoutingModule.html" data-type="entity-link" >PbcpmRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductionBudgetModule.html" data-type="entity-link" >ProductionBudgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProductionBudgetModule-cb94014c579b4304091e259aa889cc3b60764f253bb7f95a8d452a3369894e167756925b6295d7415bff7ba39aefa0466320f9fa1b7a36ad5fd5b60731ff3239"' : 'data-bs-target="#xs-components-links-module-ProductionBudgetModule-cb94014c579b4304091e259aa889cc3b60764f253bb7f95a8d452a3369894e167756925b6295d7415bff7ba39aefa0466320f9fa1b7a36ad5fd5b60731ff3239"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductionBudgetModule-cb94014c579b4304091e259aa889cc3b60764f253bb7f95a8d452a3369894e167756925b6295d7415bff7ba39aefa0466320f9fa1b7a36ad5fd5b60731ff3239"' :
                                            'id="xs-components-links-module-ProductionBudgetModule-cb94014c579b4304091e259aa889cc3b60764f253bb7f95a8d452a3369894e167756925b6295d7415bff7ba39aefa0466320f9fa1b7a36ad5fd5b60731ff3239"' }>
                                            <li class="link">
                                                <a href="components/ProductionBdgtAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductionBdgtAddComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductionBudgetRoutingModule.html" data-type="entity-link" >ProductionBudgetRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RmpmBudgetModule.html" data-type="entity-link" >RmpmBudgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RmpmBudgetModule-565af9c7a962328014c22c3027889cd3f2b4a431f92895bb2deaa83497610fa630d788e37ce2ae38db37e4901b714c133dbcf00bb0e17d65b584acb7959ba621"' : 'data-bs-target="#xs-components-links-module-RmpmBudgetModule-565af9c7a962328014c22c3027889cd3f2b4a431f92895bb2deaa83497610fa630d788e37ce2ae38db37e4901b714c133dbcf00bb0e17d65b584acb7959ba621"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RmpmBudgetModule-565af9c7a962328014c22c3027889cd3f2b4a431f92895bb2deaa83497610fa630d788e37ce2ae38db37e4901b714c133dbcf00bb0e17d65b584acb7959ba621"' :
                                            'id="xs-components-links-module-RmpmBudgetModule-565af9c7a962328014c22c3027889cd3f2b4a431f92895bb2deaa83497610fa630d788e37ce2ae38db37e4901b714c133dbcf00bb0e17d65b584acb7959ba621"' }>
                                            <li class="link">
                                                <a href="components/RmpmBdgtAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RmpmBdgtAddComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RmpmBudgetRoutingModule.html" data-type="entity-link" >RmpmBudgetRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-d9b024fea4dc8c526c3826c592e1776dadb2bba2c93bba7d0f5b21fcf72e6cee325d49d4ea5a9198b512a0b88197cbb7126ad7f6cb5e0abaa03bf4043bbe8623"' : 'data-bs-target="#xs-components-links-module-SharedModule-d9b024fea4dc8c526c3826c592e1776dadb2bba2c93bba7d0f5b21fcf72e6cee325d49d4ea5a9198b512a0b88197cbb7126ad7f6cb5e0abaa03bf4043bbe8623"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-d9b024fea4dc8c526c3826c592e1776dadb2bba2c93bba7d0f5b21fcf72e6cee325d49d4ea5a9198b512a0b88197cbb7126ad7f6cb5e0abaa03bf4043bbe8623"' :
                                            'id="xs-components-links-module-SharedModule-d9b024fea4dc8c526c3826c592e1776dadb2bba2c93bba7d0f5b21fcf72e6cee325d49d4ea5a9198b512a0b88197cbb7126ad7f6cb5e0abaa03bf4043bbe8623"' }>
                                            <li class="link">
                                                <a href="components/ActionWorkflowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActionWorkflowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UploaderFromExcelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploaderFromExcelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkflowActionLogHistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkflowActionLogHistoryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StoreSpareBudgetModule.html" data-type="entity-link" >StoreSpareBudgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-StoreSpareBudgetModule-4c54773ae0537441f7452d6a1f41205669cc64624a002151b7c444be316e6009ba1147ee9a8a05b7758cd3fceef1eba6df65d1190a39e6d7ce6808937259c569"' : 'data-bs-target="#xs-components-links-module-StoreSpareBudgetModule-4c54773ae0537441f7452d6a1f41205669cc64624a002151b7c444be316e6009ba1147ee9a8a05b7758cd3fceef1eba6df65d1190a39e6d7ce6808937259c569"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StoreSpareBudgetModule-4c54773ae0537441f7452d6a1f41205669cc64624a002151b7c444be316e6009ba1147ee9a8a05b7758cd3fceef1eba6df65d1190a39e6d7ce6808937259c569"' :
                                            'id="xs-components-links-module-StoreSpareBudgetModule-4c54773ae0537441f7452d6a1f41205669cc64624a002151b7c444be316e6009ba1147ee9a8a05b7758cd3fceef1eba6df65d1190a39e6d7ce6808937259c569"' }>
                                            <li class="link">
                                                <a href="components/StoreSpareAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StoreSpareAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StoreSpareFilesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StoreSpareFilesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StoreSpareBudgetRoutingModule.html" data-type="entity-link" >StoreSpareBudgetRoutingModule</a>
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
                                <a href="classes/ToasterType.html" data-type="entity-link" >ToasterType</a>
                            </li>
                            <li class="link">
                                <a href="classes/workflowModel.html" data-type="entity-link" >workflowModel</a>
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
                                    <a href="injectables/BudgetService.html" data-type="entity-link" >BudgetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CapitalBdgtService.html" data-type="entity-link" >CapitalBdgtService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommonBdgtService.html" data-type="entity-link" >CommonBdgtService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommonSettingService.html" data-type="entity-link" >CommonSettingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExpenseService.html" data-type="entity-link" >ExpenseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GlobalService.html" data-type="entity-link" >GlobalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PbcpmService.html" data-type="entity-link" >PbcpmService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductionBdgtService.html" data-type="entity-link" >ProductionBdgtService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RmpmBdgtService.html" data-type="entity-link" >RmpmBdgtService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StoreSpareBdgtService.html" data-type="entity-link" >StoreSpareBdgtService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploadService.html" data-type="entity-link" >UploadService</a>
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
                                <a href="guards/BudgetGuard.html" data-type="entity-link" >BudgetGuard</a>
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
                                <a href="interfaces/BudgetFlowMaster.html" data-type="entity-link" >BudgetFlowMaster</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CapitalBdgtDto.html" data-type="entity-link" >CapitalBdgtDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CapitalDetailsDto.html" data-type="entity-link" >CapitalDetailsDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommonBdgtDto.html" data-type="entity-link" >CommonBdgtDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EbgtUserSettingDto.html" data-type="entity-link" >EbgtUserSettingDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EBGTV2RMPMCCT.html" data-type="entity-link" >EBGTV2RMPMCCT</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExpenseDto.html" data-type="entity-link" >ExpenseDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICalendar.html" data-type="entity-link" >ICalendar</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IErrorResponse.html" data-type="entity-link" >IErrorResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemRatio.html" data-type="entity-link" >ItemRatio</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NOADTO.html" data-type="entity-link" >NOADTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NOAForCommonDTO.html" data-type="entity-link" >NOAForCommonDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductionBdgtDto.html" data-type="entity-link" >ProductionBdgtDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RMPMBdgtDto.html" data-type="entity-link" >RMPMBdgtDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StoreSpareBdgtDto.html" data-type="entity-link" >StoreSpareBdgtDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkFlow.html" data-type="entity-link" >WorkFlow</a>
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