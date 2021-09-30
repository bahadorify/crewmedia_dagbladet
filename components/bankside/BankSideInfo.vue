<template>
  <div class="info-wrapper">
    <template v-if="bank.terms && bank.terms.length">
      <div class="terms">
        <div class="label">Vilkår</div>
        <ul>
          <li v-for="(item, idx) of bank.terms" :key="idx">{{ item }}</li>
        </ul>
      </div>
    </template>
    <template v-if="bank.advantages && bank.advantages.length">
      <div class="advantages">
        <div class="label">Fordeler</div>
        <ul>
          <li v-for="(item, idx) of bank.advantages" :key="idx">{{ item }}</li>
        </ul>
      </div>
    </template>
    <template v-if="bank.disadvantages && bank.disadvantages.length">
      <div class="disadvantages">
        <div class="label">Ulemper</div>
        <ul>
          <li v-for="(item, idx) of bank.disadvantages" :key="idx">
            {{ item }}
          </li>
        </ul>
      </div>
    </template>
    <template v-if="bank.contact && bank.contact.name">
      <div class="contact">
        <div class="label">Kontaktinformasjon</div>
        <div class="info">
          <div class="value">{{ bank.contact.name }}</div>
          <div class="title">Selskap</div>
        </div>
        <div class="info">
          <div class="value">{{ bank.contact.email }}</div>
          <div class="title">E-post</div>
        </div>
        <div class="info">
          <div class="value">{{ bank.contact.tel }}</div>
          <div class="title">Telefon</div>
        </div>
        <div class="info">
          <!-- <div class="value">{{ bank.contact.address1 }}</div>
        <div class="value">{{ bank.contact.address2 }}</div> -->
          <div
            v-for="(item, idx) of bank.contact.address"
            :key="idx"
            class="value"
          >
            {{ item }}
          </div>
          <div class="title">Adresse</div>
        </div>
        <div class="info">
          <a :href="bank.customer_service">Kundeservice</a>
        </div>
        <div class="info">
          <a :href="getUrl(bank.affiliate)" target="_blank">Nettside</a>
        </div>
      </div>
    </template>
    <template v-if="bank.opening_hours && bank.opening_hours.length">
      <div class="opening">
        <div class="label">Åpningstider</div>
        <div v-for="(item, idx) of bank.opening_hours" :key="idx" class="info">
          <div class="value">{{ item.hours }}</div>
          <div class="title">{{ item.weekdays }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import BaseUrl from '~/mixins/baseUrl.js'

export default {
  mixins: [BaseUrl],
  props: ['bank'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.info-wrapper {
  font-size: 14px;
  line-height: 22px;
  color: $textSecondary;
  & > * {
    padding: 18px;
    border-bottom: 1px solid $bGrey;
    &:last-child {
      border-bottom: 0;
    }
  }
  ul {
    padding-left: 14px;
  }
  li {
    list-style: none;
    &::before {
      content: '\2022';
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
  .advantages li::before {
    color: $bGreen;
  }
  .disadvantages li::before {
    color: $bRed;
  }
}
.label {
  font-size: 15px;
  line-height: 25px;
  font-weight: 500;
  margin-bottom: 15px;
}
.info {
  margin-bottom: 15px;

  .title {
    font-size: 13px;
    color: $textTertiary;
  }
  a {
    color: $bRed;
  }
}
</style>
