<template>
    <v-container>
        <v-row dense>
            <v-col cols="12">
                <v-card
                    color="primary"
                    dark
                >
                    <v-card-title class="headline">New Leads</v-card-title>

                    <v-card-subtitle>10 New Leads</v-card-subtitle>

                    <v-card-actions>
                    <v-btn text>Go to New Leads</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card
                    color="primary"
                    dark
                >
                    <v-card-title class="headline">Total Leads</v-card-title>

                    <v-card-subtitle>10 New Leads</v-card-subtitle>

                    <v-card-actions>
                    <v-btn text>Go to New Leads</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            items: [
                {
                color: '#1F7087',
                src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                title: 'Supermodel',
                artist: 'Foster the People',
                },
                {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
                artist: 'Ellie Goulding',
                },
            ],
        }),
    }
</script>