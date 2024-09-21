
<template>
  <Icon :iconName="'moon-landing'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoonLandingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon-landing'
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
