<template>
  <div class="container">
    <v-card class="rounded-xl">
        <div class="top-sec">
            <v-row no-gutters class="mb-16">
                <v-col>
                    <v-card-title class="pt-0 font-weight-medium">Open Campus</v-card-title>
                    <v-card-text class="text-medium-emphasis text-body-1 font-weight-medium">A Web3 Education Protocol to tokenize educational content - first adopted by Tiny Tap</v-card-text>
                </v-col>
                <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.9856 1.25355C32.016 1.06856 31.9981 0.87876 31.9336 0.702914C31.8691 0.527067 31.7602 0.371274 31.6178 0.250949C31.4753 0.130623 31.3042 0.049937 31.1214 0.0168732C30.9386 -0.0161905 30.7504 -0.000485605 30.5754 0.0624338L0.708405 10.832C0.511534 10.9029 0.339626 11.0306 0.214035 11.1993C0.0884448 11.3679 0.0147063 11.5702 0.00197962 11.7808C-0.010747 11.9914 0.0380991 12.2012 0.14245 12.384C0.246802 12.5669 0.402059 12.7148 0.588937 12.8093L9.12237 17.1171C9.29054 17.2021 9.47797 17.2407 9.66567 17.2289C9.85337 17.2172 10.0347 17.1556 10.1912 17.0503L17.2739 12.2816L13.0349 17.6362C12.9427 17.7527 12.8754 17.8874 12.8374 18.0315C12.7994 18.1757 12.7915 18.3263 12.8142 18.4737C12.8368 18.6211 12.8896 18.7622 12.9691 18.8879C13.0486 19.0137 13.1531 19.1214 13.276 19.2042L26.0762 27.8199C26.2244 27.9194 26.3949 27.9798 26.5722 27.9958C26.7495 28.0117 26.9279 27.9826 27.0912 27.9111C27.2545 27.8395 27.3975 27.7279 27.5071 27.5863C27.6167 27.4447 27.6895 27.2777 27.7188 27.1005L31.9856 1.25355Z" fill="black" fill-opacity="0.5"/>
                </svg>
                <svg class="mx-9" width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34 3.29412C32.7486 3.87059 31.3996 4.24941 30.0019 4.43059C31.4321 3.55765 32.5373 2.17412 33.0574 0.510588C31.7084 1.33412 30.2132 1.91059 28.6367 2.24C27.3528 0.82353 25.5488 0 23.501 0C19.6816 0 16.5612 3.16235 16.5612 7.06588C16.5612 7.62588 16.6262 8.16941 16.74 8.68C10.9541 8.38353 5.8021 5.56706 2.37285 1.30118C1.77151 2.33882 1.43021 3.55765 1.43021 4.84235C1.43021 7.29647 2.64914 9.47059 4.53442 10.7059C3.3805 10.7059 2.30784 10.3765 1.3652 9.88235V9.93176C1.3652 13.3576 3.77056 16.2235 6.95602 16.8659C5.9333 17.1495 4.85962 17.189 3.81931 16.9812C4.26074 18.3853 5.12525 19.6138 6.29133 20.4942C7.4574 21.3746 8.86641 21.8626 10.3203 21.8894C7.8558 23.8666 4.80095 24.9353 1.65774 24.92C1.10516 24.92 0.552581 24.8871 0 24.8212C3.08795 26.8306 6.76099 28 10.6941 28C23.501 28 30.5382 17.2282 30.5382 7.88941C30.5382 7.57647 30.5382 7.28 30.522 6.96706C31.8872 5.97882 33.0574 4.72706 34 3.29412Z" fill="black" fill-opacity="0.5"/>
                </svg>
                <fa class="fa" icon="fa-solid fa-earth-europe"/>
            </v-row>
        </div>
        <div class="mid-sec mb-15">
            <v-card-title class="text-h6 py-0 font-weight-medium mb-5">Project Introduction</v-card-title>
            <v-card-text class="text-body-1 font-weight-medium text-medium-emphasis">
                Open Campus Protocol is a web3 education protocol for tokenizing educational content by enabling teachers and creators to monetize the content that they created. Its mission is to ensure teachers’ contribution to the society is recognised and provide a global, alternative education system for learners worldwide.
                TinyTap is Open Campus Protocol’s first adopter, it is known for its no-code authoring platform that has produced over 250k interactive lessons to date. It is a top 10 grossing kids mobile application on the App Store and Google Play with 9 million+ families and 100k+ content creators.
                EDU is the native token of the Open Campus ecosystem (including TinyTap), where EDU can be used on the Open Campus platform and participate in Open Campus DAO governance proposals to guide the direction of the protocol development.
            </v-card-text>
        </div>
        <v-card-title class="text-h6 py-0 font-weight-medium mb-8">Open Campus Token Sale and Economics</v-card-title>
        <v-timeline
            truncate-line="both"
            >
            <v-timeline-item
            dot-color="yellow-darken-1"
            size="xs-small"
            fill-dot
            >
                <template v-slot:opposite>
                    <v-text class="text-right">Hard Cap</v-text> 
                </template>
                <v-text class="font-weight-bold">2.500.000 USD</v-text>
            </v-timeline-item>

            <v-timeline-item
            dot-color="yellow-darken-1"
            size="xs-small"
            fill-dot
            >
                <template v-slot:opposite>
                    <v-text class="font-weight-bold">1.000.000.000 EDU</v-text>
                </template>
                <v-text class="text-right">Total Token Supply</v-text> 
            </v-timeline-item>

            <v-timeline-item
            dot-color="yellow-darken-1"
            size="xs-small"
            fill-dot
            >
                <template v-slot:opposite>
                    <v-text class="text-right">Initial Circulating Supply</v-text> 
                </template>
                <v-text class="font-weight-bold">14.50% of Total Token Supply</v-text>
            </v-timeline-item>

            <v-timeline-item
            dot-color="yellow-darken-1"
            size="xs-small"
            fill-dot
            >
                <template v-slot:opposite>
                <v-text class="font-weight-bold">0.05 USD (price in BNB will be determined prior to the start of subscription)</v-text>
                </template>
                    <v-text class="text-right">Public Sale Token Price</v-text> 
            </v-timeline-item>

            <v-timeline-item
            dot-color="yellow-darken-1"
            size="xs-small"
            fill-dot
            >
                <template v-slot:opposite>
                    <v-text class="text-right">Tokens Offered</v-text> 
                </template>
                <v-text class="font-weight-bold">50.000.000 EDU</v-text>
            </v-timeline-item>

            <v-timeline-item
            dot-color="yellow-darken-1"
            size="xs-small"
            fill-dot
            >
                <template v-slot:opposite>
                    <v-text class="font-weight-bold">15.000 USD (price in BNB will be determined prior to
                    the start of subscription)</v-text>
                </template>
                <v-text class="text-right">Hard Cap Per User</v-text> 
            </v-timeline-item>

            <v-timeline-item
            dot-color="yellow-darken-1"
            size="xs-small"
            fill-dot
            >
                <template v-slot:opposite>
                    <v-text class="text-right">Token Sale Vesting Period</v-text> 
                </template>
                <v-text class="font-weight-bold">No lockup</v-text>
            </v-timeline-item>

            <v-timeline-item
            dot-color="yellow-darken-1"
            size="xs-small"
            fill-dot
            >
                <template v-slot:opposite>
                    <v-text class="font-weight-bold">TRC20</v-text>
                </template>
                <v-text class="text-right">Token Type</v-text>
            </v-timeline-item>

            <v-timeline-item
            dot-color="yellow-darken-1"
            size="xs-small"
            fill-dot
            >
                <template v-slot:opposite>
                    <v-text class="text-right">Tokens Offered</v-text> 
                </template>
                <v-text class="font-weight-bold">After the end of token sale</v-text>
            </v-timeline-item>
        </v-timeline>
    </v-card>
  </div>
</template>

<style scoped>
    .v-card{
        padding: 28px 40px 64px;
    }
    .v-row .v-card-title{
        font-size: 32px;
        margin-bottom: 12px;
    }
    .fa{
        color: #808080;
        font-size: 30px;
    }
    .v-timeline{
        font-size: 16px;
        max-width: 659px;
        margin-left: 350px;
    }
    @media (max-width: 1280px) {
        .v-timeline{
            margin-left: 245px;
            max-width: 520px;
        }
        .d{
            padding: 0;
            margin: 0;
        }
    }
    @media (max-width: 1100px) {
        .v-card{
            padding: 16px 12px;
        }
        .v-timeline{
            font-size: 14px;
            margin: auto;
            max-width: 314px;
        }
        .v-row .v-card-title{
            font-size: 20px;
        }
        svg{
            display: none;
        }
    }
</style>