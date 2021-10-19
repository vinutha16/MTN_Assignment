import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { LoginComponent } from "./login/login.component";
import { UserEffects } from "./state/user.effects";
import { UserReducer } from "./state/user.reducer";
import { USER_STATE_NAME } from "./state/user.selector";

export const routes:Routes=[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent}
]
@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        EffectsModule.forFeature([UserEffects]),
        StoreModule.forFeature(USER_STATE_NAME,UserReducer)]
})
export class UserModule{

}