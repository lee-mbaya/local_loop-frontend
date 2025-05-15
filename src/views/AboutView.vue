<template>
  <v-container class="py-12 px-6" fluid>
    
    <v-row justify="center" class="mb-16">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="display-2 font-weight-bold mb-6">Our Mission</h1>
        <p class="text-h6 text-grey-darken-1">
          Local Loop exists to strengthen community connections and build a resilient local economy through our unique token system and business network.
        </p>
      </v-col>
    </v-row>

   
    <v-row class="mb-20" align="center">
      <v-col cols="12" lg="6">
        <h2 class="text-h4 font-weight-bold mb-4">Our Story</h2>
        <div class="text-body-1">
          <p class="mb-4">
            Local Loop began in 2025 when a person with a vision of elevating its community </p>
          <p class="mb-4">
            I saw how much money was leaving our community through online shopping and chain stores...
          </p>
          <p>
            What started as a small pilot with just 10 businesses has grown into a vibrant network of over 50 local establishments and still counting, we hope to have hundreds of thousands more because it only makes sense as a community to support eachother.
          </p>
        </div>
      </v-col>
      <v-col cols="12" lg="6">
        <v-img src="/placeholder.svg" height="320" class="rounded-lg" cover />
      </v-col>
    </v-row>

    <!-- Core Values -->
    <v-row class="mb-20 text-center">
      <v-col cols="12">
        <h2 class="text-h4 font-weight-bold mb-12">Our Core Values</h2>
      </v-col>
      <v-col
        v-for="(value, index) in values"
        :key="index"
        cols="12"
        md="6"
        lg="3"
      >
        <v-card class="pa-4">
          <div class="mb-4 d-flex align-center justify-center rounded-circle" style="background-color: rgba(234, 88, 12, 0.1); width: 48px; height: 48px;">
            <v-icon color="deep-orange-darken-2" size="28">{{ value.icon }}</v-icon>
          </div>
          <h3 class="subtitle-1 font-weight-bold mb-2">{{ value.title }}</h3>
          <p class="text-body-2 text-grey-darken-1">{{ value.description }}</p>
        </v-card>
      </v-col>
    </v-row>

    
    <v-row class="mb-20 text-center">
      <v-col cols="12">
        <h2 class="text-h4 font-weight-bold mb-12">Meet Our Team</h2>
      </v-col>
      <v-col
        v-for="(member, index) in teamMembers"
        :key="index"
        cols="12"
        md="6"
        lg="3"
      >
        <v-avatar size="120" class="mb-4">
          <v-img :src="member.image" />
        </v-avatar>
        <h3 class="font-weight-bold mb-1">{{ member.name }}</h3>
        <p class="text-deep-orange-darken-2 mb-2">{{ member.title }}</p>
        <p class="text-body-2 text-grey-darken-1">{{ member.bio }}</p>
      </v-col>
    </v-row>

    
    <v-row class="mb-20 text-center">
      <v-col cols="12">
        <h2 class="text-h4 font-weight-bold mb-12">Our Impact</h2>
      </v-col>
      <v-col
        v-for="(impact, index) in impacts"
        :key="index"
        cols="12"
        md="4"
      >
        <v-card class="py-6">
          <h3 class="display-1 font-weight-bold text-deep-orange-darken-2 mb-2">{{ impact.amount }}</h3>
          <p class="text-body-2 text-grey-darken-1">{{ impact.description }}</p>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mb-20" align="center">
      <v-col cols="12" lg="6">
        <v-img src="/placeholder.svg" height="320" class="rounded-lg" cover />
      </v-col>
      <v-col cols="12" lg="6">
        <h3 class="text-h5 font-weight-bold mb-4">Success Stories</h3>
        <ul class="text-body-1">
          <li v-for="(story, i) in successStories" :key="i" class="mb-2">
            • {{ story }}
          </li>
        </ul>
      </v-col>
    </v-row>

    <!-- Partners -->
    <v-row class="mb-20 text-center">
      <v-col cols="12">
        <h2 class="text-h4 font-weight-bold mb-12">Our Partners</h2>
      </v-col>
      <v-col
        v-for="n in 8"
        :key="n"
        cols="6"
        md="3"
      >
        <v-sheet height="96" class="bg-grey-lighten-4 rounded d-flex align-center justify-center">
          <v-img src="/placeholder.svg" max-height="64" />
        </v-sheet>
      </v-col>
    </v-row>

    <!-- Call to Action -->
    <v-sheet class="py-12 text-center rounded-lg" color="deep-orange-darken-2">
      <h2 class="text-h4 font-weight-bold mb-4 text-white">Join Our Mission</h2>
      <p class="text-h6 text-white mb-8 mx-auto" style="max-width: 600px;">
        Whether you're a community member, local business owner, or potential partner, there are many ways to get involved with Local Loop.
      </p>
      <v-btn color="white" class="mr-4" text @click="$router.push('/contact')">Get in Touch</v-btn>
      <v-btn outlined color="white" @click="$router.push('/signup')">Sign Up Now</v-btn>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      values: [
        {
          title: "Community First",
          description: "We prioritize community wellbeing and connection.",
          icon: "mdi-account-group"
        },
        {
          title: "Local Economic Resilience",
          description: "Resources stay local, creating a strong economy.",
          icon: "mdi-store"
        },
        {
          title: "Environmental Sustainability",
          description: "Local economies reduce environmental impact.",
          icon: "mdi-leaf"
        },
        {
          title: "Inclusivity",
          description: "Accessible to all, regardless of background.",
          icon: "mdi-earth"
        }
      ],
      teamMembers: [
        {
          name: "lee mbaya",
          title: "Founder & Executive Director",
          bio: "Emma has over 15 years of experience in community development...",
          image: "/placeholder.svg"
        },
        {
          name: "lee mbaya",
          title: "Business Relations Director",
          bio: "Marcus works directly with local businesses...",
          image: "/placeholder.svg"
        },
        {
          name: "lee mbaya",
          title: "Community Engagement Manager",
          bio: "Sophia coordinates volunteer programs and events...",
          image: "/placeholder.svg"
        },
        {
          name: "lee mbaya",
          title: "Technology Lead",
          bio: "James oversees our token system and tech infrastructure...",
          image: "/placeholder.svg"
        }
      ],
      impacts: [
        { amount: "$125K", description: "Kept circulating locally via tokens" },
        { amount: "52", description: "Businesses in our network" },
        { amount: "3,500+", description: "Community token users" }
      ],
      successStories: [
        "Three new businesses opened via grants",
        "Markets grew from 8 to over 30 vendors",
        "22% revenue increase for member businesses",
        "Over 2,000 hours of volunteer service",
        "Lower carbon footprint through local buying"
      ]
    };
  }
};
</script>