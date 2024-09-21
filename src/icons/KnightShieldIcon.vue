
<template>
  <Icon :iconName="'knight-shield'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KnightShieldIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'knight-shield'
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
