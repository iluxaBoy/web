<template>
  <div class="container">
    <v-card class="rounded-xl">
        <div class="top-sec d-flex align-center justify-space-between">
            <div class="d-flex align-center">
            <v-card-actions>
                <button class="arrow">
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5L7.5 9.33013V0.669873L0 5ZM6.75 5.75H18V4.25H6.75V5.75Z" fill="#757575"/>
                    </svg>
                </button>
            </v-card-actions>

            <v-divider vertical></v-divider>

            <v-card-subtitle class="sub-text ml-12">
            LAUNCHPAD / DETAILS / PROJECT / 1
            </v-card-subtitle>
            </div>
            <div>
            <v-text class="card-text font-weight-medium">
                Open Campus
            </v-text>
            </div>
            <v-card-title class="card-title text-white">Open Capmus</v-card-title>
            <div class="pending text-white rounded-lg font-weight-light">PENDING</div>
        </div>
        <div class="blur overflow-hidden">
        <v-img
            class="top-img"
            lazy-src="@\assets\image2.png"
            cover
        />
        </div>
    </v-card>
  </div>
</template>

<style scoped>
    .top-sec{
        position: relative;
        padding: 9px 40px 9px 48px;
        height: 92px;
    }
    .top-sec .sub-text{
        font-size: 20px;
    }
    .top-sec .card-text{
        font-size: 18px;
    }
    .blur{
        background-color: #4C1920;
    }
    .top-img{
        height: 248px;
        filter: blur(18px);
    }
    .card-title{
        position: absolute;
        left: 20px;
        top: 108px;
        font-size: 32px;
        z-index: 3;
    }
    .arrow{
        margin-right: 48px;
        width: 34px;
        height: 34px;
        border: solid 3px #757575;
        border-radius: 100%;
    }
    .pending{
        position: absolute;
        padding: 5px 20px;
        background-color: #2196F3;
        right: 40px;
        top: 118px;
        z-index: 3;
    }
    @media (max-width: 860px) {
        .top-sec{
            padding: 9px 22px;
            height: 63px;
        }
        .top-img{
            height: 164px;
        }
        .card-title{
            left: 0;
            top: 60px;
        }
        .sub-text{
            display: none;
        }
        .card-title{
            font-size: 20px;
        }
        .arrow{
            margin-right: 23px;
        }
        .pending{
            padding: 3px 18px;
            right: 15px;
            top: 70px;
        }
    }
</style>