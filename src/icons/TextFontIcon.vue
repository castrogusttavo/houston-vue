
<template>
  <Icon :iconName="'text-font'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextFontIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-font'
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
