
<template>
  <Icon :iconName="'alphabet-hebrew'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlphabetHebrewIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alphabet-hebrew'
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
