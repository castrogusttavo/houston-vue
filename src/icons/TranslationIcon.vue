
<template>
  <Icon :iconName="'translation'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TranslationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'translation'
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
