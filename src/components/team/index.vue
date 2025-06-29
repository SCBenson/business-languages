<template>
  <v-container class="px-8">
    <h1 class="text-custom-purple text-center">Our Team</h1>
    <v-row justify="center">
      <v-col cols="12">
        <v-card color="#f4b754" class="mx-auto my-4" :max-width="$vuetify.display.mdAndUp ? '1000px' : '100%'">
          <v-row class="my-2">
            <v-col
              v-for="(member, index) in data"
              :key="index"
              cols="6" lg="3"
              class="text-center"
            >
              <router-link
                style="text-decoration: none"
                :to="`/team/` + member.firstName"
              >
                <v-avatar size="100"
                  ><v-img :src="member.path"></v-img>
                </v-avatar>

                <v-card-title class="card-title text-custom-purple"
                  >{{ member.firstName }}<br />{{
                    member.lastName
                  }}</v-card-title
                >
                <v-card-subtitle>{{
                  member.role
                }}</v-card-subtitle></router-link
              ></v-col
            >
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const basePublicPath = import.meta.env.BASE_URL || "/";
const data = [
  {
    firstName: "Donal",
    lastName: "O'Riada",
    role: "Owner",
    path: `${basePublicPath}team/donal.webp`,
    description:
      "I won’t pretend I grew up wanting to be a Business English trainer; it was something I stumbled upon, having explored professions as diverse as shepherd, actor, roadie, salesman, professional baseball player (ask me), stage builder, etc. and I finally hit on the right career in 1999. Although my name translates from the Gaelic (Irish) as Ruler of the World, Son of Kings, I have managed to keep my feet on the ground, and this is apparent when you look at the team. I have gathered a pool of people who want to be experts in their field and pass on their knowledge. One of my role models is the former French (and Manchester United) footballer Eric Cantona. I saw an interviewer ask him what he considered as being his greatest action on a football pitch (soccer). He didn’t pick one of his countless goals, but rather a blind pass to a colleague (Denis Irwin, if you want to check it out) who scored. The interviewer couldn’t believe that goals which won cups and leagues were secondary to an assist, but Eric said, “you must trust your teammates”. And I do. I studied to become a Business English trainer in 1999 and spent the next few years gaining experience with various schools. I set up the company Business Languages Augsburg (now Business Languages Anywhere!) in October 2004 and three of the trainers who started with me all those years ago are still with me (despite everything). And I have always tried to add youth and ideas to the team, whenever possible, to complement the experience of the senior trainers. Our success has been that we have survived recessions, pandemics, financial crises, and we are still providing training at the top level. We have kept up with the times and ahead of the posse!",
  },
  {
    firstName: "Matthew",
    lastName: "Victor",
    role: "Manager",
    path: `${basePublicPath}team/matthew.webp`,
    description:
      "Matthew’s role in the company is many faceted. One of his most important roles is key account manager for companies such as Sortimo, MDT, manroland to name but a few. He liases with the responsible people in these companies to ensure we offer exactly what our clients need and is most beneficial to them. He is our technical expert and can boast a huge knowledge of technical terms and processes thanks to his American/German background and his mastery of both languages. Recently he has turned his talents to video making, including image and training videos for our customers as well as creating his own unique brand of seminar in conjunction with our customer requirements",
  },
  {
    firstName: "Elisabeth",
    lastName: "Ruben-Schmid",
    role: "Trainer",
    path: `${basePublicPath}team/elisabeth.webp`,
    description: "To be added soon...",
  },
  {
    firstName: "Divya",
    lastName: "Sharma",
    role: "Trainer",
    path: `${basePublicPath}team/divya.webp`,
    description:
      "I’m Divya, from London. I’ve been at BLA from the start. What keeps me on this merry ship after so many years? Of course, the great team spirit…but also my passion for effective communication. Once you have that, all else follows. Anyone who jumps on board with us is in for a fun and interesting learning experience. We know all too well the tricky waters of our fine language and can help you navigate through, so that when we finally reach the harbour together, you feel confident in all your English interactions. Hop aboard!",
  },
  {
    firstName: "Aggie",
    lastName: "Vierling",
    role: "Trainer",
    path: `${basePublicPath}team/aggie.webp`,
    description: "",
  },
  {
    firstName: "Alex",
    lastName: "Trautwein",
    role: "Trainer",
    path: `${basePublicPath}team/alex.webp`,
    description:
      "Hey, my name is Alex, I study English linguistics at Uni Augsburg and work part-time as a teacher. My first experiences as a teacher were actually not related to English, but rather music and instruments. Back in school, I used to teach some friends of mine drums and guitar, but never thought that I would want to teach professionally. But here I am, and I love it. In my introduction I could have written what my competences and references are, but this standard way of introduction does not suit my philosophy, which I also teach with. For me, it’s all about the individual and their needs. What kind of values you have, what goals and expectations, dreams in life etc. By getting to know each other a little better on a personal level, we can also learn together and achieve more. I always look back to my teachers in music or at school, how they shaped and influenced me, and I want to continue on their path. But enough philosophy, let’s finish with a few personal details about me. I love writing, producing, and playing music, either alone or with a band. I play piano, drums, guitar, bass, and since the pandemic I’ve also started recording music. My idols in music are Kevin Parker, Stu Mackenzie, and Paul McCartney. I’m a football fan, my favourite teams are Bayern Munich (because of my family) and Tottenham, which might seem random, but I’ve been a supporter since I was 11 years old. I also enjoy film, especially the “old classics”: Kubrick, Tarantino, and Fincher are my favourite directors.",
  },
  {
    firstName: "Liam",
    lastName: "O'Riada",
    role: "Trainer",
    path: `${basePublicPath}team/liamoriada.webp`,
    description: "",
  },
  {
    firstName: "Silvia",
    lastName: "Dalla Vechia",
    role: "Trainer",
    path: `${basePublicPath}team/silvia.webp`,
    description: "",
  },
  {
    firstName: "Sara",
    lastName: "Bondi",
    role: "Trainer",
    path: `${basePublicPath}team/sara.webp`,
    description:
      "Born and raised in Italy, I moved to Bavaria as soon as I could because honestly who wants gorgeous weather and delicious food everyday? Since then I shortly lived in the UK, because the Bavarian weather became doch too good, and also managed to get an Italian masters degree. I can teach you how to talk business in Milan, and what to say after you had the best wine of your life in Tuscany (even if you're french). I can't help you with the southern dialect though. There, we would both be in the Lord's hands. Also, my favourite word is, and will always be, Illinois.",
  },
  {
    firstName: "Julia",
    lastName: "Hacker",
    role: "Trainer",
    path: `${basePublicPath}team/default-avatar.webp`,
    description:
      "To be added soon...",
  },
  {
    firstName: "Ulrike",
    lastName: "Weitzel",
    role: "Trainer",
    path: `${basePublicPath}team/default-avatar.webp`,
    description:
      "To be added soon...",
  },
  {
    firstName: "Jaqueline",
    lastName: "Rienecker",
    role: "Trainer",
    path: `${basePublicPath}team/default-avatar.webp`,
    description:
      "To be added soon...",
  },
  {
    firstName: "Dr. Noemi",
    lastName: "Seminara",
    role: "Trainer",
    path: `${basePublicPath}team/default-avatar.webp`,
    description:
      "To be added soon...",
  },
  {
    firstName: "Betina",
    lastName: "Krebs",
    role: "Trainer",
    path: `${basePublicPath}team/default-avatar.webp`,
    description:
      "To be added soon...",
  },
  {
    firstName: "Jeff",
    lastName: "Aristy",
    role: "Trainer",
    path: `${basePublicPath}team/default-avatar.webp`,
    description:
      "To be added soon...",
  },
];

const showFullDescription = ref(Array(data.length).fill(false));

const toggleDescription = (index) => {
  showFullDescription.value[index] = !showFullDescription.value[index];
};
</script>

<style scoped>
.card-title {
  font-size: 16px;
}
</style>
