
<template>
  <Icon :iconName="'dark-mode'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DarkModeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dark-mode'
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
