
<template>
  <Icon :iconName="'home-10'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Home10Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'home-10'
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
