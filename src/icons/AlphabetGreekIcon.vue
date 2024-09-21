
<template>
  <Icon :iconName="'alphabet-greek'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlphabetGreekIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alphabet-greek'
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
