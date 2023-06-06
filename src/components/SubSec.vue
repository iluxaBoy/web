<template>
  <div class="container">
    <v-card class="rounded-xl py-7">
        <v-row class="top-sec mx-auto d-flex">
            <v-col class="pa-0" cols="auto">
                <v-card-subtitle class="pa-0 mb-3">Тип:</v-card-subtitle>
                <v-card-text class="pa-0 font-weight-medium">Подписка</v-card-text>
            </v-col>
            <v-col class="pa-0" cols="auto">
                <v-card-subtitle class="pa-0 mb-3">Распределение:</v-card-subtitle>
                <v-card-text class="pa-0 font-weight-medium">50 000 000, 000 EDU</v-card-text>
            </v-col>
            <v-col class="pa-0" cols="auto">
                <v-card-subtitle class="pa-0 mb-3">Цена:</v-card-subtitle>
                <v-card-text class="pa-0 font-weight-medium">1 EDU = 0.00015281BNB</v-card-text>
            </v-col>
            <v-col class="pa-0" cols="auto">
                <v-card-subtitle class="pa-0 mb-3">Мин. вложения:</v-card-subtitle>
                <v-card-text class="pa-0 font-weight-medium">0.1 BNB</v-card-text>
            </v-col>
        </v-row>
        <div class="bott-sec">
            <div class="rounded mx-auto mt-7">
                <v-card-subtitle class="pa-0 text-center">Макс. на пользователя</v-card-subtitle>
                <v-card-text class="pa-0 font-weight-medium text-center">300000 EDU = 45,8429 BNB (=14294 USD)</v-card-text>
            </div>
        </div>
    </v-card>
  </div>
</template>

<style scoped>
    .v-card{
        padding: 0 40px;
    }
    .top-sec{
        justify-content: space-between;
        font-size: 18px;
    }
    .bott-sec div{
        padding: 8px 144px;
        max-width: 669px;
        background-color: #DFDFDF;
        font-size: 18px;
    }
    @media (max-width: 900px) {
        .v-card{
            padding: 0 12px;
        }
        .top-sec{
            flex-direction: column;
            align-content: center;
            font-size: 16px;
        }
        .v-col{
            margin-top: 26px;
        }
        .v-col:first-of-type{
            margin-top: 0;
        }
        .bott-sec div{
            padding: 9px 44px;
            max-width: 314px;
            font-size: 16px;
        }
    }
    @media (max-width: 570px) {
        .top-sec{
            align-content: flex-start;
        }
    }
</style>