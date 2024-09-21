
<template>
  <Icon :iconName="'sign-language-c'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SignLanguageCIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sign-language-c'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
