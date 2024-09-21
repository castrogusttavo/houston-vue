
<template>
  <Icon :iconName="'alphabet-korean'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlphabetKoreanIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alphabet-korean'
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
