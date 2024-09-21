
<template>
  <Icon :iconName="'letter-spacing'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LetterSpacingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'letter-spacing'
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
