
<template>
  <Icon :iconName="'alphabet-japanese'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlphabetJapaneseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alphabet-japanese'
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
