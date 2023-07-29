var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"auth","pathMatch":"full"},{"path":"auth","loadChildren":"./component/auth/auth.module#AuthModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/component/auth/auth-routing.module.ts","module":"AuthRoutingModule","children":[{"path":"","redirectTo":"login","pathMatch":"full"},{"path":"login","component":"LoginComponent","canActivate":["AuthGuard"]}],"kind":"module"}],"module":"AuthModule"}]},{"path":"home","component":"MainLayoutComponent","loadChildren":"./component/main/home/home.module#HomeModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/component/main/home/home-routing.module.ts","module":"HomeRoutingModule","children":[{"path":"","component":"WelcomeComponent","canActivate":["AuthGuard"]}],"kind":"module"}],"module":"HomeModule"}]},{"path":"batch","component":"MainLayoutComponent","loadChildren":"./component/main/batch/batch.module#BatchModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/component/main/batch/batch-routing.module.ts","module":"BatchRoutingModule","children":[{"path":"","component":"WelcomeComponent","canActivate":["AuthGuard"]},{"path":"list","component":"CreateBatchComponent","canActivate":["AuthGuard"]},{"path":"fakeBatch","component":"FakeBatchComponent","canActivate":["AuthGuard"]}],"kind":"module"}],"module":"BatchModule"}]},{"path":"batchAdmin","component":"MainLayoutComponent","loadChildren":"./component/main/batch-admin/batch-admin.module#BatchAdminModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/component/main/batch-admin/batch-admin-routing.module.ts","module":"BatchAdminRoutingModule","children":[{"path":"","component":"WelcomeComponent","canActivate":["AuthGuard"]},{"path":"globalparam","component":"GlobalParamComponent","canActivate":["AuthGuard"]},{"path":"formulaItem","component":"FormulaItemComponent","canActivate":["AuthGuard"]}],"kind":"module"}],"module":"BatchAdminModule"}]},{"path":"**","redirectTo":"","pathMatch":"full"}],"kind":"module"}]}
