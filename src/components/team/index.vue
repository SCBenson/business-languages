<template>
  <v-container class="px-8">
    <h1 class="text-custom-purple text-center">Our Team</h1>
    <v-row>
      <v-col cols="12">
        <v-card color="#f4b754">
          <v-row class="mt-2">
            <v-col
              v-for="(member, index) in data"
              :key="index"
              cols="6"
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
  <!-- <v-container>
    <v-row>
      <v-col>
        <h1 style="color: #f4b754">Meet the team!</h1>
        <v-card
          color="#f4b754"
          v-for="(member, index) in data"
          :key="index"
          class="mb-4"
        >
          <v-row>
            <v-col cols="3" class="d-flex align-center">
              <v-img
                :src="member.path"
                height="500"
                cover
                class="bg-grey-lighten-2 mx-auto"
              />
            </v-col>
            <v-col cols="8">
              <v-card-title class="pb-0" style="color: #4b0082"
                >{{ member.firstName }}
              </v-card-title>
              <p class="pl-4 font-weight-bold">
                {{ member.role }}
              </p>
              <v-card-text v-if="member.description">
                {{
                  showFullDescription[index]
                    ? member.description
                    : member.description.slice(0, 500) + "..."
                }}
              </v-card-text>
              <v-card-text v-else class="text-grey"
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente veritatis omnis ab, exercitationem fuga nobis quos
                harum commodi nemo voluptatem amet id adipisci ducimus
                consectetur expedita dolore nostrum quis maxime!
              </v-card-text>
              <span v-if="member.description.length > 500">
                <v-btn
                  class="pa-0 mx-3 bg-transparent"
                  color="blue"
                  variant="text"
                  @click="toggleDescription(index)"
                >
                  {{ showFullDescription[index] ? "Show less" : "Show more" }}
                </v-btn>
              </span>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script setup>
import { ref } from "vue";
const basePublicPath = import.meta.env.BASE_URL || "/";
const data = [
  {
    firstName: "Donal",
    lastName: "O'Riada",
    role: "Co-Founder",
    path: `${basePublicPath}team/donal.png`,
    description:
      "I won’t pretend I grew up wanting to be a Business English trainer; it was something I stumbled upon, having explored professions as diverse as shepherd, actor, roadie, salesman, professional baseball player (ask me), stage builder, etc. and I finally hit on the right career in 1999. Although my name translates from the Gaelic (Irish) as Ruler of the World, Son of Kings, I have managed to keep my feet on the ground, and this is apparent when you look at the team. I have gathered a pool of people who want to be experts in their field and pass on their knowledge. One of my role models is the former French (and Manchester United) footballer Eric Cantona. I saw an interviewer ask him what he considered as being his greatest action on a football pitch (soccer). He didn’t pick one of his countless goals, but rather a blind pass to a colleague (Denis Irwin, if you want to check it out) who scored. The interviewer couldn’t believe that goals which won cups and leagues were secondary to an assist, but Eric said, “you must trust your teammates”. And I do. I studied to become a Business English trainer in 1999 and spent the next few years gaining experience with various schools. I set up the company Business Languages Augsburg (now Business Languages Anywhere!) in October 2004 and three of the trainers who started with me all those years ago are still with me (despite everything). And I have always tried to add youth and ideas to the team, whenever possible, to complement the experience of the senior trainers. Our success has been that we have survived recessions, pandemics, financial crises, and we are still providing training at the top level. We have kept up with the times and ahead of the posse!",
  },
  {
    firstName: "Matthew",
    lastName: "Victor",
    role: "Co-Founder",
    path: `${basePublicPath}team/matthew.png`,
    description:
      "Matthew’s role in the company is many faceted. One of his most important roles is key account manager for companies such as Sortimo, MDT, manroland to name but a few. He liases with the responsible people in these companies to ensure we offer exactly what our clients need and is most beneficial to them. He is our technical expert and can boast a huge knowledge of technical terms and processes thanks to his American/German background and his mastery of both languages. Recently he has turned his talents to video making, including image and training videos for our customers as well as creating his own unique brand of seminar in conjunction with our customer requirements",
  },
  {
    firstName: "Elisabeth",
    lastName: "Rubenschmid",
    role: "Instructor",
    path: `${basePublicPath}team/elisabeth.png`,
    description: "",
  },
  {
    firstName: "Irene",
    lastName: "Frank",
    role: "Instructor",
    path: `${basePublicPath}team/irenefrank.png`,
    description: "",
  },
  {
    firstName: "Divya",
    lastName: "Sharma",
    role: "Instructor",
    path: `${basePublicPath}team/divya.png`,
    description:
      "I’m Divya, from London. I’ve been at BLA from the start. What keeps me on this merry ship after so many years? Of course, the great team spirit…but also my passion for effective communication. Once you have that, all else follows. Anyone who jumps on board with us is in for a fun and interesting learning experience. We know all too well the tricky waters of our fine language and can help you navigate through, so that when we finally reach the harbour together, you feel confident in all your English interactions. Hop aboard!",
  },
  {
    firstName: "Aggie",
    lastName: "Vierling",
    role: "Instructor",
    path: `${basePublicPath}team/aggie.png`,
    description: "",
  },
  {
    firstName: "Alex",
    lastName: "Traurwein",
    role: "Instructor",
    path: `${basePublicPath}team/alex.png`,
    description:
      "Hey, my name is Alex, I study English linguistics at Uni Augsburg and work part-time as a teacher. My first experiences as a teacher were actually not related to English, but rather music and instruments. Back in school, I used to teach some friends of mine drums and guitar, but never thought that I would want to teach professionally. But here I am, and I love it. In my introduction I could have written what my competences and references are, but this standard way of introduction does not suit my philosophy, which I also teach with. For me, it’s all about the individual and their needs. What kind of values you have, what goals and expectations, dreams in life etc. By getting to know each other a little better on a personal level, we can also learn together and achieve more. I always look back to my teachers in music or at school, how they shaped and influenced me, and I want to continue on their path. But enough philosophy, let’s finish with a few personal details about me. I love writing, producing, and playing music, either alone or with a band. I play piano, drums, guitar, bass, and since the pandemic I’ve also started recording music. My idols in music are Kevin Parker, Stu Mackenzie, and Paul McCartney. I’m a football fan, my favourite teams are Bayern Munich (because of my family) and Tottenham, which might seem random, but I’ve been a supporter since I was 11 years old. I also enjoy film, especially the “old classics”: Kubrick, Tarantino, and Fincher are my favourite directors.",
  },
  {
    firstName: "Liam",
    lastName: "O'Riada",
    role: "Instructor",
    path: `${basePublicPath}team/liamoriada.png`,
    description: "",
  },
  {
    firstName: "Silvia",
    lastName: "Dalla Vechia",
    role: "Instructor",
    path: `${basePublicPath}team/silvia.png`,
    description: "",
  },
  {
    firstName: "Sara",
    lastName: "Bondi",
    role: "Instructor",
    path: `${basePublicPath}team/sara.png`,
    description:
      "Born and raised in Italy, I moved to Bavaria as soon as I could because honestly who wants gorgeous weather and delicious food everyday? Since then I shortly lived in the UK, because the Bavarian weather became doch too good, and also managed to get an Italian masters degree. I can teach you how to talk business in Milan, and what to say after you had the best wine of your life in Tuscany (even if you're french). I can't help you with the southern dialect though. There, we would both be in the Lord's hands. Also, my favourite word is, and will always be, Illinois.",
  },
  {
    firstName: "Kelsey",
    lastName: "Bardon",
    role: "Instructor",
    path: `${basePublicPath}team/kelseybardon.png`,
    description: "",
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
