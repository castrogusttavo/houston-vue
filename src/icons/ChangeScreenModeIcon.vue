
<template>
  <Icon :iconName="'change-screen-mode'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChangeScreenModeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'change-screen-mode'
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
