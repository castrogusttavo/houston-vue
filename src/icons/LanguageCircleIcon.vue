
<template>
  <Icon :iconName="'language-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LanguageCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'language-circle'
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
