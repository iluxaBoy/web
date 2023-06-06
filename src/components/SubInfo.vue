<template>
  <div class="container">
    <v-card class="rounded-xl">
        <v-card-title class="pb-0 font-weight-medium">Длительность подписки</v-card-title>
            <div class="main d-flex" lg="2">
                <fa class="fa mt-3" icon="fa-solid fa-check"/>
                <div>
                    <v-card-title class="mb-2 font-weight-medium">Расчётный период удержания BNB</v-card-title>
                    <v-row class="mb-0 font-weight-medium">
                        <v-text>2023-09-08</v-text>
                        <v-divider class="mx-3" vertical></v-divider>
                        <v-text>03:00</v-text>
                    </v-row>
                    <v-card-text class="text font-weight-medium text-medium-emphasis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat tempus risus, eu cursus urna bibendum et. Vestibulum ligula mauris, pharetra non pretium in, scelerisque vitae risus`</v-card-text>
                </div>
            </div>
            <div class="main d-flex">
                <fa class="fa mt-3" icon="fa-solid fa-check"/>
                <div>
                    <v-card-title class="mb-2 font-weight-medium">Старт подписки:</v-card-title>
                    <v-row class="mb-0 font-weight-medium">
                        <v-text>2023-09-08</v-text>
                        <v-divider class="mx-3" vertical></v-divider>
                        <v-text>03:00</v-text>
                    </v-row>
                    <v-card-text class="text font-weight-medium text-medium-emphasis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat tempus risus, eu cursus urna bibendum et. Vestibulum ligula mauris, pharetra non pretium in, scelerisque vitae risus`</v-card-text>
                </div>
            </div>
            <div class="main d-flex">
                <fa class="fa mt-3" icon="fa-solid fa-check"/>
                <div>
                    <v-card-title class="mb-2 font-weight-medium">Расчётный период:</v-card-title>
                    <v-row class="mb-0 font-weight-medium">
                        <v-text>2023-09-08</v-text>
                        <v-divider class="mx-3" vertical></v-divider>
                        <v-text>03:00</v-text>
                    </v-row>
                    <v-card-text class="text font-weight-medium text-medium-emphasis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat tempus risus, eu cursus urna bibendum et. Vestibulum ligula mauris, pharetra non pretium in, scelerisque vitae risus`</v-card-text>
                </div>
            </div>
            <div class="main d-flex">
                <fa class="fa mt-3" icon="fa-solid fa-check"/>
                <div>
                    <v-card-title class="mb-2 font-weight-medium">Итоговое распределение токенов</v-card-title>
                    <v-row class="mb-0 font-weight-medium">
                        <v-text>2023-09-08</v-text>
                        <v-divider class="mx-3" vertical></v-divider>
                        <v-text>03:00</v-text>
                    </v-row> 
                    <v-card-text class="font-weight-medium text-medium-emphasis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat tempus risus, eu cursus urna bibendum et. Vestibulum ligula mauris, pharetra non pretium in, scelerisque vitae risus`</v-card-text>
                </div>
            </div>
    </v-card>
  </div>
</template>

<style scoped>
    .v-card{
        padding: 28px 64px 28px 40px;
    }
    .v-card .v-card-title{
        margin-bottom: 16px;
        font-size: 32px;
    }
    .main{
        margin-left: 64px;
        margin-top: 52px;
    }
    .main div{
        margin-left: 26px;
    }
    .main:first-of-type{
        margin-top: 0;
    }
    .main .v-card-title{
        padding-left: 0;
        font-size: 24px;
    }
    .v-row{
        margin-left: 0;
        font-size: 18px;
    }
    .v-card-text{
        padding-left: 0;
        font-size: 18px;
    }
    .fa{
        padding: 12px 15px;
        font-size: 38px;
        border-radius: 100%;
        background-color: #FFF8DB;
        color: #fedc4a;
    }
    @media (max-width: 1100px) {
        .v-card{
            display: flex;
            flex-direction: column;
            padding: 16px 12px;
        }
        .v-card .v-card-title{
            margin-bottom: 0px;
            font-size: 20px;
        }
        .main{
            margin: 0;
            margin-left: 10px;
        }
        .main div{
            margin-left: 7px;
        }
        .main .v-card-title{
            font-size: 16px;
        }
        .v-row{
            font-size: 12px;
        }
        .v-card-text{
            display: none;
        }
        .fa{
            padding: 7px 7px;
            font-size: 20px;
        }
    }
</style>