
<template>
  <Icon :iconName="'language-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LanguageSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'language-square'
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
