<template>
  <div class="container">
    <v-card class="main-card rounded-xl">
        <div class="top-cont d-flex">
            <div class="img-box">
                <v-img
                    class="block"
                    src="@/assets/image4.png"
                    lazy-src="@/assets/image4.png"
                />
            </div>
            <div class="text-cont">
                <v-card-title class="title font-weight-bold mb-5 pa-0">Open Campus</v-card-title>
                <v-card-text class="subtitle pa-0 mb-9">A Web3 Education Protocol to tokenize educational content - first adopted by Tiny Tap</v-card-text>
                <div class="links">
                    <div class="top">
                        <v-btn class="btn px-5 text-capitalize">
                            <fa 
                                class="mr-1"
                                icon="fa-solid fa-link"
                            />
                            Сайт
                        </v-btn>
                        <v-btn class="btn ml-4 px-5 text-capitalize">
                            <fa 
                                class="mr-1"
                                icon="fa-solid fa-file"
                            />
                            Whitepaper
                        </v-btn>
                    </div>
                    <div class="bott">
                        <v-btn class="btn ml-4 px-5 text-capitalize">
                            <fa 
                                class="mr-1"
                                icon="fa-solid fa-file-invoice"
                            />
                            Подробности
                        </v-btn>
                        <v-btn class="btn ml-4 px-5 text-capitalize">
                            <fa 
                                class="q mr-1"
                                icon="fa-solid fa-message"
                            />
                            FAQ
                        </v-btn>
                    </div>
                </div>
            </div>
        </div>
        <div class="bott-cont mt-13">
            <v-card class="card mr-6 px-5 py-3 pb-8">
                <v-card-title class="text-subtitle-1 font-weight-medium pa-0">Рассчитать максимальное вложение</v-card-title>
                <v-row class="ml-0 mt-0">
                    <v-text class="mr-3">2023-09-08</v-text>
                    <v-divider class="line" vertical></v-divider>
                    <v-text class="ml-3">03:00</v-text>
                </v-row>
            </v-card>

            <fa class="fa" icon="fa-solid fa-caret-right"/>
            
            <v-card class="card mx-6 px-5 py-3 pb-8">
                <v-card-title class="text-subtitle-1 font-weight-medium pa-0">Фиксация USDT</v-card-title>
                <v-row class="ml-0 mt-0 mr-2">
                    <v-text class="mr-3">2023-09-12</v-text>
                    <v-divider class="line" vertical></v-divider>
                    <v-text class="ml-3">14:00</v-text>
                </v-row>
            </v-card>

            <fa class="fa" icon="fa-solid fa-caret-right"/>
            
            <v-card class="card mx-6 px-5 py-3 pb-8">
                <v-card-title class="text-subtitle-1 font-weight-medium pa-0">Распределение токенов</v-card-title>
                <v-row class="ml-0 mt-0 mr-2">
                    <v-text class="mr-3">2023-09-15</v-text>
                    <v-divider class="line" vertical></v-divider>
                    <v-text class="ml-3">01:00</v-text>
                </v-row>
            </v-card>

            <fa class="fa" icon="fa-solid fa-caret-right"/>
            
            <v-card class="card ml-6  px-5 py-3 pb-8">
                <v-card-title class="text-subtitle-1 font-weight-medium pa-0">Распределение</v-card-title>
                <v-row class="ml-0 mt-0 mr-2">
                    <v-text class="mr-3">2023-09-16</v-text>
                    <v-divider class="line" vertical></v-divider>
                    <v-text class="ml-3">10:00</v-text>
                </v-row>
            </v-card>
        </div>
    </v-card>
  </div>
</template>

<style scoped>
    .v-card{
        padding: 28px 40px;
    }
    .block{
        width: 294px;
        height: 208px;
        border-radius: 15px;
    }
    .text-cont{
        margin: 32px;
    }
    .title{
        font-size: 40px;
    }
    .subtitle{
        font-size: 18px;
    }
    .links{
        min-width: 600px;
        display: flex;
    }
    .px-5{
        background-color: #DFDFDF;
        box-shadow: none;
        font-size: 16px;
        font-weight: 400;
    }
    .card{
        box-shadow: none;
        background-color: #FDD835;
        border-radius: 15px;
    }
    .line{
        margin-top: 3px;
        height: 19px;
    }
    .bott-cont{
        display: flex;
        align-items: center;
    }
    .q{
        margin-top: 1px;
    }
    .fa{
        font-size: 30px;
        color: #FDD835;
    }
    @media (max-width: 1280px) {
        .bott-cont{
            display: none;
        }
    }
    @media (max-width: 1100px) {
        .v-card{
            padding: 16px 12px;
            display: flex;
            justify-content: center;
        }
        .img-box{
            display: flex;
            align-items: center;
        }
        .text-cont{
            margin: 0;
        }
        .top-cont{
            width: 314px;
            flex-direction: column;
        }
        .links{
            min-width: auto;
            flex-direction: column;
        }
        .top{
            flex-direction:unset;
        }
        .bott{
            display: flex;
            flex-direction: row-reverse;
            margin-top: 18px;
        }
        .title{
            font-size: 24px;
        }
        .subtitle{
            display: none;
        }
        .btn{
            padding: 0;
            font-size: 14px;
        }
    }
</style>