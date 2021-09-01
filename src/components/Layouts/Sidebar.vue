<template>
    <div class="sidebar">
        <div class="sidebar__header">
            <span>Dashboard</span>
        </div>

        <div class="sidebar_menu">
            <ul class="sidebar_menu__links">
                <router-link to="/homepage" class="link">
                <li class="sidebar_menu__links__link">
                    <v-icon class="sidebar_menu__links__link__icon">mdi-home-outline</v-icon>
                    <span class="sidebar_menu__links__link__text">Ana Sayfa</span>
                </li>
                </router-link>

                <router-link to="/silolar" class="link">
                <li class="sidebar_menu__links__link">
                    <v-icon class="sidebar_menu__links__link__icon">mdi-silo</v-icon>
                    <span class="sidebar_menu__links__link__text">Silolar</span>
                </li>
                </router-link>

                <router-link to="/uretim" class="link">
                <li class="sidebar_menu__links__link">
                    <v-icon class="sidebar_menu__links__link__icon">mdi-chart-box-outline</v-icon>
                    <span class="sidebar_menu__links__link__text">Üretim</span>
                </li>
                </router-link>

                <router-link to="/enerji" class="link">
                <li class="sidebar_menu__links__link">
                    <v-icon class="sidebar_menu__links__link__icon">mdi-power-plug-outline</v-icon>
                    <span class="sidebar_menu__links__link__text">Enerji</span>
                </li>
                </router-link>

                <router-link to="/ariza" class="link">
                <li class="sidebar_menu__links__link">
                    <v-icon class="sidebar_menu__links__link__icon">mdi-alert-circle-outline</v-icon>
                    <span class="sidebar_menu__links__link__text">Bakım Arıza</span>
                </li>
                </router-link>
            </ul>
        </div>
    </div>
</template>


<script>

</script>

<style lang="scss">
@import '../../scss/main.scss';

.sidebar{
    height: 100%;
    position: sticky;
    background: $backgroundsidebar;
    &__header{
        color: #fff;
        margin-top: 50px;
        margin-left: 50%;
        transform: translateX(-50%);
    }
}
.sidebar_menu {
    margin-top: 50px;
    &__links {
        list-style-type: none;
        color: $textcolor;
        max-width: 90%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &__link {
            display:flex;
            padding: 10px;
            margin-top: 4px;
            transition: 0.3s all ease-in-out;
            &__icon{
                color: $textcolor !important;
                font-size: 20px !important;
            }
            &__text {
                margin-left: 5%;
                font-size: 16px;
                font-weight: 300;
                letter-spacing: 1px;
            }
        }
        &__link:hover{
        margin-left: 2%;
        border-radius: 5px;
        cursor: pointer;
        }
        &__link:active {
        background-color: $linkactive;
        }
    }
}
.link {
    text-decoration: none;
    color:$textcolor !important;
    transform: translateX(-10%);
}

.router-link-active {
    background-color: $linkactive;
    border-radius: 4px;
    box-shadow: $linkactive 0px 5px 20px;
}
</style>